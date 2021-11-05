"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SmsService = void 0;

var _twilio = _interopRequireDefault(require("twilio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Twilio {
  constructor() {
    _defineProperty(this, "twilio", void 0);

    this.twilio = (0, _twilio.default)('AC5fa0e7e39e0382754ef8cdad1d2c4c0d', '291b84dbf1c42f48ae47eb67945f6c0b');
  }

  sendMessage(cellphoneNumber, message) {
    var _this = this;

    return _asyncToGenerator(function* () {
      var params = {
        body: message,
        from: 15306272141,
        to: cellphoneNumber
      };
      var response = yield _this.twilio.messages.create(params);
      return response;
    })();
  }

}

var SmsService = new Twilio();
exports.SmsService = SmsService;