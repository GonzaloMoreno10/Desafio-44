"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userController = void 0;

var _users = require("../repository/users.repository");

var _User = _interopRequireDefault(require("../models/User"));

var _passport = _interopRequireDefault(require("passport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class UsersController {
  login(req, res, next) {
    _passport.default.authenticate('login', function (err, user, info) {
      if (err) {
        return next(err);
      }

      if (!user) {
        var message = info.message;
        return res.render('errors/login', {
          message,
          userName
        });
      }

      req.logIn(user, function (err) {
        if (err) {
          return next(err);
        }

        return res.redirect('/api/productos/vista');
      });
    })(req, res, next);
  }

  info(req, res) {
    res.send({
      session: req.session,
      sessionid: req.sessionID,
      cookies: req.cookies
    });
  }

  singin(req, res) {
    return _asyncToGenerator(function* () {
      var {
        user,
        password,
        email
      } = req.body;
      var usuario = new _User.default();
      var hash = yield usuario.encryptPassword(password);
      usuario.user = user;
      usuario.password = hash;
      usuario.email = email;
      yield _users.usersRepository.createUser(usuario);
      res.redirect('/api/users/login');
    })();
  }

  logout(req, res) {
    req.logout();
    res.redirect("/api/users/logout");
  }

}

var userController = new UsersController();
exports.userController = userController;