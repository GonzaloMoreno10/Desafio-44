"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DaoFactory = void 0;

var _main = require("../persistencia/memory/main");

var _main2 = require("../persistencia/mongo/main");

var _main3 = require("../persistencia/mysql/main");

class DaoFactory {
  static get(tipo) {
    switch (tipo) {
      case 1:
        console.log('Retornando Mongo');
        return new _main2.MongoRepository();

      case 2:
        console.log('Retornando MySql');
        return new _main3.MySqlRepository();

      case 3:
        console.log('Retornando Memory');
        return new _main.MemoryRepository();

      default:
        return null;
    }
  }

}

exports.DaoFactory = DaoFactory;