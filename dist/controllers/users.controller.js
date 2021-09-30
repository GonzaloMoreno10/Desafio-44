"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userController = void 0;

class UsersController {
  login(req, res) {
    var {
      name
    } = req.body;
    var date = new Date();
    date.setTime(date.getTime() + 60 * 10000);

    if (name) {
      req.session.user = name;
      req.session.cookie.expires = date;

      if (!req.session.contador) {
        req.session.contador = 0;
      } else {
        req.session.contador++;
      }

      res.redirect("/api/productos/vista");
    } else {
      res.send({
        error: "set-cookie: falta nombre "
      });
    }
  }

  info(req, res) {
    res.send({
      session: req.session,
      sessionid: req.sessionID,
      cookies: req.cookies
    });
  }

  singin(req, res) {}

  logout(req, res) {
    res.redirect("/api/users/logout");
  }

}

var userController = new UsersController();
exports.userController = userController;