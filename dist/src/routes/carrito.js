"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.carritoRouter = void 0;

var _express = require("express");

var _controllers = require("../controllers");

var router = (0, _express.Router)();
router.get('/:id?', _controllers.carritoController.find);
var carritoRouter = router;
exports.carritoRouter = carritoRouter;