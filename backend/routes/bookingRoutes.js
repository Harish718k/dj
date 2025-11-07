import express from "express";
import { sendBookingEmail } from "../controllers/bookingController.js";

const router = express.Router();

router.post("/send-booking", sendBookingEmail);

export default router;
