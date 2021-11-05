import { usersRepository } from '../repository/users.repository';
import User from '../models/User';
import passport from 'passport';
import { EmailService } from '../services/ethereal';
import { ETHEREAL_EMAIL } from '../config/venv';
class UsersController {
  async login(req, res, next) {
    await passport.authenticate('login', async function (err, user, info) {
      if (err) {
        return next(err);
      }
      if (!user) {
        let message = info.message;
        return res.render('errors/login', { message });
      }

      req.logIn(user, function (err) {
        if (err) return next(err);
      });
    })(req, res, next);
  }

  info(req, res) {
    res.send({
      session: req.session,
      sessionid: req.sessionID,
      cookies: req.cookies,
    });
  }

  async singin(req, res) {
    let { user, password, email } = req.body;
    const usuario = new User();
    let hash = await usuario.encryptPassword(password);
    usuario.user = user;
    usuario.password = hash;
    usuario.email = email;
    await usersRepository.createUser(usuario);
    res.redirect('/api/users/login');
  }

  async logout(req, res) {
    req.logout();
    res.redirect('/api/users/logout');
  }
}

export const userController = new UsersController();
