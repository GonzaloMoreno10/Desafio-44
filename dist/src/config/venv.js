"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ETHEREAL_PASSWORD = exports.ETHEREAL_EMAIL = exports.ETHEREAL_NAME = exports.FACEBOOK_SECRET = exports.FACEBOOK_CLIENT_ID = exports.PORT = exports.MONGO_ATLAS_SRV = void 0;
var MONGO_ATLAS_SRV = process.env.MONGO_ATLAS_SRV || 'mongodb+srv://admin:admin@cluster0.6d6g8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
exports.MONGO_ATLAS_SRV = MONGO_ATLAS_SRV;
var PORT = process.env.PORT || 8080;
exports.PORT = PORT;
var FACEBOOK_CLIENT_ID = process.env.FACEBOOK_CLIENT_ID || '1291687597947398';
exports.FACEBOOK_CLIENT_ID = FACEBOOK_CLIENT_ID;
var FACEBOOK_SECRET = process.env.FACEBOOK_SECRET || '1d51c5fe5865c3223eeb5b28f571cdc5';
exports.FACEBOOK_SECRET = FACEBOOK_SECRET;
var ETHEREAL_NAME = 'Jeanne Corkery';
exports.ETHEREAL_NAME = ETHEREAL_NAME;
var ETHEREAL_EMAIL = 'jeanne.corkery68@ethereal.email';
exports.ETHEREAL_EMAIL = ETHEREAL_EMAIL;
var ETHEREAL_PASSWORD = '1ShW9pGgAY6kF8gmkN';
exports.ETHEREAL_PASSWORD = ETHEREAL_PASSWORD;