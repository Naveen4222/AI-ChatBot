import { generateGeminiResponse } from "../Services/geminiservices.js";
import Chat from "../models/chat_model.js";


export const chatController = async (req, res) => {
    try {
        console.log("HIT CONTROLLER");
        console.log("BODY:", req.body);
        const { message } = req.body;
        console.log("Input Message", req.body);

        if (!message) {
            return res.status(400).json({
                message: "Input message is required"
            })
        }


        // 1. Saving user message

        const userMsg = await Chat.create({ role: "user", message });
        console.log(userMsg);

        // 2. Get Ai Response

        const aiResponse = await generateGeminiResponse(message);
        const aiMsg = await Chat.create({ role: "ai", message: aiResponse });

        res.status(200).json({
            user: userMsg.message,
            ai: aiResponse
        });



    } catch (error) {

        console.log("Gemini Response", error);

        res.status(500).json({
            message: error.message
        })

    }

}