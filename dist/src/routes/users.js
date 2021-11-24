"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _controllers = require("../controllers");

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
Router.get('/datos', _controllers.userController.getUserInfo);
Router.get('/auth/facebook', _passport.default.authenticate('facebook', {
  scope: ['email']
}));
Router.post('/login', _controllers.userController.login);
Router.post('/singin', _controllers.userController.singin);
Router.get('/singin', _controllers.userController.getSingin);
Router.post('/logout', _controllers.userController.logout);
Router.get('/logout', _controllers.userController.auth, _controllers.userController.getLogout);
Router.get('/error', _controllers.userController.auth, _controllers.userController.getError);
Router.get('/info', _controllers.userController.auth, _controllers.userController.info);
Router.get('/login', _controllers.userController.getLogin);
var userRouter = Router;
exports.userRouter = userRouter;