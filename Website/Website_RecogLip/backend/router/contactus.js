const express=require('express');
const bcrypt=require('bcryptjs');
const router=express.Router();

require("../db/conn");

const User=require("../model/userSchema");



router.get('/',(req,res)=>{


    res.send("Hello from the server router js");




});

//adding and getting data from postman

router.post('/contactpage',async(req,res)=>{

    const {name,email,message}=req.body;

    if(!name || !email ||!message){

        return res.status(422).json({error:"Please fill fields"});
    }  

    //Promise approach
    // User.findOne({email:email})
    // .then((userExist) =>{
    //     if(userExist){
    //         return res.status(422).json({error:"Email already exist"});

    //     }


    //     const user=new User({name,email,phone,work,password,cpassword});

    //     user.save().then(()=>{
    //         res.status(201).json({message:"Registered Succesfully"});

    //     }).catch((err)=>res.status(500).json({error:"Failed to register"}));



    // }).catch(err=>{console.log(err);});


    
    
    
    
    //Async Approach
    try{
        
       
    const user=new User({name,email,message});


    await user.save();

    res.status(201).json({message:"Message sent Succesfully"});

   

    


    }catch(err){

        console.log(err);
       





    }




  

});


//login route

router.post('/signin',async(req,res)=>{

    try{

        const {email,password}=req.body;
        
        if(!email||!password){
            return res.status(400).json({error:"Please fill credentials"});

        }

        const userLogin= await User.findOne({email:email});


        
        if(userLogin){
            const isMatch=await bcrypt.compare(password,userLogin.password);


            if(!isMatch){
                  res.json({error:'Password is incorrect'});
    
            }else{
                res.json({message:"Password is correct"});
            }

        }else{
            res.json({message:"Invalid credentials"});
            
        }

       


        //console.log(userLogin);

        if(!userLogin){
        res.json({error:"Login Failed"});

        }

        res.json({message:"User signin successfully"});

    }catch(err){
        console.log(err);
    }

})


module.exports=router; 