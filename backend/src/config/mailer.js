import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendVerificationEmail = async (email, code) => {
  const mailOptions = {
    from: `HomeShare <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "🔐 Verify Your Email - HomeShare",
    html: `
    <div style="max-width: 600px; margin: 20px auto; font-family: Arial, sans-serif; border: 1px solid #ddd; border-radius: 10px; padding: 20px; background-color: #f9f9f9; text-align: center;">
      <h2 style="color: #4A2FBD;">🔒 Email Verification</h2>
      <p style="font-size: 16px; color: #555;">Welcome to <strong>HomeShare</strong>! Please use the verification code below to verify your email.</p>
      
      <div style="background: #4A2FBD; color: white; padding: 15px; font-size: 24px; font-weight: bold; border-radius: 8px; display: inline-block; margin: 10px 0;">
        ${code}
      </div>

      <p style="font-size: 14px; color: #666;">This code will expire in <strong>10 minutes</strong>. If you did not request this, please ignore this email.</p>
      
      <p style="font-size: 14px; color: #888; margin-top: 20px;">
        Need help? Contact our support team at 
        <a href="mailto:support@homeshare.com" style="color: #4A2FBD; text-decoration: none;">support@homeshare.com</a>
      </p>
    </div>
  `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✅ Verification email sent to ${email}`);
  } catch (error) {
    console.error("❌ Email not sent:", error);
  }
};

export const receiveUserEmail = async (fullName, email, phone, message) => {
  const mailOptions = {
    from: `${fullName} <${email}>`,
    replyTo: email,
    to: process.env.EMAIL_USER,
    subject: "📩 New Message from HomeShare User",
    html: `<div style="max-width: 600px; margin: 20px auto; font-family: Arial, sans-serif; border: 1px solid #ddd; border-radius: 10px; padding: 20px; background-color: #f9f9f9;">
        <h2 style="color: #4A2FBD; text-align: center;">📬 New User Message</h2>
        <p style="text-align: center; font-size: 16px; color: #555;">You have received a new message from a user on HomeShare.</p>
        
        <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
          <p><strong style="color: #AA367C;">👤 Name:</strong> ${fullName}</p>
          <p><strong style="color: #AA367C;">📧 Email:</strong> <a href="mailto:${email}" style="color: #4A2FBD; text-decoration: none;">${email}</a></p>
          <p><strong style="color: #AA367C;">📞 Phone:</strong> ${phone}</p>
          <p><strong style="color: #AA367C;">📝 Message:</strong></p>
          <div style="border-left: 4px solid #4A2FBD; padding-left: 10px; margin-top: 10px; color: #333;">
            ${message}
          </div>
        </div>

        <p style="text-align: center; margin-top: 20px; font-size: 14px; color: #888;">
          📩 <a href="mailto:${email}" style="color: #4A2FBD; text-decoration: none;">Reply to this email</a> | 💻 <a href="https://yourwebsite.com" style="color: #4A2FBD; text-decoration: none;">Visit HomeShare</a>
        </p>
      </div>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✅ Message sent from ${email}`);
  } catch (error) {
    console.error("❌ Email not sent:", error);
  }
};
