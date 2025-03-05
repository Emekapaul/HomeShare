import mongoose from "mongoose";

const socialSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    twitter: { type: Boolean, default: false },
    telegram: { type: Boolean, default: false },
    youtube: { type: Boolean, default: false },
    allVerified: { type: Boolean, default: false }, // True if all socials are verified
  },
  { timestamps: true }
);

export default mongoose.model("Social", socialSchema);
