import express from "express";
const Router = express.Router();
import {productoController} from '../controllers/productos.controller'
import { productosRepository } from '../repository/productos.repository';
import{auth,authSession} from '../middlewares/autenticacion'
import{usersRepository} from '../repository/users.repository'
import passport from '../services/passport.facebook'
import methodOverride from 'method-override'
//Inicializaciones

//Rutas

Router.use(methodOverride(function(req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method
      delete req.body._method
      return method
    }
  }));

Router.get("/listar",auth, productoController.getAllproductos);


Router.get("/listar/:id", auth,productoController.getProductosByid);

Router.get("/vista",auth,async (req, res) => {
   let products = await productosRepository.getAllproductos();
   let firstLogin = req.user.firstLogin;
   
   res.render("products/allProducts",{products,firstLogin})
   if(firstLogin){
       let user = req.user;
    user.firstLogin = false;
    await usersRepository.updateUser(user._id,user);
} 
})

Router.get("/new",auth,(req, res) => {
    res.render("products/newProduct")
 })

Router.get("/vista-test/:cant?",auth,async (req,res)=>{
    let products = await productosRepository.getRandomProductos(req.params.cant)
    res.render("products/allProducts",{products})
})

Router.get('/editar/:id',async (req,res)=>{
    let id = req.params.id;
    let producto = await productosRepository.getProductosById(id);
    res.render('products/edit',{producto})
})

Router.post("/crear",auth,productoController.createProductos);

Router.delete("/eliminar/:id",auth,productoController.deleteProductos);

Router.put("/actualizar/:id",auth,productoController.updateProductos)


Router.get("/sala-products",auth,async (req, res) => {
    let products = await productosRepository.getAllproductos() ;
    res.render('products/sala',{products})
})




export default Router;