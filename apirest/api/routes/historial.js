var router = require('express').Router()
const authenticated =  require('../auth/checktokens')

const history =  require('../models/history')

router.get('/',authenticated.checkToken, async (req, res)=> {
    let historial;
    try{
        historial = await history.getAll();
    }catch(error){
        console.log('error al cargar el historial')
            console.log(error)
    }
    res.status(201).json({ message: 'Estás conectado a la API. Recurso: historial',historial:historial })
})

router.post('/', (req, res) => {
    res.status(201).json({mensaje:"vas agregar mas historias"})
});

router.get('/:id', function(req, res) {
    res.status(201).json({ message: 'Vas a obtener la historia con id ' + req.params.id })
})

module.exports = router;