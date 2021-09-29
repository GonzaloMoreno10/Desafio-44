import express from "express";
const Router = express.Router();
import {userController} from '../controllers/users.controller' 
import { usersRepository } from "../repository/users.repository";
import{auth} from '../middlewares/autenticacion'


//Inicializaciones

//Rutas

Router.post("/login", userController.login);

Router.post('/singin',userController.singin);

Router.post('/logout',userController.logout);

Router.get('/logout',auth,(req,res)=>{
    let cookie = req.cookies.user;
    res.render('users/logout',{cookie})
})

Router.get('/login',(req,res)=>{
    res 
    .clearCookie("user")
    .render("users/login");
})


export default Router;