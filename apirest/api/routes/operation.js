const router = require('express').Router()
const axios = require('axios')

const history = require('../models/history')

const workerport = process.env.WORKER_PORT
const workerhost = process.env.WORKER_HOST


router.get('/', (req,res)=>{
    const {op1,op2,op} = req.body
    res.status(201).json({operacion: `${op1} ${op} ${op2}`})
})

router.post('/', async (req,res)=>{
    const {op1,op2,op} = req.body
    const params ={
        op1 : op1,
        op2 : op2
    }
    var ruta = 'http://'+workerhost+':'+workerport+'/math/'+op;
    console.log(ruta);
    await axios.get(ruta,{port:Number.parseInt(workerport), params})
    .then(async response => {
        console.log(response.data)
        let operation =  `${op1} ${op} ${op2} = ${response.data.resultado}`
        try{
            await history.add(operation);
        }catch(error){
            console.log('error al agregar al historial')
            console.log(error)
        }
        res.status(201).json({operacion: `${op1} ${op} ${op2}`,resultado: response.data.resultado})
    })
    .catch(error=>{
        console.log('Existe un error')
        console.log(error)
        res.status(400).send('FUNCIONO')
    })
})

module.exports = router