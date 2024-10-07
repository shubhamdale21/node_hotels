const mongoose = require('mongoose')


const mongoURL='mongodb://localhost:27017/hotel';


mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology:true
})

const db = mongoose.connection;

db.on('connected',()=>{
    console.log('connected to mongodb server');
});

db.on('error',(err)=>{
    console.log('Mongodb connection error',err)
});

db.on('disconnect',()=>{
    console.log('Mongodb Server disconnected')
});

module.exports = db;