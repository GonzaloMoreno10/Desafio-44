/*import knex from 'knex';
let mongo = require('mongoose')

export const sqliteDB = knex({
  client: 'sqlite3',
  connection: { filename: './sqlite' },
  useNullAsDefault: false,
});



export const mySQLDB = knex({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'productos',
  },
  pool: { min: 0, max: 7 },
});

sqliteDB.schema.hasTable('mensajes').then((exists) => {
  if (!exists) {
    sqliteDB.schema
      .createTable('mensajes', (table) => {
        table.increments('id');
        table.string('email');
        table.integer('fecha');
        table.integer('texto');
      })
      .then(() => {
        console.log('DONE');
      });
  }
});




mySQLDB.schema.hasTable('productos').then((exists) => {
  if (!exists) {
    mySQLDB.schema
      .createTable('productos', (productosTable) => {
        productosTable.increments();
        productosTable.string('title').notNullable();
        productosTable.decimal('price')
        productosTable.string('thumbnail')
      })
      .then(() => {
        console.log('DONE');
      });
  }
});*/
"use strict";