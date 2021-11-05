import express from 'express';
const Router = express.Router();
import { userController } from '../controllers/users.controller';
import { auth } from '../middlewares/autenticacion';
import passport from '../services/passport.facebook';
import { EtherealService } from '../services/ethereal';
import { ETHEREAL_EMAIL } from '../config/venv';

//Inicializaciones

//Rutas

Router.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/api/productos/vista',
    failureRedirect: '/api/users/login',
    failureFlash: true,
  }),
);

Router.get('/datos', (req, res) => {
  let user = req.user;
  let nombre = user.displayName;
  let foto = user.photos[0].value;
  let email = user.emails[0].value;
  res.render('datos', { nombre, foto, email });
});
Router.get(
  '/auth/facebook',
  passport.authenticate('facebook', { scope: ['email'] }),
);

Router.post('/login', userController.login);

Router.post('/singin', userController.singin);

Router.get('/singin', (req, res) => {
  res.render('users/singin');
});

Router.post('/logout', userController.logout);

Router.get('/logout', auth, async (req, res) => {
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
});

Router.get('/error', auth, (req, res) => {
  res.render('users/logout');
});

Router.get('/info', auth, userController.info);

Router.get('/login', (req, res) => {
  res.locals.user = null;
  req.session.destroy();
  res.render('users/login');
});

export default Router;
