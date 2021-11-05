var router = require('express').Router()
var historial = require('./historial')
var operations = require('./operation')
var login = require('./login')

router.use('/historial', historial)
router.use('/operation',operations)
router.use('/auth',login)

router.get('/', function (req, res) {
  res.status(201).json({ message: 'Estás conectado a nuestra API' })
})

module.exports = router