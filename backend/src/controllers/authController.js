import User from "../models/User.js";
import Social from "../models/Social.js";
import { sendVerificationEmail } from "../config/mailer.js";
import { generateHashedCode, compareCode } from "../utils/passwordUtils.js";
import { issueJwt } from "../utils/jwtUtils.js";

// Register User and Send Verification Code
export const register = async (req, res) => {
  const { email } = req.body;

  try {
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    let user = await User.findOne({ email });
    const { rawCode, hashedCode } = await generateHashedCode(); // Generate and hash code

    if (!user) {
      user = new User({ email, verificationCode: hashedCode });
      await user.save();

      // Create a corresponding social profile for the user
      await Social.create({ userId: user._id });
    } else {
      user.verificationCode = hashedCode;
      await user.save();
    }

    await sendVerificationEmail(user.email, rawCode);
    res.json({ message: "Verification code sent!", email: user.email });
  } catch (error) {
    console.error("❌ Error in register:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Verify Code and Issue Token
export const verifyCode = async (req, res) => {
  const { email, code } = req.body;
  console.log(email, code);

  try {
    if (!code) {
      return res.status(400).json({ error: "Verification code is required" });
    }
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const isMatch = await compareCode(code, user.verificationCode);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid verification code" });
    }

    user.isVerified = true;
    user.verificationCode = null;
    await user.save();

    const { token } = issueJwt(user);
    const userData = { email: user.email, isVerified: user.isVerified };

    res.json({
      message: "Verification Successful",
      userData,
      token,
    });
  } catch (error) {
    console.error("❌ Error in verifyCode:", error);
    res.status(500).json({ error: "Server error" });
  }
};
