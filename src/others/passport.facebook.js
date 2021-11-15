import passport from 'passport';
import passportFacebook from 'passport-facebook';
const FaceBookStrategy = passportFacebook.Strategy;
import { FACEBOOK_CLIENT_ID, FACEBOOK_SECRET } from '../config/venv';
import { EtherealService } from './ethereal';
import { GmailService } from './gmail';
import { ETHEREAL_EMAIL } from '../config/venv';

const strategyOptions = {
  clientID: FACEBOOK_CLIENT_ID,
  clientSecret: FACEBOOK_SECRET,
  callbackURL: 'http://localhost:8080/api/users/auth/facebook/callback',
  profileFields: ['id', 'displayName', 'photos', 'emails', 'name'],
};

const strategyOptionsHeroku = {
  clientID: FACEBOOK_CLIENT_ID,
  clientSecret: FACEBOOK_SECRET,
  callbackURL:
    'https://ecommercegmoreno.herokuapp.com/api/users/auth/facebook/callback',
  profileFields: ['id', 'displayName', 'photos', 'emails', 'name'],
};

const loginFunc = async (accessToken, refreshToken, profile, done) => {
  const mailOptions = {
    dest: ETHEREAL_EMAIL,
    subject: `Log in ${profile.displayName}
    al dia y hora ${new Date()}`,
    content: `<p>Usuario logueado ${profile.displayName}
    al dia y hora ${new Date()}</p>`,
  };
  try {
    const response = await EtherealService.sendEmail(
      mailOptions.dest,
      mailOptions.subject,
      mailOptions.content,
    );
  } catch (err) {
    console.log(err);
  }
  //Gmail
  const gmailOptions = {
    dest: profile._json.email,
    subject: `Ecommerce`,
    content: `<p>Te logueaste a traves de perfil de facebook ${profile.displayName}   a Ecommerce <br> <img src="${profile._json.picture.data.url}"/>">
    </p>`,
  };
  try {
    const response = await GmailService.sendEmail(
      gmailOptions.dest,
      gmailOptions.subject,
      gmailOptions.content,
    );
  } catch (err) {
    console.log(err);
  }

  return done(null, profile);
};

process.env.PORT
  ? passport.use(new FaceBookStrategy(strategyOptionsHeroku, loginFunc))
  : passport.use(new FaceBookStrategy(strategyOptions, loginFunc));
passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

export const isLoggedIn = async (req, res, done) => {
  if (!req.isAuthenticated())
    return res.status(401).json({ msg: 'Unathorized' });

  done();
};

export default passport;
