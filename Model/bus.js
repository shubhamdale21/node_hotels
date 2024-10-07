const mongoose = require('mongoose')

const busSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    travels:{
        type:String,
        enum:['Neeta',"Humsafar","Anand"],
        require:true
    },
    Type:{
        type:String,
        enum:["Seater","Sleeper"],
        require:true
    },
    Seat_number:{
        type:Number,
        require:true
    }

}
)

const bus = mongoose.model('bus',busSchema);
module.exports = bus;