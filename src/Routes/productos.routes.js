import express from "express";
const Router = express.Router();
import {productoController} from '../controllers/productos.controller'
import {productosRepository} from '../repository/productos.repository'
import{auth} from '../middlewares/autenticacion'

//Inicializaciones

//Rutas

Router.get("/listar",auth, productoController.getAllproductos);

Router.get("/listar/:id", productoController.getProductosByid);

Router.get("/vista",auth,async (req, res) => {
   let products = await productosRepository.getAllproductos() ;
   let cookie = req.cookies.user;
   console.log(cookie)
   res.render("products/allProducts",{products,cookie})
})



Router.get("/new",auth,(req, res) => {
    res.render("products/newProduct")
 })

Router.get("/vista-test/:cant?",auth,async (req,res)=>{
    let products = await productosRepository.getRandomProductos(req.params.cant)
    res.render("products/allProducts",{products})
})

Router.post("/crear",auth,productoController.createProductos);

Router.delete("/eliminar/:id",auth,productoController.deleteProductos);

Router.put("/actualizar/:id",auth,productoController.updateProductos)


Router.get("/sala-products",auth,async (req, res) => {
    let products = await productosRepository.getAllproductos() ;
    res.render('products/sala',{products})
})


export default Router;