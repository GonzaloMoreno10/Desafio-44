"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GmailService = void 0;

var _nodemailer = _interopRequireDefault(require("nodemailer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Gmail {
  constructor() {
    _defineProperty(this, "owner", void 0);

    _defineProperty(this, "transporter", void 0);

    this.owner = {
      name: 'Gonzalo Moreno',
      address: 'gonzamoreno21@gmail.com'
    };
    this.transporter = _nodemailer.default.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'gonzamoreno21@gmail.com',
        pass: 'ktxtapslwibgylta'
      },
      tls: {
        rejectUnauthorized: false
      }
    }); //this.transporter.verify().then(() => console.log('READY To Send Email'));
  }

  sendEmail(dest, subject, content) {
    var _this = this;

    return _asyncToGenerator(function* () {
      var mailOptions = {
        from: _this.owner,
        to: dest,
        subject,
        html: content //   attachments: [
        //     {
        //       // filename and content type is derived from path
        //       path: path.resolve(__dirname, '../nodemailer.png'),
        //     },
        //   ],

      };
      var response = yield _this.transporter.sendMail(mailOptions);
      return response;
    })();
  }

}

var GmailService = new Gmail();
exports.GmailService = GmailService;