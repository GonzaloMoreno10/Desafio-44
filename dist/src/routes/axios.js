"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.axiosRouter = void 0;

var _express = require("express");

var _controllers = require("../controllers");

var router = (0, _express.Router)();
router.get('/axiosProducts', _controllers.axiosClient.getProductos);
router.post('/axiosProducts', _controllers.axiosClient.setProducto);
router.delete('/axiosProducts/:id', _controllers.axiosClient.delProducto);
router.put('/axiosProducts/:id', _controllers.axiosClient.updateProducto);
var axiosRouter = router;
exports.axiosRouter = axiosRouter;