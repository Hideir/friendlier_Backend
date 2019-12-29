require('dotenv').config();


module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds/dev'
    },
  },

  testing: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds/test' },
  },

  production: {
    client: 'pg',
    connection: process.env.DB_URL,
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
      tableName: 'knex_migrations'
    },
    seeds: { directory: './data/seeds/products' },
}
};