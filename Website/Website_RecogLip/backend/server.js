const dotenv=require("dotenv");
const mongoose=require('mongoose');
const express = require('express'); //requiring express
const app = express(); //methods and properties of express are in app
const multer=require('multer')


const ImageModel=require('./model/imageModel');



//Privacy and Security 
dotenv.config({path:'./config.env'});


require('./db/conn');
//const User=require('./model/userSchema'); //Schema

const PORT=process.env.PORT;


app.use(express.json());

//linking router files

app.use(require('./router/contactus'));
//app.use(require('./router/auth'));





//MiddleWare

const middleware=(req,res,next)=>{

    console.log('Hello my Middle Ware');
    next();

}






//Routing

// app.get('/',(req,res)=>{


//     res.send("Hello from the app.js");



// });

app.get("/about",middleware,(req,res)=>{
    console.log("Hello about")
    res.send("This is about");
})

app.get("/contact",(req,res)=>{
    res.send("This is contact");
})

app.get("/login",(req,res)=>{
    res.send("This is login");
})

// app.get("/signup",(req,res)=>{
//     res.send("This is signup");
// })


const Storage=multer.diskStorage({
    destination:'uploads',
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    },

});

const upload=multer({
    storage:Storage
}).single('testImage')



app.get('/upl',(req,res)=>{
    res.send("Upload it");
})

app.post('/upload',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            const newImage=new ImageModel({
                name:req.body.name,
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                }

            })

            newImage.save()
            .then(()=>res.send('successfully uploaded')).catch(err=>console.log(err));
        }
    })
})



app.listen(PORT,()=>{
    console.log(`server is running at port no ${PORT}`);
})
