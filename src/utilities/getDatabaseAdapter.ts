import { postgresAdapter } from '@payloadcms/db-postgres';
import { sqliteAdapter } from '@payloadcms/db-sqlite';

export const getDatabaseAdapter = () => {
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
