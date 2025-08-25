import path from 'path';
import { fileURLToPath } from 'url';

import { buildConfig, PayloadRequest } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { sqliteAdapter } from '@payloadcms/db-sqlite';
import { en } from '@payloadcms/translations/languages/en';
import { uk } from '@payloadcms/translations/languages/uk';

import sharp from 'sharp';

import { defaultLexical } from '@/fields/defaultLexical';

import { Categories } from './collections/Categories';
import { Media } from './collections/Media';
import { OrderSubmissions } from './collections/OrderSubmissions';
import { Pages } from './collections/Pages';
import { Posts } from './collections/Posts';
import { Products } from './collections/Products';
import { Subscribers } from './collections/Subscribers';
import { Users } from './collections/Users';
import { ContactInfo } from './globals/ContactInfo/config';
import { Footer } from './globals/Footer/config';
import { Header } from './globals/Header/config';
import { PostPageSettings } from './globals/PostPageSettings/config';
import { ProductPageSettings } from './globals/ProductPageSettings/config';
import localization from './i18n/localization';
import { plugins } from './plugins';
import { getServerSideURL } from './utilities/getURL';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const getDatabaseAdapter = () => {
  const databaseUri = process.env.DATABASE_URI;
  const useSqlite = process.env.USE_SQLITE === 'true' || databaseUri?.startsWith('file:');

  if (useSqlite) {
    return sqliteAdapter({
      client: {
        url: databaseUri || 'file:./payload.db',
      },
    });
  }

  return postgresAdapter({
    pool: {
      connectionString: databaseUri,
    },
  });
};

export default buildConfig({
  i18n: {
    fallbackLanguage: 'uk',
    supportedLanguages: { en, uk },
  },
  localization,
  admin: {
    components: {
      beforeLogin: ['@/components/BeforeLogin'],
      beforeDashboard: ['@/components/BeforeDashboard'],
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  editor: defaultLexical,
  db: getDatabaseAdapter(),
  collections: [Pages, Categories, Products, Posts, Media, OrderSubmissions, Subscribers, Users],
  cors: [getServerSideURL()].filter(Boolean),
  globals: [ContactInfo, ProductPageSettings, PostPageSettings, Header, Footer],
  plugins: [...plugins],
  secret: process.env.PAYLOAD_SECRET,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  jobs: {
    access: {
      run: ({ req }: { req: PayloadRequest }): boolean => {
        if (req.user) return true;

        const authHeader = req.headers.get('authorization');
        return authHeader === `Bearer ${process.env.CRON_SECRET}`;
      },
    },
    tasks: [],
  },
});
