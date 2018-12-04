// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: "aircraft"
    },
    migrations: {
      tableName: "migrations",
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds"
    }
  },
};
