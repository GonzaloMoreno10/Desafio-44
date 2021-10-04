import express from "express";
const Router = express.Router();
import { userController } from '../controllers/users.controller'
import { auth } from '../middlewares/autenticacion'



//Inicializaciones

//Rutas
Router.post('/login',userController.login);

Router.post('/singin', userController.singin);

Router.get('/singin', (req, res) => {
    res.render('users/singin')
});

Router.post('/logout', userController.logout);

Router.get('/logout', auth, (req, res) => {
    res.render('users/logout')
})

Router.get('/error', auth, (req, res) => {
    res.render('users/logout')
})

Router.get('/info', auth, userController.info)

Router.get('/login', (req, res) => {
    res.locals.user = null;
    req.session.destroy();
    res.render("users/login");
})


export default Router;