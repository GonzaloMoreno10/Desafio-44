"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usersRepository = void 0;

var _serviciosUser = _interopRequireDefault(require("./serviciosUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class UsersRepository {
  getUser(user) {
    return _asyncToGenerator(function* () {
      console.log(user);
      var usuario = yield _serviciosUser.default.findOne({
        user: user
      });
      if (usuario) return usuario;
    })();
  }

  getUserByName(name) {
    return _asyncToGenerator(function* () {
      var usuario = yield _serviciosUser.default.find({
        name: name
      });
      if (usuario) return usuario;
    })();
  }

  createUser(user) {
    return _asyncToGenerator(function* () {
      user.firstLogin = true;
      yield _serviciosUser.default.create(user);
    })();
  }

  updateUser(id, user) {
    return _asyncToGenerator(function* () {
      return yield _serviciosUser.default.findByIdAndUpdate(id, user);
    })();
  }

}

var usersRepository = new UsersRepository();
exports.usersRepository = usersRepository;