import express from "express";
const Router = express.Router();
import {userController} from '../controllers/users.controller' 
import{auth, authSession} from '../middlewares/autenticacion'


//Inicializaciones

//Rutas

Router.post("/login", userController.login);

Router.post('/singin',userController.singin);

Router.post('/logout',userController.logout);

Router.get('/logout',authSession,(req,res)=>{
    let user = req.session.user;
    res.render('users/logout',{user})
})

Router.get('/info',authSession,userController.info)

Router.get('/login',(req,res)=>{
    req.session.destroy();
    res.render("users/login");
})


export default Router;