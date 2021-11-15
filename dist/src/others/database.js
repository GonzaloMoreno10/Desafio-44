"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mySQLDB = exports.sqliteDB = void 0;

var _knex = _interopRequireDefault(require("knex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sqliteDB = (0, _knex.default)({
  client: 'sqlite3',
  connection: {
    filename: './sqlite'
  },
  useNullAsDefault: false
});
exports.sqliteDB = sqliteDB;
var mySQLDB = (0, _knex.default)({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'productos'
  },
  pool: {
    min: 0,
    max: 7
  }
});
exports.mySQLDB = mySQLDB;
sqliteDB.schema.hasTable('mensajes').then(exists => {
  if (!exists) {
    sqliteDB.schema.createTable('mensajes', table => {
      table.increments('id');
      table.string('email');
      table.integer('fecha');
      table.integer('texto');
    }).then(() => {
      console.log('DONE');
    });
  }
});
mySQLDB.schema.hasTable('productos').then(exists => {
  if (!exists) {
    mySQLDB.schema.createTable('productos', productosTable => {
      productosTable.increments();
      productosTable.string('title').notNullable();
      productosTable.decimal('price');
      productosTable.string('thumbnail');
    }).then(() => {
      console.log('DONE');
    });
  }
});