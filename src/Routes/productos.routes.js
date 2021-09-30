import express from "express";
const Router = express.Router();
import {productoController} from '../controllers/productos.controller'
import {productosRepository} from '../repository/productos.repository'
import{auth,authSession} from '../middlewares/autenticacion'

//Inicializaciones

//Rutas

Router.get("/listar",authSession, productoController.getAllproductos);

Router.get("/listar/:id", authSession,productoController.getProductosByid);

Router.get("/vista",authSession,async (req, res) => {
   let products = await productosRepository.getAllproductos();
   //let user = req.session.user
   let firstLogin = false;
   if(req.session.contador ==  1) firstLogin = true;

   res.render("products/allProducts",{products,firstLogin})
})



Router.get("/new",authSession,(req, res) => {
    res.render("products/newProduct")
 })

Router.get("/vista-test/:cant?",authSession,async (req,res)=>{
    let products = await productosRepository.getRandomProductos(req.params.cant)
    res.render("products/allProducts",{products})
})

Router.post("/crear",authSession,productoController.createProductos);

Router.delete("/eliminar/:id",authSession,productoController.deleteProductos);

Router.put("/actualizar/:id",authSession,productoController.updateProductos)


Router.get("/sala-products",authSession,async (req, res) => {
    let products = await productosRepository.getAllproductos() ;
    res.render('products/sala',{products})
})


export default Router;