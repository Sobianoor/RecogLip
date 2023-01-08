const mongoose=require('mongoose');


const ImageSchema=mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    image:{
        data:String,
        contentType:String
    }

})

const ImageModel=mongoose.model('imageModel',ImageSchema);

module.exports=ImageModel;
