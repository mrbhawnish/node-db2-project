// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/cars-dealer.db3',
    },
    useNullAsDefault: true,
   
   // generates migration files in a data/migrations/ folder
  migrations: {
     directory: './migrations'
    }
  }
};
