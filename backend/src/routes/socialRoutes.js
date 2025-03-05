import express from "express";
import {
  updateSocials,
  getSocialStatus,
  userEmail,
} from "../controllers/socialController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.put("/update", authMiddleware, updateSocials); // Update social verification
router.get("/status", authMiddleware, getSocialStatus); // Get social status
router.post("/email", authMiddleware, userEmail); // Send user email

export default router;
