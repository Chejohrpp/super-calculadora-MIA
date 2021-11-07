// load the things we need
var express = require('express');
var app = express();
const path = require('path');
const axios = require('axios');

let token = undefined;

//json
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(express.static('public'));
//app.use('/css', express.static(__dirname + 'cliente/css'));
app.use('/js', express.static(__dirname + 'public/js'));
// set the view engine to ejs
app.set('views','ejs');
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('../cliente/index');
});

app.post('/', function(req, res) {
    res.render('../cliente/index');
});

// about page
app.get('/about', function(req, res) {
    res.render('about');
});

//faqs page
app.get('/faqs', function(req, res) {
    res.render('faqs');
});

//login page
app.get('/login', function(req, res) {
    res.render('login');
});

//register page
app.get('/register',(req,res)=>{
    res.render('register');
})

//error
app.use( (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'ejs/404.html'));
    
});

app.listen(3000);
console.log('3000 is the magic port');