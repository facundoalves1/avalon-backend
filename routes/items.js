const router = require('express').Router();
const Item = require('../models/Items');
const multer = require('multer');
const upload = multer();
const cloudinary = require('cloudinary').v2

router.post('/items/create', upload.single('image') ,async (req,res)=>{

    const {name,price,tags} = req.body;
    const {file} = req;
    
    try{

        await cloudinary.uploader.upload(file,{upload_preset: "test"},(result,err)=>{

            if(err){
                console.log(err);
            }

            let {url} = result;

             const newItem = Item.create({

                name : name,
                image : url,
                price : price,
                tags : tags
        
            });

            res.status(200).json({data : newItem, success : true});

        });

        

    } catch(err){

        console.log(err);
        res.status(400).json({success : false});

    }

    
});

router.get('/items/home', async (req,res)=>{

    try{

        const item = await Item.find();

        if(!item){

            res.status(400).json({success:false});

        }

        res.status(200).json({data:item, success:true});

    }catch(err){

        console.log(err);
        res.status(400).json({success:false});

    }

    

});

module.exports = router;

