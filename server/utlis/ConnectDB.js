import mongoose from "mongoose";

export const ConnectDB = async()=>{
    try {
        await mongoose.connect(process.env.DatabaseURL);
        console.log("Database is connected")
    } catch (error) {
        console.log("Database connection error", error);
        
    }

}