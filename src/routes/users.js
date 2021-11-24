import express from 'express';
const Router = express.Router();
import { userController } from '../controllers';
import passport from '../others/passport.facebook';

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

Router.get('/datos', userController.getUserInfo);
Router.get(
  '/auth/facebook',
  passport.authenticate('facebook', { scope: ['email'] }),
);

Router.post('/login', userController.login);

Router.post('/singin', userController.singin);

Router.get('/singin', userController.getSingin);

Router.post('/logout', userController.logout);

Router.get('/logout', userController.auth, userController.getLogout);

Router.get('/error', userController.auth, userController.getError);

Router.get('/info', userController.auth, userController.info);

Router.get('/login', userController.getLogin);

export const userRouter = Router;
