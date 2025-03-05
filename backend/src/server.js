import app from "./app.js";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "0.0.0.0";

// Start the server
app
  .listen(PORT, HOST, () => {
    console.log(`🚀 Server running on http://${HOST}:${PORT}`);
  })
  .on("error", (err) => {
    console.error("❌ Server failed to start:", err);
  });
