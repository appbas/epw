export const environment = {
  host:     process.env.PG_HOST as string     || 'localhost',
  port:     process.env.PG_PORT as string     || 5432,
  username: process.env.PG_USER as string     || 'postgres',
  password: process.env.PG_PASS as string     || '9238',
  database: process.env.PG_DATABASE as string || 'cta',
  ssl: process.env.PG_SSL as string || false,
}