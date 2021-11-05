import carritoRepository from '../repository/carrito.repository'
class CarritoController{

    async find(req,res){
        let {id} = req.params;
        if(id){
            let data = await carritoRepository.findById(id);
            res.status(201).json(data)
        }
        else{
            let data = await carritoRepository.findAll();
            res.status(200).json(data);
        }
    }
}

export const carritoController = new CarritoController();