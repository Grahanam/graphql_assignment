const mongoose=require('mongoose')


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    age:{
        type:Number,
        require:true
    }
}) 


module.exports=mongoose.model('User',userSchema)