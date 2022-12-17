import express from "express";

const router=express.Router();
import { loginUser, singupUser, logoutUser } from "../controller/user-controller.js";
import { createNewToken, authenticateToken} from "../controller/jwt-controller.js";




router.post('/login', loginUser);
router.post('/signup', singupUser);
router.post('/logout', logoutUser);

router.post('/token', createNewToken);


export default router