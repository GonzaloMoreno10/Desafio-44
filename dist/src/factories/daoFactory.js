"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DaoFactory = void 0;

var _main = require("../persistencia/mongo/main");

var _main2 = require("../persistencia/mysql/main");

class DaoFactory {
  static get(tipo) {
    switch (tipo) {
      case 1:
        console.log('RETORNANDO INSTANCIA CLASE MONGODB');
        return new _main.MongoRepository();

      case 2:
        console.log('RETORNANDO INSTANCIA MYSQL');
        return new _main2.MySqlRepository();

      default:
        return null;
    }
  }

}

exports.DaoFactory = DaoFactory;