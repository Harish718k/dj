import transporter from "../config/mailer.js";
import Booking from "../models/booking.js";

export const sendBookingEmail = async (req, res) => {
  const { name, email, phone, location, date, eventType, message } = req.body;

  try {
    // ✅ Save booking in MongoDB
    const newBooking = new Booking({ name, email, phone, location, date, eventType, message });
    await newBooking.save();

    // ✅ Send email to admin
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `🎧 New Booking Request from ${name}`,
      html: `
        <h2 style="color:#e11d48;">New Booking Request</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Location:</b> ${location}</p>
        <p><b>Date:</b> ${date}</p>
        <p><b>Event Type:</b> ${eventType}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    // ✅ Confirmation email to customer
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: "🎶 Booking Confirmation – DJ BEATZ",
      html: `
        <div style="font-family:sans-serif;padding:20px;background:#111;color:#eee;border-radius:8px;">
          <h2 style="color:#e11d48;">Hey ${name},</h2>
          <p>Thanks for booking <strong>DJ BEATZ</strong>!</p>
          <p>We received your request for:</p>
          <ul>
            <li><strong>Date:</strong> ${date}</li>
            <li><strong>Event Type:</strong> ${eventType}</li>
            <li><strong>Location:</strong> ${location}</li>
          </ul>
          <p>We’ll contact you at ${phone} soon to confirm details.</p>
          <p>– Team DJ BEATZ 🎧</p>
        </div>
      `,
    });

    res.status(200).json({ success: true, message: "Booking saved and email sent!" });
  } catch (error) {
    console.error("Booking failed:", error);
    res.status(500).json({ success: false, message: "Booking failed" });
  }
};

// Fetch all bookings (for admin)
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ message: "Failed to fetch bookings" });
  }
};

export const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findByIdAndDelete(id);

    if (!booking) {
      return res.status(404).json({ success: false, message: "Booking not found" });
    }

    res.json({ success: true, message: "Booking deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error });
  }
};
