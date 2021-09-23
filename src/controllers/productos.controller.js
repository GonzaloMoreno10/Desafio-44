import Producto from '../models/Producto';
import { productos } from '../repository/productos.repository';

const tableName = 'productos';

class ProductosController {
    async getAllproductos(req, res) {
        const items = await productos.getAllproductos();

        res.json({
            data: items
        })
    }


    async getProductosByid(req, res) {
        const { id } = req.params;
        
        const item = await  productos.getProductosById(id);
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
        const { title, price, thumbnail } = req.body;
        const producto = new Producto({
            title, price, thumbnail
        })

        const id = await productos.createProducto(producto)

        const newItem = await productos.getAllproductos(id);

        res.json({
            data:newItem
        })
    }


    async updateProductos(req, res) {
        const { title, price, thumbnail } = req.body;
        
        const { id } = req.params;
        if (!title || !price || !thumbnail) {
            return res.status(400).json({ msg: 'Invalida body' })
        }

        const productoOriginal = await productos.getProductosById(id);

        //console.log(productoOriginal)
        if (!productoOriginal) {
            return res.status(404).json({
                msg: 'Producto no encontrado'
            })
        }

        const prod = {title,price,thumbnail};

        await productos.update(id, prod);

        const item = await productos.getProductosById(id);
        res.json({
            msg: 'Producto Actualizado',
            item
        })
    }

    async deleteProductos(req,res){
        const { id } = req.params;

        const producto = await productos.delete(id);

        if (!producto) {
            return res.status(404).json({
                msg: 'Producto no encontrado'
            })
        }

        await productos.delete(id);
        res.json({
            msg:'Producto eliminado'
        })
    }
}

export const productoController = new ProductosController();