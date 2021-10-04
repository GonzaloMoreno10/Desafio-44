"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _users = require("../controllers/users.controller");

var _autenticacion = require("../middlewares/autenticacion");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Router = _express.default.Router();

//Inicializaciones
//Rutas
Router.post('/login', _users.userController.login);
Router.post('/singin', _users.userController.singin);
Router.get('/singin', (req, res) => {
  res.render('users/singin');
});
Router.post('/logout', _users.userController.logout);
Router.get('/logout', _autenticacion.auth, (req, res) => {
  res.render('users/logout');
});
Router.get('/error', _autenticacion.auth, (req, res) => {
  res.render('users/logout');
});
Router.get('/info', _autenticacion.auth, _users.userController.info);
Router.get('/login', (req, res) => {
  res.locals.user = null;
  req.session.destroy();
  res.render("users/login");
});
var _default = Router;
exports.default = _default;