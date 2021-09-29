import express from "express";
const Router = express.Router();
import {userController} from '../controllers/users.controller' 
import { usersRepository } from "../repository/users.repository";


//Inicializaciones

//Rutas

Router.post("/login", userController.login);

Router.post('/singin',userController.singin);

Router.post('/logout',userController.logout);

Router.get('/login',(req,res)=>{
    res.render("users/login")
})


export default Router;