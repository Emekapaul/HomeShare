import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// Load RSA private key
const privateKey = process.env.PRIVATE_KEY.includes("\\n")
  ? process.env.PRIVATE_KEY.replace(/\\n/g, "\n")
  : process.env.PRIVATE_KEY;

console.log(
  "Private Key (first All chars):",
  privateKey ? privateKey.slice(0) : "Key not found"
);

export const issueJwt = (user) => {
  const payload = {
    sub: user._id,
  };

  const signedToken = jwt.sign(payload, privateKey, {
    expiresIn: "7d",
    algorithm: process.env.JWT_ALGORITHM || "RS256",
  });

  return {
    token: `Bearer ${signedToken}`,
  };
};
