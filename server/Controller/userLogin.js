import userModel from "../models/user_model.js";

export const userLogin = async (req, res) => {
    try {
        const {name, email,password}= req.body;
        
        console.log("Request Body",req.body);
        const user = await userModel.create({name, email,password});

        res.status(200).json(user);  
        console.log("User data", user);

    } catch (error) {
        console.log("Message is not send at userlogin", error)

    }

}