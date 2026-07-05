import { Router } from "express";
import { chatController } from "../Controller/chatController.js";

const router = Router();

router.post("/chat", chatController);

const chatRoute = router;

export default chatRoute;