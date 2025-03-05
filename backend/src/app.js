import express from "express";
import passport from "./config/passportJwt.js";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import socialRoutes from "./routes/socialRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(passport.initialize());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/socials", socialRoutes);

export default app;
