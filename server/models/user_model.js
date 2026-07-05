import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
        unique:true,
    }
   
},
{timestamps:true}
)

// creating collection or model

const userModel = new mongoose.model("User", userSchema);

export default userModel;