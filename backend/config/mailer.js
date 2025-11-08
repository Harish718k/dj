import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); // ensures .env variables load even when imported

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false, // avoids "self-signed certificate" errors
  },
});

export default transporter;
