"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.auth = void 0;

var auth = function auth(req, res, next) {
  if (req.user) {
    var date = new Date();
    date.setTime(date.getTime() + 60 * 10000);
    req.session.cookie.expires = date;
    console.log(req.session);
    return next();
  } else {
    var message = 'No se encuentra logeado';
    return res.render('errors/login', {
      message
    });
  }
};

exports.auth = auth;