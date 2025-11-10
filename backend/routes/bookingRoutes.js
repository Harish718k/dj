// in bookingRoutes.js
import express from "express";
import { deleteBooking, getAllBookings, sendBookingEmail } from "../controllers/bookingController.js";

const router = express.Router();

router.post("/booking", sendBookingEmail);
router.get("/bookings", getAllBookings); 
router.delete("/:id", deleteBooking);
export default router;
