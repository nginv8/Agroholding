import type { CollectionSlug, File, GlobalSlug, Payload, PayloadRequest } from 'payload';

import { contactForm as contactFormData } from './contact-form';
import { contactInfoGlobalData } from './global-contact-info';
import { footerGlobalData } from './global-footer';
import { headerGlobalData } from './global-header';
import { postPageSettingsGlobalData } from './global-post-page-settings';
import { productPageSettingsGlobalData } from './global-product-page-settings';
import { home } from './home';
import { aboutPage } from './page-about';
import { contactPage } from './page-contact';
import { logisticsPage } from './page-logistics';
import { qualityPage } from './page-quality';
import { post1, post1_en } from './post-1';
import { post2, post2_en } from './post-2';
import { post3, post3_en } from './post-3';
import { post4, post4_en } from './post-4';
import { post5, post5_en } from './post-5';
import { post6, post6_en } from './post-6';
import { post7, post7_en } from './post-7';
import { post8, post8_en } from './post-8';
import { post9, post9_en } from './post-9';
import { post10, post10_en } from './post-10';
import { product1, product1_en } from './product-1';
import { product2, product2_en } from './product-2';
import { product3, product3_en } from './product-3';
import { product4, product4_en } from './product-4';
import { product5, product5_en } from './product-5';
import { product6, product6_en } from './product-6';
import { product7, product7_en } from './product-7';
import { product8, product8_en } from './product-8';
import { product9, product9_en } from './product-9';
import { product10, product10_en } from './product-10';

const collections: CollectionSlug[] = [
  'categories',
  'media',
  'pages',
  'posts',
  'products',
  'users',
  'forms',
  'form-submissions',
  'redirects',
  'search',
];
const globals: GlobalSlug[] = [
  'header',
  'footer',
  'contactInfo',
  'postPageSettings',
  'productPageSettings',
];

