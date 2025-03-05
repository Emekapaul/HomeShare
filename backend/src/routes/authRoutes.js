import express from "express";
import { register, verifyCode } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/verify", verifyCode);

export default router;
