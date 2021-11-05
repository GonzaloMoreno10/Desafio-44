"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _users = require("../controllers/users.controller");

var _autenticacion = require("../middlewares/autenticacion");

var _passport = _interopRequireDefault(require("../services/passport.facebook"));

var _ethereal = require("../services/ethereal");

var _venv = require("../config/venv");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Router = _express.default.Router();

//Inicializaciones
//Rutas
Router.get('/auth/facebook/callback', _passport.default.authenticate('facebook', {
  successRedirect: '/api/productos/vista',
  failureRedirect: '/api/users/login',
  failureFlash: true
}));
Router.get('/datos', (req, res) => {
  var user = req.user;
  var nombre = user.displayName;
  var foto = user.photos[0].value;
  var email = user.emails[0].value;
  res.render('datos', {
    nombre,
    foto,
    email
  });
});
Router.get('/auth/facebook', _passport.default.authenticate('facebook', {
  scope: ['email']
}));
Router.post('/login', _users.userController.login);
Router.post('/singin', _users.userController.singin);
Router.get('/singin', (req, res) => {
  res.render('users/singin');
});
Router.post('/logout', _users.userController.logout);
Router.get('/logout', _autenticacion.auth, /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    var mailOptions = {
      dest: _venv.ETHEREAL_EMAIL,
      subject: "Usuario deslogueado ".concat(req.user.name.familyName, " ").concat(req.user.name.givenName, " al dia y hora ").concat(new Date()),
      content: "<p>Usuario deslogueado ".concat(req.user.name.familyName, " ").concat(req.user.name.givenName, " al dia y hora ").concat(new Date(), "</p>")
    };

    try {
      var response = yield _ethereal.EtherealService.sendEmail(mailOptions.dest, mailOptions.subject, mailOptions.content);
      console.log(response);
    } catch (err) {
      console.log(err);
    }

    res.render('users/logout');
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
Router.get('/error', _autenticacion.auth, (req, res) => {
  res.render('users/logout');
});
Router.get('/info', _autenticacion.auth, _users.userController.info);
Router.get('/login', (req, res) => {
  res.locals.user = null;
  req.session.destroy();
  res.render('users/login');
});
var _default = Router;
exports.default = _default;