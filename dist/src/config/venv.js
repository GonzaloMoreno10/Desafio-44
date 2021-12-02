"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TIPO_DS = exports.ETHEREAL_PASSWORD = exports.ETHEREAL_EMAIL = exports.ETHEREAL_NAME = exports.FACEBOOK_SECRET = exports.FACEBOOK_CLIENT_ID = exports.PORT = exports.MONGO_ATLAS_SRV = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _minimist = _interopRequireDefault(require("minimist"));

var _path = _interopRequireDefault(require("path"));

var _args = require("./args");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var argumentos = (0, _minimist.default)(process.argv.slice(2), _args.argsConfig);
/*dotenv.config(
  path.resolve(
    __dirname,
    process.env.NODE_ENV || 'development' + '.env',
  ),
);*/

_dotenv.default.config();

var MONGO_ATLAS_SRV = process.env.MONGO_ATLAS_SRV;
exports.MONGO_ATLAS_SRV = MONGO_ATLAS_SRV;
var PORT = process.env.PORT || 8080;
exports.PORT = PORT;
var FACEBOOK_CLIENT_ID = process.env.FACEBOOK_CLIENT_ID;
exports.FACEBOOK_CLIENT_ID = FACEBOOK_CLIENT_ID;
var FACEBOOK_SECRET = process.env.FACEBOOK_SECRET;
exports.FACEBOOK_SECRET = FACEBOOK_SECRET;
var ETHEREAL_NAME = process.env.ETHEREAL_NAME;
exports.ETHEREAL_NAME = ETHEREAL_NAME;
var ETHEREAL_EMAIL = process.env.ETHEREAL_EMAIL;
exports.ETHEREAL_EMAIL = ETHEREAL_EMAIL;
var ETHEREAL_PASSWORD = process.env.ETHEREAL_PASSWORD;
exports.ETHEREAL_PASSWORD = ETHEREAL_PASSWORD;
var TIPO_DS = process.env.TIPO_DS;
exports.TIPO_DS = TIPO_DS;