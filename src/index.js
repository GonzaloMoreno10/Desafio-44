import * as path from "path";
import exphbs from 'express-handlebars';
import Handlebars from 'handlebars';
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access';
import http from "http";
import {initIo} from "./services/socketIo.js";
import express from 'express';
import Router from "./Routes/main";
import cookieParser from 'cookie-parser';
const session = require('express-session')
const app = express();
require('./services/mongo')
//const __dirname = dirname(fileURLToPath(import.meta.url));


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
/*app.use(session({
    secret:'secreto',
    resave:true,
    saveUnitialized:true,
    cookie:{maxAge: 1},
}))*/


app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
const publicPath = path.resolve(__dirname, '../public');
console.log(publicPath)
app.use(express.static(publicPath));



app.use("/api", Router);




const Server = http.Server(app);

//Inicio el servidor de socket
initIo(Server);

//Listen
Server.listen(app.get('port'), (req, res) => {
    console.log("Servidor escuchando en " + app.get('port'));
})
