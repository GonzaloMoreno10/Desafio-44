"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matchPassword = exports.encryptPassword = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var bcrypt = require('bcrypt');

var encryptPassword = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (password) {
    var salt = yield bcrypt.genSalt(10);
    var hash = bcrypt.hash(password, salt);
    return hash;
  });

  return function encryptPassword(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.encryptPassword = encryptPassword;

var matchPassword = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (password, encryptPassword) {
    var compare = yield bcrypt.compare(password, encryptPassword);
    console.log(compare);
    return compare;
  });

  return function matchPassword(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

exports.matchPassword = matchPassword;