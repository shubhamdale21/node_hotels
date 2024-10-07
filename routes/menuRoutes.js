const express = require('express');
const router = express.Router();

const hotelMenu = require('./../Model/hotelMenus');
const menu = require('./../Model/hotelMenus');


router.post('/',async(req,res)=>{

    try{
        
        const data = req.body;

        const newMenu = new hotelMenu(data);
    
        const response = await newMenu.save();
        console.log('data saved')
        res.status(200).json(response);

    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
 
    }
    
})

router.get('/',async(req,res)=>{
    try{
        const data =await hotelMenu.find();
        console.log('data fetched');
        res.status(200).json(data);
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:"Internal server error"});
    }
    
})


router.get('/:testType',async(req,res)=>{
    try{
    const testType = req.params.testType;
    if(testType=='spicy' || testType=='sweet' || testType=='sour'){
        const response = await hotelMenu.find({test:testType})
        res.status(200).json(response);
    }
    else{ 
        
        res.status(404).json({error:'Invalid Menutype error'})
    }
    }
    catch(err){
        console.log(err);
        res.status(500).json("Internal server error");
    }
})
router.delete('/:id',async(req,res)=>{
    try{
        const menuId = req.params.id;
        const response =  await menu.findByIdAndDelete(menuId);   
        if(!response){
            console.log("Not found data")
            return res.status(404).json({error:"Not founded"})
        }     
        console.log("Deleted successful")
        res.status(200).json(response)
    
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:"Internal server error"})

    }
})


module.exports= router;