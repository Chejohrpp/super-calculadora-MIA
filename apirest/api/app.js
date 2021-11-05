const express = require('express') //llamamos a Express
const app = express();

var port = process.env.PORT || 3001  // establecemos nuestro puerto

//json
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

/*
app.get('/api', function(req, res) {
  res.status(201).json({ mensaje: '¡Bienvenido a nuestra API!' })
});

app.get('/api/historial', function(req, res) {
  res.status(201).json({mensaje:"HISTORIAL"})
});
*/
var router = require('./routes');
app.use('/',router)
/*
app.get('/historial',function(req, res) {
  res.status(201).json({mensaje:"HISTORIAL",nombre: req.body.nombre})
});

app.post('/operation',function(req, res) {
  res.status(201).json({mensaje:"OPERATION",operation: req.body.operation})
});
*/
app.use( (req, res, next) => {
    res.status(404).json({mensaje:"PAGINA API NO ENCONTRADO"})    
});

// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)
  