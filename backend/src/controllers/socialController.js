import User from "../models/User.js";
import Social from "../models/Social.js";
import { receiveUserEmail } from "../config/mailer.js";

// Update Social Verification Status
export const updateSocials = async (req, res) => {
  const userId = req.user._id; // Retrieved from JWT middleware
  const { twitter, telegram, youtube } = req.body;

  try {
    const socials = await Social.findOne({ userId });

    if (!socials) {
      return res.status(404).json({ error: "Social profile not found" });
    }

    if (twitter !== undefined) socials.twitter = twitter;
    if (telegram !== undefined) socials.telegram = telegram;
    if (youtube !== undefined) socials.youtube = youtube;

    // Check if all socials are verified
    socials.allVerified =
      socials.twitter && socials.telegram && socials.youtube;

    await socials.save();

    res.json({ message: "Social verification updated", socials });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get User's Social Status
export const getSocialStatus = async (req, res) => {
  const userId = req.user._id; // Retrieved from JWT middleware

  try {
    const socials = await Social.findOne({ userId });

    if (!socials) {
      return res.status(404).json({ error: "Social profile not found" });
    }

    res.json({ socials });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const userEmail = async (req, res) => {
  const { _id } = req.user; // Retrieved from JWT middleware
  const { fullName, email, phone, message } = req.body;

  try {
    const user = await User.findOne({ _id });
    if (!user) {
      return res.status(404).json({ error: "User not Foundkk" });
    }

    await receiveUserEmail(fullName, email, phone, message);
    res.json({ message: "Email sent" });
  } catch (error) {
    console.error("❌ Error in userEmail:", error);
    res.status(500).json({ error: "Server error" });
  }
};
