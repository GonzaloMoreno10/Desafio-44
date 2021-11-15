"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EtherealService = void 0;

var _venv = require("../config/venv");

var _nodemailer = _interopRequireDefault(require("nodemailer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Email {
  constructor() {
    _defineProperty(this, "owner", void 0);

    _defineProperty(this, "transporter", void 0);

    this.owner = {
      name: _venv.ETHEREAL_NAME,
      address: _venv.ETHEREAL_EMAIL
    };
    this.transporter = _nodemailer.default.createTransport({
      host: 'smtp.ethereal.email',
      secure: false,
      port: 587,
      auth: {
        user: 'jeanne.corkery68@ethereal.email',
        pass: '1ShW9pGgAY6kF8gmkN'
      },
      tls: {
        rejectUnauthorized: false
      }
    });
  }

  sendEmail(dest, subject, content) {
    var _this = this;

    return _asyncToGenerator(function* () {
      var mailOptions = {
        from: _this.owner,
        to: dest,
        subject,
        html: content
      };
      console.log(mailOptions);
      var response = yield _this.transporter.sendMail(mailOptions);
      return response;
    })();
  }

}

var EtherealService = new Email();
exports.EtherealService = EtherealService;