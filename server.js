const express= require('express')
const app = express();
const db = require('./db')
const bodyParser= require('body-parser')
app.use(bodyParser.json());

const { get } = require('mongoose');

app.get('/',function(req,res){
    res.send("Welcome to our Hotel");
})


//Menu


const personRoutes = require("./routes/personRoutes");
const hotelMenu = require("./routes/menuRoutes");
const busRoutes = require("./routes/busRoutes");

app.use('/person',personRoutes);
app.use('/menu',hotelMenu);
app.use('/bus',busRoutes)

app.listen(4000,()=>{
    console.log('listening on port 4000')
});

