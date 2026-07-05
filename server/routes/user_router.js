import { Router } from "express";
import { userLogin } from "../Controller/userLogin.js";

const router = Router();

    router.post("/login",userLogin);

    const userRouter = router;

export default userRouter;