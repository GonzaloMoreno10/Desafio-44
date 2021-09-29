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
    date.setTime(date.getTime() + 60 * 1000);

    if (name) {
      res.cookie("user", name, {
        expires: date,
        httpOnly: true
      }).redirect("/api/productos/vista");
    } else {
      res.send({
        error: "set-cookie: falta nombre "
      });
    }
  }

  singin(req, res) {}

  logout(req, res) {
    res.redirect("/api/users/logout");
  }

}

var userController = new UsersController();
exports.userController = userController;