"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PORT = exports.MONGO_ATLAS_SRV = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

var MONGO_ATLAS_SRV = process.env.MONGO_ATLAS_SRV || 'mongodb+srv://admin:admin@cluster0.6d6g8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
exports.MONGO_ATLAS_SRV = MONGO_ATLAS_SRV;
var PORT = process.env.PORT || 8080;
exports.PORT = PORT;