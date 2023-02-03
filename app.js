// config server
const express = require('express');
const path =  require('path');
const hbs = require('hbs');
const app = express();

// database connectivity 

//write database connectivity code here ........

// setting static , partials and view path 
const static_path= path.join(__dirname,'/public');
const views_path = path.join(__dirname,'/public/views');
const partials_path = path.join(__dirname,'/public/partials');

//middle ware

app.use(express.urlencoded({extended:true}));
app.use(express.static(static_path));
app.set('view engine','hbs');
app.set('views',views_path);

hbs.registerPartials(partials_path);

//routing
app.use(require('./routes/index'));
app.use(require('./routes/getdata'));
app.use(require('./routes/senddata'));
// server config 
app.listen('8000',()=>{
    console.log("server is running at 8000 port");
})
