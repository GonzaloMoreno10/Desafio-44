"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userDao = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class UserDao {
  constructor() {
    _defineProperty(this, "users", []);

    this.users = [{
      id: 1,
      user: 'carlos',
      password: 'carlos',
      email: 'carlos@gmail.com'
    }];
  }

  getUser(user) {
    var _this = this;

    return _asyncToGenerator(function* () {
      for (var i in _this.users) {
        if (_this.users[i].id == user) {
          return user[i];
        }
      }
    })();
  }

  getUserByName(name) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      for (var i in _this2.users) {
        if (_this2.users[i].user == name) {
          return user[i];
        }
      }
    })();
  }

  createUser(user) {
    var _this3 = this;

    return _asyncToGenerator(function* () {
      return _this3.users.push(user);
    })();
  }

  updateUser(id, user) {
    var _this4 = this;

    return _asyncToGenerator(function* () {
      for (var i in _this4.users) {
        if (_this4.users[i].id == id) {
          _this4.users[i] == user;
          return _this4.users[i];
        }
      }
    })();
  }

}

var userDao = new UserDao();
exports.userDao = userDao;