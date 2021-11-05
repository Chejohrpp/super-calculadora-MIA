const router = require('express').Router();

router.get('/',async (req,res)=>{
        res.status(201).json({mensaje:"BIENVENIDO A WORKER"})
})

router.get('/suma/', async (req,res)=>{
    const {op1,op2} = req.query;
    res.status(201).json({resultado:(Number.parseInt(op1)+Number.parseInt(op2))})
})

router.get('/multiplicacion/',async (req,res)=>{
    const {op1,op2} = req.query;
    res.status(201).json({resultado:(Number.parseInt(op1)*Number.parseInt(op2))})
})

router.get('/division/', async (req,res)=>{
    const {op1,op2} = req.query;
    res.status(201).json({resultado:(Number.parseInt(op1)/Number.parseInt(op2))})
})

router.get('/resta', async (req,res)=>{
    const {op1,op2} = req.query;
    res.status(201).json({resultado:(Number.parseInt(op1)-Number.parseInt(op2))})
})

router.get('/potencia', async (req,res)=>{
    const {op1,op2} = req.query;
    res.status(201).json({resultado:( Math.pow( Number.parseInt(op1),Number.parseInt(op2)  ) )})
})

module.exports = router;