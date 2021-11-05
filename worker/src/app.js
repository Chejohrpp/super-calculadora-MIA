const express = require('express') 
const app = express()

var port = process.env.PORT || 5000  // establecemos nuestro puerto

//json
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const work_routes = require("./routes/worker")

app.use("/math/",work_routes)

app.listen(port)
console.log('API escuchando en el puerto ' + port)
