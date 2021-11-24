import passport from 'passport';
import passportLocal from 'passport-local';
import { daoSelect } from '../config/datasourceSetting';

import { encryptPassword, matchPassword } from '../utils/passwordsThreatment';

const LocalStrategy = passportLocal.Strategy;

const strategyOptions = {
  usernameField: 'userName',
  passwordField: 'password',
  passReqToCallback: true,
};

const login = async (req, userName, password, done) => {
  const user = await daoSelect.getUserByName(userName);
  if (!user) {
    console.log('Usuario no existe');
    return done(null, false, { message: 'Usuario incorrecto.' });
  }

  if (!(await matchPassword(password, user[0].password))) {
    console.log('Password erronea');
    return done(null, false, { message: 'Contraseña incorrecta.' });
  }
  user.lastLogin = new Date();
  await daoSelect.updateUser(user[0]._id, user);

  return done(null, user);
};

passport.use('login', new LocalStrategy(strategyOptions, login));

passport.serializeUser((user, done) => {
  done(null, user[0]._id);
});

passport.deserializeUser((userId, done) => {
  let user = daoSelect.getUser(userId);
  if (user) done(err, user[0]);
});
