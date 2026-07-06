import dotenv from "dotenv";
dotenv.config();
import express from "express"
import cors from "cors";
import userRouter from "./routes/user_router.js";
import { ConnectDB } from "./utlis/ConnectDB.js";
import chatRoute from "./routes/ChatRoute.js";
import dns from "dns";

const PORT = process.env.PORT || 5000;

dns.setServers(['8.8.8.8', '8.8.4.4']);

const app = express();
app.use(express.json());
app.use(cors({
    origin:"https://ai-chat-bot-ltza.vercel.app",
    optionsSuccessStatus:200,
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"] 
}))

app.use("/api/auth",userRouter);
app.use("/api/auth",chatRoute)
ConnectDB(
    app.listen(PORT,()=>{
    console.log("Server is running at port", PORT);
})
);

