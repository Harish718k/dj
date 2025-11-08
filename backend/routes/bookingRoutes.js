// in bookingRoutes.js
import express from "express";
import { getAllBookings, sendBookingEmail } from "../controllers/bookingController.js";

const router = express.Router();

router.post("/booking", sendBookingEmail);
router.get("/bookings", getAllBookings); 
export default router;
