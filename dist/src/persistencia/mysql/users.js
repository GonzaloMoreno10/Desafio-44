"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRepository = exports.UserRepository = void 0;

var _mysql = require("../../others/mysql");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class UserRepository {
  constructor() {
    _defineProperty(this, "connection", void 0);

    this.connection = (0, _mysql.createConnection)();
  }

  getUser(userId) {
    var _this = this;

    return _asyncToGenerator(function* () {
      var usuario = yield (yield _this.connection).query("select * from usuarios where id = ".concat(userId));
      console.log(usuario[0]);
      if (usuario[0].length) return usuario[0];
    })();
  }

  getUserByName(user) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      var usuario = yield (yield _this2.connection).query("select * from usuarios where user = '".concat(user, "'"));
      if (usuario[0].length) return usuario[0];
    })();
  }

  createUser(user) {
    var _this3 = this;

    return _asyncToGenerator(function* () {
      user.firstLogin = true;
      var usuario = yield (yield _this3.connection).query("insert into usuarios (email,password,user,admin) values('".concat(user.email, "','").concat(user.password, "','").concat(user.user, "',1)"));
      return usuario[0];
    })();
  }

  updateUser(id, user) {
    var _this4 = this;

    return _asyncToGenerator(function* () {
      console.log(user);
      console.log(id);
      var usuario = yield (yield _this4.connection).query("update usuarios set email = '".concat(user.email, "', password = '").concat(user.password, "'\n         where _id = ").concat(id));
      return usuario[0];
    })();
  }

}

exports.UserRepository = UserRepository;
var userRepository = new UserRepository();
exports.userRepository = userRepository;