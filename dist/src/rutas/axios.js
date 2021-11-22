"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _routesAxios = require("../modulos/axios/routesAxios");

var router = (0, _express.Router)();
router.get('/axiosProducts', _routesAxios.axiosClient.getProductos);
router.post('/axiosProducts', _routesAxios.axiosClient.setProducto);
router.delete('/axiosProducts/:id', _routesAxios.axiosClient.delProducto);
router.put('/axiosProducts/:id', _routesAxios.axiosClient.updateProducto);
var _default = router;
exports.default = _default;