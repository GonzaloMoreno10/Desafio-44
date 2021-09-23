// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'productos'
    },
    migrations: {
      directory: __dirname + '/src/database/migrations'
    },
    seeds:{
      directory: __dirname + '/src/database/seeds'
    }
  }
};

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {filename:'./sqlite'},
    migrations: {
      directory: __dirname + '/src/database/migrations'
    },
    seeds:{
      directory: __dirname + '/src/database/seeds'
    }
  }
}
