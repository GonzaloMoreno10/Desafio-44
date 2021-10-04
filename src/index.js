import * as path from "path";
import exphbs from 'express-handlebars';
import Handlebars from 'handlebars';
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access';
import http from "http";
import {initIo} from "./services/socketIo.js";
import express from 'express';
import Router from "./Routes/main";
import cookieParser from 'cookie-parser';
import {StoreOptions} from './services/session';
import session from 'express-session'
import passport from 'passport'
const app = express();

require('./services/mongo')
require('./services/passport');


app.set('port',process.env.port ||8080);
app.set('views', path.resolve(__dirname, 'views'));

app.engine('.hbs', exphbs({  //Configuro handlebars
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));

app.set('view engine', '.hbs');

//Middlewares
app.use(session(StoreOptions))

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
const publicPath = path.resolve(__dirname, '../public');
console.log(publicPath)
app.use(express.static(publicPath));

app.use((req,res,next)=>{
    res.locals.user = req.user || null;
    if(res.locals.user !== null) console.log(res.locals.user.user)
    
    next();
})

app.use("/api", Router);


const Server = http.Server(app);

//Inicio el servidor de socket
initIo(Server);

//Listen
Server.listen(app.get('port'), (req, res) => {
    console.log("Servidor escuchando en " + app.get('port'));
})
