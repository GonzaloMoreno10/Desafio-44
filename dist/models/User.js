"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var mongoose = require('mongoose');

var bcrypt = require('bcrypt');

var {
  Schema
} = mongoose;
var UserSchema = new Schema({
  user: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  lastLogin: {
    type: Date
  },
  email: {
    type: String
  },
  firstLogin: {
    type: Boolean
  }
});

UserSchema.methods.encryptPassword = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (password) {
    var salt = yield bcrypt.genSalt(10);
    var hash = bcrypt.hash(password, salt);
    return hash;
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

UserSchema.methods.matchPassword = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (password) {
    var user = this;
    var compare = yield bcrypt.compare(password, user.password);
    console.log(compare);
    return compare;
  });

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}();

module.exports = mongoose.model('users', UserSchema);