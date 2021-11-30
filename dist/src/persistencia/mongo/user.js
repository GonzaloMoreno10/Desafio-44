"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userDao = void 0;

var _users = _interopRequireDefault(require("../../services/users"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class UserDao {
  getUser(user) {
    return _asyncToGenerator(function* () {
      var usuario = yield _users.default.findOne({
        user: user
      });
      if (usuario) return usuario;
    })();
  }

  getUserByName(name) {
    return _asyncToGenerator(function* () {
      var usuario = yield _users.default.find({
        name: name
      });
      if (usuario) return usuario;
    })();
  }

  createUser(user) {
    return _asyncToGenerator(function* () {
      user.firstLogin = true;
      yield _users.default.create(user);
    })();
  }

  updateUser(id, user) {
    return _asyncToGenerator(function* () {
      return yield _users.default.findByIdAndUpdate(id, user);
    })();
  }

}

var userDao = new UserDao();
exports.userDao = userDao;