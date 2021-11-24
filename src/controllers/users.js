import { daoSelect } from '../config/datasourceSetting';
import User from '../services/users';
import passport from 'passport';
import { ETHEREAL_EMAIL } from '../config/venv';
import { encryptPassword } from '../utils/passwordsThreatment';
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

  auth(req, res, next) {
    if (req.user) {
      let date = new Date();
      date.setTime(date.getTime() + 60 * 10000);
      req.session.cookie.expires = date;
      return next();
    } else {
      let message = 'No se encuentra logeado';
      return res.render('errors/login', { message });
    }
  }

  getLogin(req, res) {
    res.locals.user = null;
    req.session.destroy();
    res.render('users/login');
  }

  async singin(req, res) {
    let { user, password, email } = req.body;
    console.log(email);
    const usuario = new User();
    let hash = await encryptPassword(password);
    usuario.user = user;
    usuario.password = hash;
    usuario.email = email;
    await daoSelect.createUser(usuario);
    res.redirect('/api/users/login');
  }

  async logout(req, res) {
    req.logout();
    res.redirect('/api/users/logout');
  }

  getSingin(req, res) {
    res.render('users/singin');
  }

  getError(req, res) {
    res.render('users/logout');
  }

  async getLogout(req, res) {
    const mailOptions = {
      dest: ETHEREAL_EMAIL,
      subject: `Usuario deslogueado ${req.user.name.familyName} ${
        req.user.name.givenName
      } al dia y hora ${new Date()}`,
      content: `<p>Usuario deslogueado ${req.user.name.familyName} ${
        req.user.name.givenName
      } al dia y hora ${new Date()}</p>`,
    };
    try {
      const response = await EtherealService.sendEmail(
        mailOptions.dest,
        mailOptions.subject,
        mailOptions.content,
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    res.render('users/logout');
  }

  async getUserInfo(req, res) {
    let user = req.user;
    let nombre = user.displayName;
    let foto = user.photos[0].value;
    let email = user.emails[0].value;
    res.render('datos', { nombre, foto, email });
  }
}

export const userController = new UsersController();
