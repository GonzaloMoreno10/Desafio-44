"use strict";

var _passport = _interopRequireDefault(require("passport"));

var _passportLocal = _interopRequireDefault(require("passport-local"));

var _User = _interopRequireDefault(require("../models/User"));

var _jsonwebtoken = require("jsonwebtoken");

var _users = require("../repository/users.repository");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var LocalStrategy = _passportLocal.default.Strategy;
var strategyOptions = {
  usernameField: 'userName',
  passwordField: 'password',
  passReqToCallback: true
};

var login = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, userName, password, done) {
    var user = yield _User.default.findOne({
      user: userName
    });

    if (!user) {
      console.log('Usuario no existe');
      return done(null, false, {
        message: 'Usuario incorrecto.'
      });
    }

    if (!(yield user.matchPassword(password))) {
      console.log('Password erronea');
      return done(null, false, {
        message: 'Contraseña incorrecta.'
      });
    }

    user.lastLogin = new Date();
    yield _users.usersRepository.updateUser(user._id, user);
    return done(null, user);
  });

  return function login(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

_passport.default.use('login', new LocalStrategy(strategyOptions, login));

_passport.default.serializeUser((user, done) => {
  done(null, user._id);
});

_passport.default.deserializeUser((userId, done) => {
  _User.default.findById(userId, function (err, user) {
    done(err, user);
  });
});