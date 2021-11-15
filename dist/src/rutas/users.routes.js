"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _rutasUser = require("../modulos/users/rutasUser");

var _passport = _interopRequireDefault(require("../others/passport.facebook"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Router = _express.default.Router();

//Inicializaciones
//Rutas
Router.get('/auth/facebook/callback', _passport.default.authenticate('facebook', {
  successRedirect: '/api/productos/vista',
  failureRedirect: '/api/users/login',
  failureFlash: true
}));
Router.get('/datos', _rutasUser.userController.getUserInfo);
Router.get('/auth/facebook', _passport.default.authenticate('facebook', {
  scope: ['email']
}));
Router.post('/login', _rutasUser.userController.login);
Router.post('/singin', _rutasUser.userController.singin);
Router.get('/singin', _rutasUser.userController.getSingin);
Router.post('/logout', _rutasUser.userController.logout);
Router.get('/logout', _rutasUser.userController.auth, _rutasUser.userController.getLogout);
Router.get('/error', _rutasUser.userController.auth, _rutasUser.userController.getError);
Router.get('/info', _rutasUser.userController.auth, _rutasUser.userController.info);
Router.get('/login', _rutasUser.userController.getLogin);
var _default = Router;
exports.default = _default;