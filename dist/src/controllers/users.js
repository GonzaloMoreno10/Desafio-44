"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userController = void 0;

var _datasourceSetting = require("../config/datasourceSetting");

var _users = _interopRequireDefault(require("../services/users"));

var _passport = _interopRequireDefault(require("passport"));

var _venv = require("../config/venv");

var _passwordsThreatment = require("../utils/passwordsThreatment");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class UsersController {
  login(req, res, next) {
    return _asyncToGenerator(function* () {
      yield _passport.default.authenticate('login', /*#__PURE__*/function () {
        var _ref = _asyncToGenerator(function* (err, user, info) {
          if (err) {
            return next(err);
          }

          if (!user) {
            var message = info.message;
            return res.render('errors/login', {
              message
            });
          }

          req.logIn(user, function (err) {
            if (err) return next(err);
          });
        });

        return function (_x, _x2, _x3) {
          return _ref.apply(this, arguments);
        };
      }())(req, res, next);
    })();
  }

  info(req, res) {
    res.send({
      session: req.session,
      sessionid: req.sessionID,
      cookies: req.cookies
    });
  }

  auth(req, res, next) {
    if (req.user) {
      var date = new Date();
      date.setTime(date.getTime() + 60 * 10000);
      req.session.cookie.expires = date;
      return next();
    } else {
      var message = 'No se encuentra logeado';
      return res.render('errors/login', {
        message
      });
    }
  }

  getLogin(req, res) {
    res.locals.user = null;
    req.session.destroy();
    res.render('users/login');
  }

  singin(req, res) {
    return _asyncToGenerator(function* () {
      var {
        user,
        password,
        email
      } = req.body;
      console.log(email);
      var usuario = new _users.default();
      var hash = yield (0, _passwordsThreatment.encryptPassword)(password);
      usuario.user = user;
      usuario.password = hash;
      usuario.email = email;
      yield _datasourceSetting.daoSelect.createUser(usuario);
      res.redirect('/api/users/login');
    })();
  }

  logout(req, res) {
    return _asyncToGenerator(function* () {
      req.logout();
      res.redirect('/api/users/logout');
    })();
  }

  getSingin(req, res) {
    res.render('users/singin');
  }

  getError(req, res) {
    res.render('users/logout');
  }

  getLogout(req, res) {
    return _asyncToGenerator(function* () {
      var mailOptions = {
        dest: _venv.ETHEREAL_EMAIL,
        subject: "Usuario deslogueado ".concat(req.user.name.familyName, " ").concat(req.user.name.givenName, " al dia y hora ").concat(new Date()),
        content: "<p>Usuario deslogueado ".concat(req.user.name.familyName, " ").concat(req.user.name.givenName, " al dia y hora ").concat(new Date(), "</p>")
      };

      try {
        var response = yield EtherealService.sendEmail(mailOptions.dest, mailOptions.subject, mailOptions.content);
        console.log(response);
      } catch (err) {
        console.log(err);
      }

      res.render('users/logout');
    })();
  }

  getUserInfo(req, res) {
    return _asyncToGenerator(function* () {
      var user = req.user;
      var nombre = user.displayName;
      var foto = user.photos[0].value;
      var email = user.emails[0].value;
      res.render('datos', {
        nombre,
        foto,
        email
      });
    })();
  }

}

var userController = new UsersController();
exports.userController = userController;