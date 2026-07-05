import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    role:{
        type:String,
        enum:["user","ai"],
        required:true,
    },
    message:{
        type:String,
        required:true,
    }
},
{
    timestamps:true
}
);

const Chat = new mongoose.model("Chat", messageSchema)

export default Chat;