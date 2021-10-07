import passport from 'passport';
import passportLocal from 'passport-local';
import users from '../models/User';
import { JsonWebToken } from 'jsonwebtoken';
import { usersRepository } from '../repository/users.repository'

const LocalStrategy = passportLocal.Strategy;

const strategyOptions = {
  usernameField: 'userName',
  passwordField: 'password',
  passReqToCallback: true,
};

const login = async (req, userName, password, done) => {
    const user = await users.findOne({user:userName})
    
    if (!user) {
      console.log('Usuario no existe')
      return done(null, false, { message: 'Usuario incorrecto.' });
    }
    if (! await user.matchPassword(password)) {
      console.log('Password erronea')
      return done(null, false, { message: 'Contraseña incorrecta.' });
    }
    user.lastLogin = new Date();
    await usersRepository.updateUser(user._id,user);
    
    return done(null, user);
  };


  

  passport.use('login', new LocalStrategy(strategyOptions, login));

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });
  
  passport.deserializeUser((userId, done) => {
    users.findById(userId, function (err, user) {
      done(err, user);
    });
  });