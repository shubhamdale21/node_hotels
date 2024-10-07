const express = require('express')
const router = express.Router();

const bus = require("./../Model/bus");

router.post('/',async(req,res)=>{
    try{
        const data = req.body;
        const newbus = new bus(data);
        const response = await newbus.save();
        console.log("data saved");
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
})

router.get('/',async(req,res)=>{
    try{
    const data = await bus.find();
    console.log("data is fetched");
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"});
    }
    

})


router.get('/:travelsType',async(req,res)=>{
    try{
    const travelsType = req.params.travelsType;
    if(travelsType=='Neeta' || travelsType=='Humsafar' || travelsType=='Anand'){
        const response = await bus.find({travels:travelsType});
        console.log("data matched");
        res.status(200).json(response);
    }
    else{
        console.log("data in not matched");
        res.status(404).json({error:"Invalid error Typed"});
        
    }
}
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"});
    }
})

module.exports=router;





