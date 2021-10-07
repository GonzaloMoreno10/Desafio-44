import Producto from '../models/Producto';
import { productosRepository } from '../repository/productos.repository';



class ProductosController {
    async getAllproductos(req, res) {
        const items = await productosRepository.getAllproductos();
        res.json({
            data: items
        })
    }


    async getProductosByid(req, res) {
        const { id } = req.params;
        
        const item = await  productosRepository.getProductosById(id);
        if (!item) {
            return res.status(404).json({
                msg: 'Producto no encontrado'
            })
        }
        res.json({
            data: item
        })
    }

    async createProductos(req, res) {
        const { title, price,description,image,stock,code } = req.body;
        let date = new Date();
        const producto = new Producto({
            title, price, date,stock,code,description,image
        })

        console.log(producto);
        const id = await productosRepository.createProducto(producto)

        const newItem = await productosRepository.getAllproductos(id);
        req.flash("success_msg","Producto creado correctamente");
        res.redirect('/api/productos/vista')
    }


    async updateProductos(req, res) {
        const { title, price, stock,code,description,image } = req.body;
        
        const { id } = req.params;
        console.log(id);
        if (!title || !price || !stock || !code || !description ||!image) {
            return res.status(400).json({ msg: 'Invalid body' })
        }

        const productoOriginal = await productosRepository.getProductosById(id);

        //console.log(productoOriginal)
        if (!productoOriginal) {
            return res.status(404).json({
                msg: 'Producto no encontrado'
            })
        }

        const prod = { title, price, stock,code,description,image };

        await productosRepository.update(id, prod);

        const item = await productosRepository.getProductosById(id);
        req.flash("success_msg","Producto actualizado correctamente");
        return res.redirect('/api/productos/vista')
    }

    async deleteProductos(req,res){
        const { id } = req.params;

        console.log(id);
        const producto = await productosRepository.delete(id);

        if (!producto) {
            return res.redirect('/api/productos/vista')
        }

        await productosRepository.delete(id);
        req.flash("success_msg","Producto Eliminado correctamente");
        res.redirect('/api/productos/vista')
    }
}

export const productoController = new ProductosController();