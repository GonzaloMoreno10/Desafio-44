import {Router} from 'express';
import productoRoute from './productos.routes';
import userRoute from './users.routes'
//import processRoute from './process.route'
import printProcessInfo from '../process/processInfo';
import {fork} from 'child_process';
import path from 'path'

const scriptPath = path.resolve(__dirname, '../process/calculoRandoms.js')
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

router.get('/cluster', (req, res) => {
    res.json({
      pid: process.pid,
      msg: 'HOLA',
    });
  });
  
  router.get('/slow', function (req, res) {
    const generarRandoms = (cantidad) => {
        let array = [];
      
        for (let i = 0; i < cantidad; i++) {
          array.push(Math.floor(Math.random() * (1000 - 1)) + 1)
        }
        return array;
      };
      
      
    const calcular = (cantidad = 100000000) => {
        let x = generarRandoms(cantidad);
        var indices = new Array(x.length)
        let resultados = [];
        indices.fill(0);
        for (var i = 0; i < indices.length; i++) {
      
          for (var j = 0; j < x.length; j++) {
            if (i == x[j]) {
              indices[i] = indices[i] + 1;
            }
      
          }
          resultados.push({cantidad:indices[i],numero:x[i]})
        }
      }
      calcular();
        
      res.json(resultados)
  });
  
  router.get('/muerte', (req, res) => {
    res.json({ msg: 'OK' });
    console.log(`PID => ${process.pid} will die`);
    process.exit(0);
  });

export default router;