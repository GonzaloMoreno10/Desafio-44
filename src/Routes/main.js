import {Router} from 'express';
import productoRoute from './productos.routes';
import userRoute from './users.routes'
//import processRoute from './process.route'
import printProcessInfo from '../process/processInfo';
import {fork} from 'child_process';
import path from 'path'
const scriptPath = path.resolve(__dirname, '../process/calculoRandoms.js')
console.log(scriptPath)
const router = Router();

router.use('/productos',productoRoute);

router.use('/users',userRoute)

router.get('/processInfo',(req,res)=>{
    let data = printProcessInfo();
    res.render("processInfo",{data})
})

router.get('/randoms',(req,res)=>{
    let {cantidad} = req.query;
    const computo = fork(scriptPath);
    computo.send({mensaje:'start',cantidad:cantidad})
    computo.on('message',(calc)=>{
        res.json(calc)
    })
})

export default router;