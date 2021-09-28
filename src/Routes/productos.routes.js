import express from "express";
const Router = express.Router();
import {productoController} from '../controllers/productos.controller'
import {productosRepository} from '../repository/productos.repository'


//Inicializaciones

//Rutas

Router.get("/listar", productoController.getAllproductos);

Router.get("/listar/:id", productoController.getProductosByid);

Router.get("/vista", async (req, res) => {
   let products = await productosRepository.getAllproductos() ;
   res.render("products/allProducts",{products})
})


Router.get("/new",(req, res) => {
    res.render("products/newProduct")
 })

Router.get("/vista-test/:cant?",async (req,res)=>{
    let products = await productosRepository.getRandomProductos(req.params.cant)
    res.render("products/allProducts",{products})
})

Router.post("/crear",productoController.createProductos);

Router.delete("/eliminar/:id",productoController.deleteProductos);

Router.put("/actualizar/:id",productoController.updateProductos)


Router.get("/sala-products",async (req, res) => {
    let products = await productosRepository.getAllproductos() ;
    res.render('products/sala',{products})
})


export default Router;