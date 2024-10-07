const mongoose = require('mongoose')

const hotelMenuSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    test:{
        type:String,
        enum:['spicy','sweet','sour'],
        require:true
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingrediants:{
        type:String,
        default:[""]
    },
    num_sales:{
        type:Number,
        default:0
    }

})
const menu = mongoose.model('menu',hotelMenuSchema)
module.exports=menu;
