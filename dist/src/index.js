"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PORT = void 0;

var path = _interopRequireWildcard(require("path"));

var _expressHandlebars = _interopRequireDefault(require("express-handlebars"));

var _handlebars = _interopRequireDefault(require("handlebars"));

var _allowPrototypeAccess = require("@handlebars/allow-prototype-access");

var _http = _interopRequireDefault(require("http"));

var _socketIo = require("./services/socketIo.js");

var _express = _interopRequireDefault(require("express"));

var _main = _interopRequireDefault(require("./routes/main"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _session = require("./services/session");

var _expressSession = _interopRequireDefault(require("express-session"));

var _passport = _interopRequireDefault(require("passport"));

var _connectFlash = _interopRequireDefault(require("connect-flash"));

var _minimist = _interopRequireDefault(require("minimist"));

var _os = _interopRequireDefault(require("os"));

var _cluster = _interopRequireDefault(require("cluster"));

var _log4js = _interopRequireDefault(require("log4js"));

var _log4js2 = require("./config/log4js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var warnError = _log4js.default.getLogger();

var consoleLogger = _log4js.default.getLogger('consoleLogger');

var errorLogger = _log4js.default.getLogger('errorLogger');

var app = (0, _express.default)();
var publicPath = path.resolve(__dirname, '../../public');

_log4js.default.configure(_log4js2.log4jsConfig);

require('./services/mongo');

require('./services/passport.local');

app.set('port', process.env.PORT || 8080);
app.set('views', path.resolve(__dirname, 'views'));
app.engine('.hbs', (0, _expressHandlebars.default)({
  //Configuro handlebars
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs',
  handlebars: (0, _allowPrototypeAccess.allowInsecurePrototypeAccess)(_handlebars.default)
}));
app.set('view engine', '.hbs'); //Middlewares

app.use((0, _expressSession.default)(_session.StoreOptions));
app.use((0, _connectFlash.default)());
app.use(_passport.default.initialize());
app.use(_passport.default.session());
app.use(_express.default.json());
app.use((0, _cookieParser.default)());
app.use(_express.default.urlencoded({
  extended: true
}));
app.use(_express.default.static(publicPath));
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
  res.locals.error = req.flash("error");
  next();
});
app.use("/api", _main.default);
/*app.use('/',(req,res)=>{
  res.redirect('/api/users/login')
})*/

var Server = _http.default.Server(app);

(0, _socketIo.initIo)(Server);
var argumentos = (0, _minimist.default)(process.argv.slice(2));
var PORT = argumentos.puerto || 8080;
exports.PORT = PORT;
var clusterMode = argumentos.cluster;

var numCPUs = _os.default.cpus().length;

if (clusterMode && _cluster.default.isMaster) {
  consoleLogger.info('Ejecutando modo cluster');
  consoleLogger.info("PID MASTER ".concat(process.pid));

  for (var i = 0; i < numCPUs; i++) {
    _cluster.default.fork();
  }

  _cluster.default.on('exit', worker => {
    consoleLogger.info("Worker ".concat(worker.process.pid, " died at ").concat(Date()));

    _cluster.default.fork();
  });
} else {
  Server.listen(app.get('port'), () => consoleLogger.info("Servidor express escuchando en el puerto ".concat(app.get('port'), " - PID WORKER ").concat(process.pid)));
}