// Next.js revalidation errors are normal when seeding the database without a server running
// i.e. running `yarn seed` locally instead of using the admin UI within an active app
// The app is not running to revalidate the pages and so the API routes are not available
// These error messages can be ignored: `Error hitting revalidate route for...`
export const seed = async ({
  payload,
  req,
}: {
  payload: Payload;
  req: PayloadRequest;
}): Promise<void> => {
  payload.logger.info('Seeding database...');

  payload.logger.info(`> Clearing collections and globals...`);

  await Promise.all(
    globals.map((global) =>
      payload.updateGlobal({
        slug: global,
        data: getData({}),

        context: {
          disableRevalidate: true,
        },
      })
    )
  );

  await Promise.all(
    collections.map((collection) => {
      if (collection === 'users') {
        return payload.db.deleteMany({
          collection,
          req,
          where: {
            id: {
              not_equals: req.user?.id,
            },
          },
        });
      }
      return payload.db.deleteMany({ collection, req, where: {} });
    })
  );

  await Promise.all(
    collections
      .filter((collection) => Boolean(payload.collections[collection].config.versions))
      .map((collection) => payload.db.deleteVersions({ collection, req, where: {} }))
  );

  // #region Cleanup
  payload.logger.info(`> Deleting demo author...`);
  try {
    const {
      docs: [demoUser],
    } = await payload.find({
      collection: 'users',
      where: {
        email: {
          equals: 'demo-author@example.com',
        },
      },
      limit: 1,
    });
    if (demoUser) {
      await payload.delete({
        collection: 'users',
        id: demoUser.id,
      });
    }
  } catch (_error) {
    payload.logger.info('Demo user not found, skipping deletion');
  }

  // #endregion

  payload.logger.info(`> Seeding demo author and categories...`);

  const demoAuthor = await payload.create({
    collection: 'users',
    data: getData({
      name: 'Demo Author',
      email: 'demo-author@example.com',
      password: 'password',
    }),
    req,
  });

  // #region Categories

  const technologiesCategory = await payload.create({
    collection: 'categories',
    locale: 'uk',
    data: getData({ title: 'Технології вирощування' }),
    req,
  });
  await payload.update({
    collection: 'categories',
    id: technologiesCategory.id,
    locale: 'en',
    data: getData({ title: 'Growing Technologies' }),
    req,
  });

  const companyNewsCategory = await payload.create({
    collection: 'categories',
    locale: 'uk',
    data: getData({ title: 'Новини компанії' }),
    req,
  });
  await payload.update({
    collection: 'categories',
    id: companyNewsCategory.id,
    locale: 'en',
    data: getData({ title: 'Company News' }),
    req,
  });

  const exportCategory = await payload.create({
    collection: 'categories',
    locale: 'uk',
    data: getData({ title: 'Експорт' }),
    req,
  });
  await payload.update({
    collection: 'categories',
    id: exportCategory.id,
    locale: 'en',
    data: getData({ title: 'Export' }),
    req,
  });

  const sustainabilityCategory = await payload.create({
    collection: 'categories',
    locale: 'uk',
    data: getData({ title: 'Сталий розвиток' }),
    req,
  });
  await payload.update({
    collection: 'categories',
    id: sustainabilityCategory.id,
    locale: 'en',
    data: getData({ title: 'Sustainable Development' }),
    req,
  });

  const grainsCategory = await payload.create({
    collection: 'categories',
    locale: 'uk',
    data: getData({ title: 'Зернові культури' }),
    req,
  });
  await payload.update({
    collection: 'categories',
    id: grainsCategory.id,
    locale: 'en',
    data: getData({ title: 'Grain Crops' }),
    req,
  });

  const processedProductsCategory = await payload.create({
    collection: 'categories',
    locale: 'uk',
    data: getData({ title: 'Продукти переробки' }),
    req,
  });
  await payload.update({
    collection: 'categories',
    id: processedProductsCategory.id,
    locale: 'en',
    data: getData({ title: 'Processed Products' }),
    req,
  });

  const logisticsCategory = await payload.create({
    collection: 'categories',
    locale: 'uk',
    data: getData({ title: 'Логістика' }),
    req,
  });
  await payload.update({
    collection: 'categories',
    id: logisticsCategory.id,
    locale: 'en',
    data: getData({ title: 'Logistics' }),
    req,
  });

  // #endregion

  // #region Media
  payload.logger.info(`> Seeding media...`);

  const [
    image1Buffer,
    image2Buffer,
    image3Buffer,
    image4Buffer,
    image5Buffer,
    image6Buffer,
    image7Buffer,
    image8Buffer,
    image9Buffer,
    image10Buffer,
    image11Buffer,
    image12Buffer,
    image13Buffer,
    image14Buffer,
    image15Buffer,
    image16Buffer,
    image17Buffer,
    image18Buffer,
    image19Buffer,
    image20Buffer,
    hero1Buffer,
    pdfDocBuffer,
    docxDocBuffer,
    zipDocBuffer,
  ] = await Promise.all([
    fetchLocalImage('corn-field-green-1.jpg'),
    fetchLocalImage('corn-cobs-raw-1.jpg'),
    fetchLocalImage('combine-harvester-1.jpg'),
    fetchLocalImage('corn-field-green-2.jpg'),
    fetchLocalImage('tractor-in-field-1.jpg'),
    fetchLocalImage('grain-field-1.jpg'),
    fetchLocalImage('harvested-corn-cobs-1.jpg'),
    fetchLocalImage('corn-field-dry-1.jpg'),
    fetchLocalImage('combine-harvester-2.jpg'),
    fetchLocalImage('elevators-1.jpg'),
    fetchLocalImage('corn-in-sacks-1.jpg'),
    fetchLocalImage('fresh-corn-cob-1.jpg'),
    fetchLocalImage('popcorn-kernels-1.jpg'),
    fetchLocalImage('truck-transporting-1.jpg'),
    fetchLocalImage('irrigation-system.jpg'),
    fetchLocalImage('farmers-group-1.jpg'),
    fetchLocalImage('business-portrait-man.jpg'),
    fetchLocalImage('grain-field-sunset-1.jpg'),
    fetchLocalImage('corn-field-high-stalks-1.jpg'),
    fetchLocalImage('corn-field-sunny-1.jpg'),
    fetchLocalImage('corn-field-sunset.jpg'),
    fetchLocalDocument('document.pdf'),
    fetchLocalDocument('document.docx'),
    fetchLocalDocument('archive.zip'),
  ]);

  const image1Doc = await payload.create({
    collection: 'media',
    locale: 'uk',
    data: getData({ alt: 'Зелене кукурудзяне поле' }),
    file: image1Buffer,
    req,
  });
  await payload.update({
    collection: 'media',
    id: image1Doc.id,
    locale: 'en',
    data: getData({ alt: 'Green corn field' }),
    req,
  });

  const image2Doc = await payload.create({
    collection: 'media',
    locale: 'uk',
    data: getData({ alt: 'Сирі кукурудзяні качани' }),
    file: image2Buffer,
    req,
  });
  await payload.update({
    collection: 'media',
    id: image2Doc.id,
    locale: 'en',
    data: getData({ alt: 'Raw corn cobs' }),
    req,
  });

  const image3Doc = await payload.create({
    collection: 'media',
    locale: 'uk',
    data: getData({ alt: 'Комбайн для збирання врожаю' }),
    file: image3Buffer,
    req,
  });
  await payload.update({
    collection: 'media',
    id: image3Doc.id,
    locale: 'en',
    data: getData({ alt: 'Combine harvester' }),
    req,
  });

  const imageHomeDoc = await payload.create({
    collection: 'media',
    locale: 'uk',
    data: getData({ alt: 'Кукурудзяне поле на заході сонця' }),
    file: hero1Buffer,
    req,
  });
  await payload.update({
    collection: 'media',
    id: imageHomeDoc.id,
    locale: 'en',
    data: getData({ alt: 'Corn field at sunset' }),
    req,
  });

  const image4Doc = await payload.create({
    collection: 'media',
    locale: 'uk',
    data: getData({ alt: 'Зелене кукурудзяне поле 2' }),
    file: image4Buffer,
    req,
  });
  await payload.update({
    collection: 'media',
    id: image4Doc.id,
    locale: 'en',
    data: getData({ alt: 'Green corn field 2' }),
    req,
  });

  const image5Doc = await payload.create({
    collection: 'media',
    locale: 'uk',
    data: getData({ alt: 'Трактор в полі' }),
    file: image5Buffer,
    req,
  });
  await payload.update({
    collection: 'media',
    id: image5Doc.id,
    locale: 'en',
    data: getData({ alt: 'Tractor in field' }),
    req,
  });

  const image6Doc = await payload.create({
    collection: 'media',
    locale: 'uk',
    data: getData({ alt: 'Зернове поле' }),
    file: image6Buffer,
    req,
  });
  await payload.update({
    collection: 'media',
    id: image6Doc.id,
    locale: 'en',
    data: getData({ alt: 'Grain field' }),
    req,
  });

  const image7Doc = await payload.create({
    collection: 'media',
    locale: 'uk',
    data: getData({ alt: 'Зібрані кукурудзяні качани' }),
    file: image7Buffer,
    req,
  });
  await payload.update({
    collection: 'media',
    id: image7Doc.id,
    locale: 'en',
    data: getData({ alt: 'Harvested corn cobs' }),
    req,
  });

  const image8Doc = await payload.create({
    collection: 'media',
    locale: 'uk',
    data: getData({ alt: 'Сухе кукурудзяне поле' }),
    file: image8Buffer,
    req,
  });
  await payload.update({
    collection: 'media',
    id: image8Doc.id,
    locale: 'en',
    data: getData({ alt: 'Dry corn field' }),
    req,
  });

  const image9Doc = await payload.create({
    collection: 'media',
    locale: 'uk',
    data: getData({ alt: 'Комбайн для збирання врожаю 2' }),
    file: image9Buffer,
    req,
  });
  await payload.update({
    collection: 'media',
    id: image9Doc.id,
    locale: 'en',
    data: getData({ alt: 'Combine harvester 2' }),
    req,
  });

  const image10Doc = await payload.create({
    collection: 'media',
    locale: 'uk',
    data: getData({ alt: 'Елеватори' }),
    file: image10Buffer,
    req,
  });
  await payload.update({
    collection: 'media',
    id: image10Doc.id,
    locale: 'en',
    data: getData({ alt: 'Elevators' }),
    req,
  });

  const image11Doc = await payload.create({
    collection: 'media',
    locale: 'uk',
    data: getData({ alt: 'Кукурудза в мішках' }),
    file: image11Buffer,
    req,
  });
  await payload.update({
    collection: 'media',
    id: image11Doc.id,
    locale: 'en',
    data: getData({ alt: 'Corn in sacks' }),
    req,
  });

  const image12Doc = await payload.create({
    collection: 'media',
    locale: 'uk',
    data: getData({ alt: 'Свіжий кукурудзяний качан' }),
    file: image12Buffer,
    req,
  });
  await payload.update({
    collection: 'media',
    id: image12Doc.id,
    locale: 'en',
    data: getData({ alt: 'Fresh corn cob' }),
    req,
  });

  const image13Doc = await payload.create({
    collection: 'media',
    locale: 'uk',
    data: getData({ alt: 'Зерна попкорну' }),
    file: image13Buffer,
    req,
  });
  await payload.update({
    collection: 'media',
    id: image13Doc.id,
    locale: 'en',
    data: getData({ alt: 'Popcorn kernels' }),
    req,
  });

  const image14Doc = await payload.create({
    collection: 'media',
    locale: 'uk',
    data: getData({ alt: 'Вантажівка для транспортування' }),
    file: image14Buffer,
    req,
  });
  await payload.update({
    collection: 'media',
    id: image14Doc.id,
    locale: 'en',
    data: getData({ alt: 'Transport truck' }),
    req,
  });

  const image15Doc = await payload.create({
    collection: 'media',
    locale: 'uk',
    data: getData({ alt: 'Система зрошення' }),
    file: image15Buffer,
    req,
  });
  await payload.update({
    collection: 'media',
    id: image15Doc.id,
    locale: 'en',
    data: getData({ alt: 'Irrigation system' }),
    req,
  });

  const image16Doc = await payload.create({
    collection: 'media',
    locale: 'uk',
    data: getData({ alt: 'Група фермерів' }),
    file: image16Buffer,
    req,
  });
  await payload.update({
    collection: 'media',
    id: image16Doc.id,
    locale: 'en',
    data: getData({ alt: 'Group of farmers' }),
    req,
  });

  const image17Doc = await payload.create({
    collection: 'media',
    locale: 'uk',
    data: getData({ alt: 'Бізнес-портрет чоловіка' }),
    file: image17Buffer,
    req,
  });
  await payload.update({
    collection: 'media',
    id: image17Doc.id,
    locale: 'en',
    data: getData({ alt: 'Business portrait man' }),
    req,
  });

  const image18Doc = await payload.create({
    collection: 'media',
    locale: 'uk',
    data: getData({ alt: 'Зернове поле на заході сонця' }),
    file: image18Buffer,
    req,
  });
  await payload.update({
    collection: 'media',
    id: image18Doc.id,
    locale: 'en',
    data: getData({ alt: 'Grain field at sunset' }),
    req,
  });

  const image19Doc = await payload.create({
    collection: 'media',
    locale: 'uk',
    data: getData({ alt: 'Високі стебла кукурудзи' }),
    file: image19Buffer,
    req,
  });
  await payload.update({
    collection: 'media',
    id: image19Doc.id,
    locale: 'en',
    data: getData({ alt: 'High corn stalks' }),
    req,
  });

  const image20Doc = await payload.create({
    collection: 'media',
    locale: 'uk',
    data: getData({ alt: 'Сонячне кукурудзяне поле' }),
    file: image20Buffer,
    req,
  });
  await payload.update({
    collection: 'media',
    id: image20Doc.id,
    locale: 'en',
    data: getData({ alt: 'Sunny corn field' }),
    req,
  });

  const pdfDoc = await payload.create({
    collection: 'media',
    locale: 'uk',
    data: getData({ alt: 'Технічна специфікація продукту PDF' }),
    file: pdfDocBuffer,
    req,
  });
  await payload.update({
    collection: 'media',
    id: pdfDoc.id,
    locale: 'en',
    data: getData({ alt: 'Product technical specification PDF' }),
    req,
  });

  const docxDoc = await payload.create({
    collection: 'media',
    locale: 'uk',
    data: getData({ alt: 'Каталог продукції DOCX' }),
    file: docxDocBuffer,
    req,
  });
  await payload.update({
    collection: 'media',
    id: docxDoc.id,
    locale: 'en',
    data: getData({ alt: 'Product catalog DOCX' }),
    req,
  });

  const zipDoc = await payload.create({
    collection: 'media',
    locale: 'uk',
    data: getData({ alt: 'Архів сертифікатів та документів' }),
    file: zipDocBuffer,
    req,
  });
  await payload.update({
    collection: 'media',
    id: zipDoc.id,
    locale: 'en',
    data: getData({ alt: 'Certificates and documents archive' }),
    req,
  });

  // #endregion

  // #region Posts
  payload.logger.info(`> Seeding posts...`);

  const post1Doc = await payload.create({
    collection: 'posts',
    locale: 'uk',

    context: { disableRevalidate: true },
    data: getData({
      ...post1({ heroImage: image1Doc, blockImage: image5Doc, author: demoAuthor }),
    }),
    req,
  });
  await payload.update({
    collection: 'posts',
    id: post1Doc.id,
    locale: 'en',
    data: getData({
      ...post1_en({ heroImage: image1Doc, blockImage: image5Doc, author: demoAuthor }),
    }),
    req,
  });

  const post2Doc = await payload.create({
    collection: 'posts',
    locale: 'uk',

    context: { disableRevalidate: true },
    data: getData({
      ...post2({ heroImage: image8Doc, blockImage: image9Doc, author: demoAuthor }),
    }),
    req,
  });
  await payload.update({
    collection: 'posts',
    id: post2Doc.id,
    locale: 'en',
    data: getData({
      ...post2_en({ heroImage: image8Doc, blockImage: image9Doc, author: demoAuthor }),
    }),
    req,
  });

  const post3Doc = await payload.create({
    collection: 'posts',
    locale: 'uk',

    context: { disableRevalidate: true },
    data: getData({
      ...post3({ heroImage: image6Doc, blockImage: image7Doc, author: demoAuthor }),
    }),
    req,
  });
  await payload.update({
    collection: 'posts',
    id: post3Doc.id,
    locale: 'en',
    data: getData({
      ...post3_en({ heroImage: image6Doc, blockImage: image7Doc, author: demoAuthor }),
    }),
    req,
  });

  const post4Doc = await payload.create({
    collection: 'posts',
    locale: 'uk',

    context: { disableRevalidate: true },
    data: getData({
      ...post4({ heroImage: image4Doc, blockImage: image15Doc, author: demoAuthor }),
    }),
    req,
  });
  await payload.update({
    collection: 'posts',
    id: post4Doc.id,
    locale: 'en',
    data: getData({
      ...post4_en({ heroImage: image4Doc, blockImage: image15Doc, author: demoAuthor }),
    }),
    req,
  });

  const post5Doc = await payload.create({
    collection: 'posts',
    locale: 'uk',

    context: { disableRevalidate: true },
    data: getData({
      ...post5({ heroImage: image18Doc, blockImage: image16Doc, author: demoAuthor }),
    }),
    req,
  });
  await payload.update({
    collection: 'posts',
    id: post5Doc.id,
    locale: 'en',
    data: getData({
      ...post5_en({ heroImage: image18Doc, blockImage: image16Doc, author: demoAuthor }),
    }),
    req,
  });

  const post6Doc = await payload.create({
    collection: 'posts',
    locale: 'uk',

    context: { disableRevalidate: true },
    data: getData({
      ...post6({ heroImage: image12Doc, blockImage: image11Doc, author: demoAuthor }),
    }),
    req,
  });
  await payload.update({
    collection: 'posts',
    id: post6Doc.id,
    locale: 'en',
    data: getData({
      ...post6_en({ heroImage: image12Doc, blockImage: image11Doc, author: demoAuthor }),
    }),
    req,
  });

  const post7Doc = await payload.create({
    collection: 'posts',
    locale: 'uk',

    context: { disableRevalidate: true },
    data: getData({
      ...post7({ heroImage: image13Doc, blockImage: image2Doc, author: demoAuthor }),
    }),
    req,
  });
  await payload.update({
    collection: 'posts',
    id: post7Doc.id,
    locale: 'en',
    data: getData({
      ...post7_en({ heroImage: image13Doc, blockImage: image2Doc, author: demoAuthor }),
    }),
    req,
  });

  const post8Doc = await payload.create({
    collection: 'posts',
    locale: 'uk',

    context: { disableRevalidate: true },
    data: getData({
      ...post8({ heroImage: image14Doc, blockImage: image10Doc, author: demoAuthor }),
    }),
    req,
  });
  await payload.update({
    collection: 'posts',
    id: post8Doc.id,
    locale: 'en',
    data: getData({
      ...post8_en({ heroImage: image14Doc, blockImage: image10Doc, author: demoAuthor }),
    }),
    req,
  });

  const post9Doc = await payload.create({
    collection: 'posts',
    locale: 'uk',

    context: { disableRevalidate: true },
    data: getData({
      ...post9({ heroImage: image19Doc, blockImage: image3Doc, author: demoAuthor }),
    }),
    req,
  });
  await payload.update({
    collection: 'posts',
    id: post9Doc.id,
    locale: 'en',
    data: getData({
      ...post9_en({ heroImage: image19Doc, blockImage: image3Doc, author: demoAuthor }),
    }),
    req,
  });

  const post10Doc = await payload.create({
    collection: 'posts',
    locale: 'uk',

    context: { disableRevalidate: true },
    data: getData({
      ...post10({ heroImage: image20Doc, blockImage: image17Doc, author: demoAuthor }),
    }),
    req,
  });
  await payload.update({
    collection: 'posts',
    id: post10Doc.id,
    locale: 'en',
    data: getData({
      ...post10_en({ heroImage: image20Doc, blockImage: image17Doc, author: demoAuthor }),
    }),
    req,
  });

  // #region Related Posts
  // Update related posts relationships and categories
  await payload.update({
    id: post1Doc.id,
    collection: 'posts',
    data: getData({
      relatedPosts: [post2Doc.id, post3Doc.id],
      categories: [technologiesCategory.id],
    }),
    req,
  });
  await payload.update({
    id: post2Doc.id,
    collection: 'posts',
    data: getData({
      relatedPosts: [post8Doc.id, post6Doc.id],
      categories: [companyNewsCategory.id],
    }),
    req,
  });
  await payload.update({
    id: post3Doc.id,
    collection: 'posts',
    data: getData({
      relatedPosts: [post1Doc.id, post7Doc.id, post4Doc.id, post9Doc.id],
      categories: [],
    }),
    req,
  });
  await payload.update({
    id: post4Doc.id,
    collection: 'posts',
    data: getData({
      relatedPosts: [post6Doc.id, post10Doc.id, post3Doc.id, post2Doc.id],
      categories: [],
    }),
    req,
  });
  await payload.update({
    id: post5Doc.id,
    collection: 'posts',
    data: getData({
      relatedPosts: [post9Doc.id, post10Doc.id],
      categories: [sustainabilityCategory.id],
    }),
    req,
  });
  await payload.update({
    id: post6Doc.id,
    collection: 'posts',
    data: getData({
      relatedPosts: [post4Doc.id, post2Doc.id, post8Doc.id],
      categories: [grainsCategory.id],
    }),
    req,
  });
  await payload.update({
    id: post7Doc.id,
    collection: 'posts',
    data: getData({
      relatedPosts: [post1Doc.id, post3Doc.id],
      categories: [processedProductsCategory.id],
    }),
    req,
  });
  await payload.update({
    id: post8Doc.id,
    collection: 'posts',
    data: getData({
      relatedPosts: [post2Doc.id],
      categories: [logisticsCategory.id],
    }),
    req,
  });
  await payload.update({
    id: post9Doc.id,
    collection: 'posts',
    data: getData({
      relatedPosts: [post5Doc.id, post10Doc.id, post3Doc.id],
      categories: [exportCategory.id],
    }),
    req,
  });
  await payload.update({
    id: post10Doc.id,
    collection: 'posts',
    data: getData({
      relatedPosts: [post9Doc.id, post5Doc.id],
      categories: [],
    }),
    req,
  });
  // #endregion

  // #endregion

  // #region Products
  payload.logger.info(`> Seeding products...`);

  const product1Doc = await payload.create({
    collection: 'products',
    locale: 'uk',

    context: { disableRevalidate: true },
    data: getData({
      ...product1({
        heroImage1: image1Doc,
        heroImage2: image2Doc,
        heroImage3: image12Doc,
        heroImage4: image7Doc,
        heroImage5: image4Doc,
        blockImage: image11Doc,
        pdfDoc: pdfDoc,
        author: demoAuthor,
      }),
    }),
    req,
  });
  await payload.update({
    collection: 'products',
    id: product1Doc.id,
    locale: 'en',
    data: getData({
      ...product1_en({
        heroImage1: image1Doc,
        heroImage2: image2Doc,
        heroImage3: image12Doc,
        heroImage4: image7Doc,
        heroImage5: image4Doc,
        blockImage: image11Doc,
        pdfDoc: pdfDoc,
        author: demoAuthor,
      }),
    }),
    req,
  });

  const product2Doc = await payload.create({
    collection: 'products',
    locale: 'uk',

    context: { disableRevalidate: true },
    data: getData({
      ...product2({
        heroImage1: image6Doc,
        heroImage2: image8Doc,
        heroImage3: image13Doc,
        heroImage4: image5Doc,
        heroImage5: image18Doc,
        blockImage: image3Doc,
        pdfDoc: docxDoc,
        author: demoAuthor,
      }),
    }),
    req,
  });
  await payload.update({
    collection: 'products',
    id: product2Doc.id,
    locale: 'en',
    data: getData({
      ...product2_en({
        heroImage1: image6Doc,
        heroImage2: image8Doc,
        heroImage3: image13Doc,
        heroImage4: image5Doc,
        heroImage5: image18Doc,
        blockImage: image3Doc,
        pdfDoc: docxDoc,
        author: demoAuthor,
      }),
    }),
    req,
  });

  const product3Doc = await payload.create({
    collection: 'products',
    locale: 'uk',

    context: { disableRevalidate: true },
    data: getData({
      ...product3({
        heroImage1: image9Doc,
        heroImage2: image10Doc,
        heroImage3: image14Doc,
        heroImage4: image15Doc,
        heroImage5: image19Doc,
        blockImage: image16Doc,
        pdfDoc: zipDoc,
        author: demoAuthor,
      }),
    }),
    req,
  });
  await payload.update({
    collection: 'products',
    id: product3Doc.id,
    locale: 'en',
    data: getData({
      ...product3_en({
        heroImage1: image9Doc,
        heroImage2: image10Doc,
        heroImage3: image14Doc,
        heroImage4: image15Doc,
        heroImage5: image19Doc,
        blockImage: image16Doc,
        pdfDoc: zipDoc,
        author: demoAuthor,
      }),
    }),
    req,
  });

  const product4Doc = await payload.create({
    collection: 'products',
    locale: 'uk',

    context: { disableRevalidate: true },
    data: getData({
      ...product4({
        heroImage1: image20Doc,
        heroImage2: image17Doc,
        heroImage3: image4Doc,
        heroImage4: imageHomeDoc,
        heroImage5: image1Doc,
        blockImage: image7Doc,
        pdfDoc: docxDoc,
        author: demoAuthor,
      }),
    }),
    req,
  });
  await payload.update({
    collection: 'products',
    id: product4Doc.id,
    locale: 'en',
    data: getData({
      ...product4_en({
        heroImage1: image20Doc,
        heroImage2: image17Doc,
        heroImage3: image4Doc,
        heroImage4: imageHomeDoc,
        heroImage5: image1Doc,
        blockImage: image7Doc,
        pdfDoc: docxDoc,
        author: demoAuthor,
      }),
    }),
    req,
  });

  const product5Doc = await payload.create({
    collection: 'products',
    locale: 'uk',

    context: { disableRevalidate: true },
    data: getData({
      ...product5({
        heroImage1: image2Doc,
        heroImage2: image6Doc,
        heroImage3: image9Doc,
        heroImage4: image12Doc,
        heroImage5: image8Doc,
        blockImage: image15Doc,
        pdfDoc: docxDoc,
        author: demoAuthor,
      }),
    }),
    req,
  });
  await payload.update({
    collection: 'products',
    id: product5Doc.id,
    locale: 'en',
    data: getData({
      ...product5_en({
        heroImage1: image2Doc,
        heroImage2: image6Doc,
        heroImage3: image9Doc,
        heroImage4: image12Doc,
        heroImage5: image8Doc,
        blockImage: image15Doc,
        pdfDoc: docxDoc,
        author: demoAuthor,
      }),
    }),
    req,
  });

  const product6Doc = await payload.create({
    collection: 'products',
    locale: 'uk',

    context: { disableRevalidate: true },
    data: getData({
      ...product6({
        heroImage1: image11Doc,
        heroImage2: image13Doc,
        heroImage3: image5Doc,
        heroImage4: image14Doc,
        heroImage5: image16Doc,
        blockImage: image10Doc,
        pdfDoc: docxDoc,
        author: demoAuthor,
      }),
    }),
    req,
  });
  await payload.update({
    collection: 'products',
    id: product6Doc.id,
    locale: 'en',
    data: getData({
      ...product6_en({
        heroImage1: image11Doc,
        heroImage2: image13Doc,
        heroImage3: image5Doc,
        heroImage4: image14Doc,
        heroImage5: image16Doc,
        blockImage: image10Doc,
        pdfDoc: docxDoc,
        author: demoAuthor,
      }),
    }),
    req,
  });

  const product7Doc = await payload.create({
    collection: 'products',
    locale: 'uk',

    context: { disableRevalidate: true },
    data: getData({
      ...product7({
        heroImage1: image18Doc,
        heroImage2: image19Doc,
        heroImage3: image3Doc,
        heroImage4: image1Doc,
        heroImage5: image4Doc,
        blockImage: image17Doc,
        pdfDoc: zipDoc,
        author: demoAuthor,
      }),
    }),
    req,
  });
  await payload.update({
    collection: 'products',
    id: product7Doc.id,
    locale: 'en',
    data: getData({
      ...product7_en({
        heroImage1: image18Doc,
        heroImage2: image19Doc,
        heroImage3: image3Doc,
        heroImage4: image1Doc,
        heroImage5: image4Doc,
        blockImage: image17Doc,
        pdfDoc: zipDoc,
        author: demoAuthor,
      }),
    }),
    req,
  });

  const product8Doc = await payload.create({
    collection: 'products',
    locale: 'uk',

    context: { disableRevalidate: true },
    data: getData({
      ...product8({
        heroImage1: image12Doc,
        heroImage2: image7Doc,
        heroImage3: imageHomeDoc,
        heroImage4: image6Doc,
        heroImage5: image20Doc,
        blockImage: image9Doc,
        pdfDoc: zipDoc,
        author: demoAuthor,
      }),
    }),
    req,
  });
  await payload.update({
    collection: 'products',
    id: product8Doc.id,
    locale: 'en',
    data: getData({
      ...product8_en({
        heroImage1: image12Doc,
        heroImage2: image7Doc,
        heroImage3: imageHomeDoc,
        heroImage4: image6Doc,
        heroImage5: image20Doc,
        blockImage: image9Doc,
        pdfDoc: zipDoc,
        author: demoAuthor,
      }),
    }),
    req,
  });

  const product9Doc = await payload.create({
    collection: 'products',
    locale: 'uk',

    context: { disableRevalidate: true },
    data: getData({
      ...product9({
        heroImage1: image8Doc,
        heroImage2: image14Doc,
        heroImage3: image15Doc,
        heroImage4: image2Doc,
        heroImage5: image11Doc,
        blockImage: image5Doc,
        pdfDoc: zipDoc,
        author: demoAuthor,
      }),
    }),
    req,
  });
  await payload.update({
    collection: 'products',
    id: product9Doc.id,
    locale: 'en',
    data: getData({
      ...product9_en({
        heroImage1: image8Doc,
        heroImage2: image14Doc,
        heroImage3: image15Doc,
        heroImage4: image2Doc,
        heroImage5: image11Doc,
        blockImage: image5Doc,
        pdfDoc: zipDoc,
        author: demoAuthor,
      }),
    }),
    req,
  });

  const product10Doc = await payload.create({
    collection: 'products',
    locale: 'uk',

    context: { disableRevalidate: true },
    data: getData({
      ...product10({
        heroImage1: image13Doc,
        heroImage2: image16Doc,
        heroImage3: image10Doc,
        heroImage4: imageHomeDoc,
        heroImage5: image1Doc,
        blockImage: image18Doc,
        pdfDoc: zipDoc,
        author: demoAuthor,
      }),
    }),
    req,
  });
  await payload.update({
    collection: 'products',
    id: product10Doc.id,
    locale: 'en',
    data: getData({
      ...product10_en({
        heroImage1: image13Doc,
        heroImage2: image16Doc,
        heroImage3: image10Doc,
        heroImage4: imageHomeDoc,
        heroImage5: image1Doc,
        blockImage: image18Doc,
        pdfDoc: zipDoc,
        author: demoAuthor,
      }),
    }),
    req,
  });

  // #region Related Products
  // update each product with related products and categories
  await payload.update({
    id: product1Doc.id,
    collection: 'products',
    data: getData({
      relatedProducts: [product2Doc.id, product4Doc.id],
    }),
    req,
  });
  await payload.update({
    id: product2Doc.id,
    collection: 'products',
    data: getData({
      relatedProducts: [product1Doc.id, product3Doc.id, product4Doc.id],
    }),
    req,
  });
  await payload.update({
    id: product3Doc.id,
    collection: 'products',
    data: getData({
      relatedProducts: [product2Doc.id],
    }),
    req,
  });
  await payload.update({
    id: product4Doc.id,
    collection: 'products',
    data: getData({
      relatedProducts: [product1Doc.id, product6Doc.id, product7Doc.id, product2Doc.id],
    }),
    req,
  });
  await payload.update({
    id: product5Doc.id,
    collection: 'products',
    data: getData({
      relatedProducts: [product9Doc.id, product6Doc.id, product7Doc.id],
    }),
    req,
  });
  await payload.update({
    id: product6Doc.id,
    collection: 'products',
    data: getData({
      relatedProducts: [product7Doc.id, product4Doc.id],
    }),
    req,
  });
  await payload.update({
    id: product7Doc.id,
    collection: 'products',
    data: getData({
      relatedProducts: [product6Doc.id, product4Doc.id, product5Doc.id],
    }),
    req,
  });
  await payload.update({
    id: product8Doc.id,
    collection: 'products',
    data: getData({
      relatedProducts: [product9Doc.id, product10Doc.id],
    }),
    req,
  });
  await payload.update({
    id: product9Doc.id,
    collection: 'products',
    data: getData({
      relatedProducts: [product8Doc.id, product10Doc.id, product5Doc.id, product1Doc.id],
    }),
    req,
  });
  await payload.update({
    id: product10Doc.id,
    collection: 'products',
    data: getData({
      relatedProducts: [product8Doc.id, product9Doc.id, product2Doc.id],
    }),
    req,
  });
  // #endregion

  // #endregion

  // #region Contact Form
  payload.logger.info(`> Seeding contact form...`);

  const contactForm = await payload.create({
    collection: 'forms',
    locale: 'uk',
    data: getData(contactFormData('uk')),
    req,
  });

  const contactFormData_en = getData(contactFormData('en'));
  await payload.update({
    collection: 'forms',
    locale: 'en',
    id: contactForm.id,
    data: {
      ...contactFormData_en,
      id: contactForm.id,
      fields: contactFormData_en.fields?.map((field, index) => ({
        id: contactForm.fields![index].id,
        ...field,
      })),
      emails: contactFormData_en.emails?.map((email, index) => ({
        id: contactForm.emails![index].id,
        ...email,
      })),
    },
    req,
  });

  // #endregion

  // #region Pages
  payload.logger.info(`> Seeding pages...`);

  const homePage = await payload.create({
    collection: 'pages',
    locale: 'uk',
    data: getData(
      home('uk', {
        heroImage1: imageHomeDoc,
        heroImage2: image20Doc,
        img1: image10Doc,
        img2: image12Doc,
        img4: image14Doc,
        img3: image16Doc,
        metaImage: image6Doc,
        contactForm,
      })
    ),
    req,
  });
  await payload.update({
    collection: 'pages',
    id: homePage.id,
    locale: 'en',
    data: getData(
      home('en', {
        heroImage1: imageHomeDoc,
        heroImage2: image20Doc,
        img1: image10Doc,
        img2: image12Doc,
        img4: image14Doc,
        img3: image16Doc,
        metaImage: image6Doc,
        contactForm,
      })
    ),
    req,
  });

  const aboutPageDoc = await payload.create({
    collection: 'pages',
    locale: 'uk',
    data: getData(
      aboutPage('uk', {
        heroImage1: image16Doc,
        blockImage1: image9Doc,
        _blockImage2: image12Doc,
        img1: image5Doc,
        img2: image7Doc,
      })
    ),
    req,
  });
  await payload.update({
    collection: 'pages',
    id: aboutPageDoc.id,
    locale: 'en',
    data: getData(
      aboutPage('en', {
        heroImage1: image16Doc,
        blockImage1: image9Doc,
        _blockImage2: image12Doc,
        img1: image5Doc,
        img2: image7Doc,
      })
    ),
    req,
  });

  const contactPageDoc = await payload.create({
    collection: 'pages',
    locale: 'uk',
    data: getData(
      contactPage('uk', {
        heroImage1: imageHomeDoc,
        metaImage: image3Doc,
        contactForm,
      })
    ),
    req,
  });
  await payload.update({
    collection: 'pages',
    id: contactPageDoc.id,
    locale: 'en',
    data: getData(
      contactPage('en', {
        heroImage1: imageHomeDoc,
        metaImage: image3Doc,
        contactForm,
      })
    ),
    req,
  });

  const qualityPageDoc = await payload.create({
    collection: 'pages',
    locale: 'uk',
    data: getData(
      qualityPage('uk', {
        heroImage1: image12Doc,
        blockImage1: image15Doc,
        blockImage2: image11Doc,
      })
    ),
    req,
  });
  await payload.update({
    collection: 'pages',
    id: qualityPageDoc.id,
    locale: 'en',
    data: getData(
      qualityPage('en', {
        heroImage1: image12Doc,
        blockImage1: image15Doc,
        blockImage2: image11Doc,
      })
    ),
    req,
  });

  const logisticsPageDoc = await payload.create({
    collection: 'pages',
    locale: 'uk',
    data: getData(
      logisticsPage('uk', {
        heroImage1: image14Doc,
        blockImage1: image10Doc,
        blockImage2: image5Doc,
      })
    ),
    req,
  });
  await payload.update({
    collection: 'pages',
    id: logisticsPageDoc.id,
    locale: 'en',
    data: getData(
      logisticsPage('en', {
        heroImage1: image14Doc,
        blockImage1: image10Doc,
        blockImage2: image5Doc,
      })
    ),
    req,
  });

  // #endregion

  // #region Globals
  payload.logger.info(`> Seeding globals...`);

  await payload.updateGlobal({
    slug: 'header',
    locale: 'uk',
    data: getData(headerGlobalData.uk),
    req,
  });
  await payload.updateGlobal({
    slug: 'header',
    locale: 'en',
    data: getData(headerGlobalData.en),
    req,
  });
  const footerData = footerGlobalData({ image3Doc: image19Doc });
  await payload.updateGlobal({
    slug: 'footer',
    locale: 'uk',
    data: getData(footerData.uk),
    req,
  });
  await payload.updateGlobal({
    slug: 'footer',
    locale: 'en',
    data: getData(footerData.en),
    req,
  });
  await payload.updateGlobal({
    slug: 'contactInfo',
    locale: 'uk',
    data: getData(contactInfoGlobalData.uk),
    req,
  });
  await payload.updateGlobal({
    slug: 'contactInfo',
    locale: 'en',
    data: getData(contactInfoGlobalData.en),
    req,
  });
  await payload.updateGlobal({
    slug: 'postPageSettings',
    locale: 'uk',
    data: getData(postPageSettingsGlobalData.uk),
    req,
  });
  await payload.updateGlobal({
    slug: 'postPageSettings',
    locale: 'en',
    data: getData(postPageSettingsGlobalData.en),
    req,
  });
  await payload.updateGlobal({
    slug: 'productPageSettings',
    locale: 'uk',
    data: getData(productPageSettingsGlobalData.uk),
    req,
  });
  await payload.updateGlobal({
    slug: 'productPageSettings',
    locale: 'en',
    data: getData(productPageSettingsGlobalData.en),
    req,
  });

  // #endregion

  payload.logger.info('Seeded database successfully!');
};

