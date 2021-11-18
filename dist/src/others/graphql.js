"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.graphQLMainSchema = void 0;

var _serviciosProductos = require("../modulos/productos/serviciosProductos");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var {
  SchemaComposer
} = require('graphql-compose');

var miFunc = () => {
  return false;
};

var ProductsQuery = {
  productById: _serviciosProductos.ProductTC.getResolver('findById'),
  productByIds: _serviciosProductos.ProductTC.getResolver('findByIds'),
  productOne: _serviciosProductos.ProductTC.getResolver('findOne'),
  productMany: _serviciosProductos.ProductTC.getResolver('findMany'),
  productCount: _serviciosProductos.ProductTC.getResolver('count'),
  productConnection: _serviciosProductos.ProductTC.getResolver('connection'),
  productPagination: _serviciosProductos.ProductTC.getResolver('pagination')
};
var ProductsMutation = {
  productCreateOne: _serviciosProductos.ProductTC.getResolver('createOne'),
  productCreateMany: _serviciosProductos.ProductTC.getResolver('createMany'),
  productUpdateById: _serviciosProductos.ProductTC.getResolver('updateById'),
  productUpdateOne: _serviciosProductos.ProductTC.getResolver('updateOne'),
  productUpdateMany: _serviciosProductos.ProductTC.getResolver('updateMany'),
  productRemoveById: _serviciosProductos.ProductTC.getResolver('removeById'),
  productRemoveOne: _serviciosProductos.ProductTC.getResolver('removeOne'),
  productRemoveMany: _serviciosProductos.ProductTC.getResolver('removeMany')
};
var schemaComposer = new SchemaComposer();
schemaComposer.Query.addFields(_objectSpread({}, ProductsQuery));
schemaComposer.Mutation.addFields(_objectSpread({}, ProductsMutation));
var graphQLMainSchema = schemaComposer.buildSchema();
exports.graphQLMainSchema = graphQLMainSchema;