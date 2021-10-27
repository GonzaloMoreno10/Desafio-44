import * as path from "path";
import cluster from 'cluster';
import exphbs from "express-handlebars";
import Handlebars from "handlebars";
import { allowInsecurePrototypeAccess } from "@handlebars/allow-prototype-access";
import http from "http";
import { initIo } from "./services/socketIo.js";
import express from "express";
import Router from "./routes/main";
import cookieParser from "cookie-parser";
import { StoreOptions } from "./services/session";
import session from "express-session";
import passport from "passport";
import flash from "connect-flash";
import minimist from "minimist";
import compression from "compression";
import os from 'os';
const app = express();
import log4js from "log4js";
const warnError = log4js.getLogger();
const consoleLogger = log4js.getLogger('consoleLogger');
const errorLogger = log4js.getLogger('errorLogger');

import { log4jsConfig } from "./config/log4js";
log4js.configure(log4jsConfig);

require("./services/mongo");
require("./services/passport.local");

app.set("port", process.env.port || 8080);
app.set("views", path.resolve(__dirname, "views"));

app.engine(
  ".hbs",
  exphbs({
    //Configuro handlebars
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    handlebars: allowInsecurePrototypeAccess(Handlebars),
  })
);


app.set("view engine", ".hbs");

//Middlewares
app.use(session(StoreOptions));
app.use(compression);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

app.use((req, res, next) => {
  res.locals.user = req.user || null;

  if (res.locals.user !== null) {
    if (req.user.photos) {
      res.locals.image = req.user.photos[0].value || null;
      res.locals.email = req.user.emails[0].value || null;
      res.locals.name = req.user.name || null;
    }
  }
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

app.use("/api", Router);

const Server = http.Server(app);

//Inicio el servidor de socket


const argumentos = minimist(process.argv.slice(2));
const PORT = argumentos.puerto || 8080;

const clusterMode = argumentos.cluster;
//Obtengo el numero de nucleos disponibles en mi PC
const numCPUs = os.cpus().length;


if (clusterMode && cluster.isMaster) {
  console.log('Ejecutando modo cluster');
  console.log(`PID MASTER ${process.pid}`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker) => {
    console.log(`Worker ${worker.process.pid} died at ${Date()}`);
    cluster.fork();
  });
} else {
  /* --------------------------------------------------------------------------- */
  /* WORKERS */
  Server.listen(PORT, () =>
    consoleLogger.info(
      `Servidor express escuchando en el puerto ${PORT} - PID WORKER ${process.pid}`
    )
  );
}
