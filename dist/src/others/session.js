"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StoreOptions = void 0;

var _connectMongo = _interopRequireDefault(require("connect-mongo"));

var _venv = require("../config/venv");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var advancedOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};
var StoreOptions = {
  store: _connectMongo.default.create({
    mongoUrl: _venv.MONGO_ATLAS_SRV,
    mongoOptions: advancedOptions
  }),
  secret: 'mySecretSession',
  resave: false,
  saveUninitialized: false
};
exports.StoreOptions = StoreOptions;