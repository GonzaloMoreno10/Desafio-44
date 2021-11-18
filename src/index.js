import * as path from 'path';
import exphbs from 'express-handlebars';
import Handlebars from 'handlebars';
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access';
import http from 'http';
import { initIo } from './others/socketIo.js';
import express from 'express';
import Router from './rutas/main';
import cookieParser from 'cookie-parser';
import { StoreOptions } from './others/session';
import session from 'express-session';
import passport from 'passport';
import flash from 'connect-flash';
import minimist from 'minimist';
import os from 'os';
import cluster from 'cluster';
import log4js from 'log4js';
import { log4jsConfig } from './config/log4js';

const consoleLogger = log4js.getLogger('consoleLogger');
const app = express();
const publicPath = path.resolve(__dirname, '../../public');

log4js.configure(log4jsConfig);

require('./others/mongo');
require('./others/passport.local');

app.set('port', process.env.PORT || 8080);
app.set('views', path.resolve(__dirname, '../../src/pages'));

app.engine(
  '.hbs',
  exphbs({
    //Configuro handlebars
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    handlebars: allowInsecurePrototypeAccess(Handlebars),
  }),
);

app.set('view engine', '.hbs');

//Middlewares
app.use(session(StoreOptions));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(publicPath));

app.use((req, res, next) => {
  res.locals.user = req.user || null;

  if (res.locals.user !== null) {
    if (req.user.photos) {
      res.locals.image = req.user.photos[0].value || null;
      res.locals.email = req.user.emails[0].value || null;
      res.locals.name = req.user.name || null;
    }
  }
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

app.use('/api', Router);

/*app.use('/',(req,res)=>{
  res.redirect('/api/users/login')
})*/

const Server = http.Server(app);

initIo(Server);

const argumentos = minimist(process.argv.slice(2));
export const PORT = argumentos.puerto || 8080;

const clusterMode = argumentos.cluster;

const numCPUs = os.cpus().length;

if (clusterMode && cluster.isMaster) {
  consoleLogger.info('Ejecutando modo cluster');
  consoleLogger.info(`PID MASTER ${process.pid}`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', worker => {
    consoleLogger.info(`Worker ${worker.process.pid} died at ${Date()}`);
    cluster.fork();
  });
} else {
  Server.listen(app.get('port'), () =>
    consoleLogger.info(
      `Servidor express escuchando en el puerto ${app.get(
        'port',
      )} - PID WORKER ${process.pid}`,
    ),
  );
}
