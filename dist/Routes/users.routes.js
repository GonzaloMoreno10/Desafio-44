"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _users = require("../controllers/users.controller");

var _users2 = require("../repository/users.repository");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Router = _express.default.Router();

//Inicializaciones
//Rutas
Router.post("/login", _users.userController.login);
Router.post('/singin', _users.userController.singin);
Router.post('/logout', _users.userController.logout);
Router.get('/login', (req, res) => {
  res.render("users/login");
});
var _default = Router;
exports.default = _default;