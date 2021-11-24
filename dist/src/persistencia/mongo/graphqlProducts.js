"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.graphQLMainSchema = void 0;

var _productos = require("../../services/productos");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var {
  SchemaComposer
} = require('graphql-compose');

var ProductsQuery = {
  productMany: _productos.ProductTC.getResolver('findMany')
};
var ProductsMutation = {
  productCreateOne: _productos.ProductTC.getResolver('createOne')
};
var schemaComposer = new SchemaComposer();
schemaComposer.Query.addFields(_objectSpread({}, ProductsQuery));
schemaComposer.Mutation.addFields(_objectSpread({}, ProductsMutation));
var graphQLMainSchema = schemaComposer.buildSchema();
exports.graphQLMainSchema = graphQLMainSchema;