async function fetchLocalImage(filename: string): Promise<File> {
  const fs = await import('fs/promises');
  const path = await import('path');

  const imagePath = path.join(process.cwd(), 'src', 'endpoints', 'seed', 'images', filename);

  try {
    const data = await fs.readFile(imagePath);
    const extension = path.extname(filename).slice(1);

    return {
      name: filename,
      data: data,
      mimetype: `image/${extension === 'jpg' ? 'jpeg' : extension}`,
      size: data.length,
    };
  } catch (_error) {
    throw new Error(`Failed to read local image: ${imagePath}`);
  }
}

async function fetchLocalDocument(filename: string): Promise<File> {
  const fs = await import('fs/promises');
  const path = await import('path');

  const docPath = path.join(process.cwd(), 'src', 'endpoints', 'seed', 'documents', filename);

  try {
    const data = await fs.readFile(docPath);
    const extension = path.extname(filename).slice(1).toLowerCase();

    let mimetype: string;
    switch (extension) {
      case 'pdf':
        mimetype = 'application/pdf';
        break;
      case 'docx':
        mimetype = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
        break;
      case 'zip':
        mimetype = 'application/zip';
        break;
      default:
        mimetype = `application/${extension}`;
    }

    return {
      name: filename,
      data: data,
      mimetype: mimetype,
      size: data.length,
    };
  } catch (_error) {
    throw new Error(`Failed to read local document: ${docPath}`);
  }
}

const getData = <T>(data: T): T => {
  try {
    return JSON.parse(JSON.stringify(data));
  } catch (err) {
    console.log(err);
    return data;
  }
};
