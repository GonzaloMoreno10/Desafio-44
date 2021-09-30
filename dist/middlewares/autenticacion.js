"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authSession = exports.auth = void 0;

var auth = function auth(req, res, next) {
  if (req.cookies.user) {
    return next();
  } else {
    return res.render('users/error');
  }
};

exports.auth = auth;

var authSession = function authSession(req, res, next) {
  if (req.session.user) {
    req.session.contador++;
    return next();
  } else {
    return res.render('users/error');
  }
};
/*export const auth = function(req,res,next){
    if(req.session && req.session.user){
        console.log('User: ' + req.session.user)
        return next();
    }
    else{
        return res.redirect('/api/users/login');
    }
}*/


exports.authSession = authSession;