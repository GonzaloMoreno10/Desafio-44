"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.isLoggedIn = void 0;

var _passport = _interopRequireDefault(require("passport"));

var _passportFacebook = _interopRequireDefault(require("passport-facebook"));

var _venv = require("../config/venv");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var FaceBookStrategy = _passportFacebook.default.Strategy;
var strategyOptions = {
  clientID: _venv.FACEBOOK_CLIENT_ID,
  clientSecret: _venv.FACEBOOK_SECRET,
  callbackURL: 'http://localhost:8080/api/users/auth/facebook/callback',
  profileFields: ['id', 'displayName', 'photos', 'emails', 'name']
};
var strategyOptionsHeroku = {
  clientID: _venv.FACEBOOK_CLIENT_ID,
  clientSecret: _venv.FACEBOOK_SECRET,
  callbackURL: 'https://ecommercegmoreno.herokuapp.com/api/users/auth/facebook/callback',
  profileFields: ['id', 'displayName', 'photos', 'emails', 'name']
};

var loginFunc = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (accessToken, refreshToken, profile, done) {
    console.log('SALIO TODO BIEN');
    return done(null, profile);
  });

  return function loginFunc(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

process.env.PORT ? _passport.default.use(new FaceBookStrategy(strategyOptionsHeroku, loginFunc)) : _passport.default.use(new FaceBookStrategy(strategyOptions, loginFunc));

_passport.default.serializeUser(function (user, cb) {
  cb(null, user);
});

_passport.default.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

var isLoggedIn = (req, res, done) => {
  if (!req.isAuthenticated()) return res.status(401).json({
    msg: 'Unathorized'
  });
  done();
};

exports.isLoggedIn = isLoggedIn;
var _default = _passport.default;
exports.default = _default;