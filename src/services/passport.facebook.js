import passport from 'passport';
import passportFacebook from 'passport-facebook';
const FaceBookStrategy = passportFacebook.Strategy;
import {FACEBOOK_CLIENT_ID,FACEBOOK_SECRET} from '../config/venv';



const strategyOptions = {
  clientID: FACEBOOK_CLIENT_ID,
  clientSecret: FACEBOOK_SECRET,
  callbackURL: 'http://localhost:8080/api/users/auth/facebook/callback',
  profileFields: ['id', 'displayName', 'photos', 'emails','name'],
};

const loginFunc = async (
  accessToken,
  refreshToken,
  profile,
  done
) => {
  console.log('SALIO TODO BIEN');
  return done(null, profile);
};

passport.use(new FaceBookStrategy(strategyOptions, loginFunc));

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

export const isLoggedIn = (req, res, done) => {
  if (!req.isAuthenticated())
    return res.status(401).json({ msg: 'Unathorized' });

  done();
};

export default passport;
