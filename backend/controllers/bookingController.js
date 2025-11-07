import transporter from "../config/mailer.js";

export const sendBookingEmail = async (req, res) => {
  const { name, email, date, eventType, message } = req.body;

  try {
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // You’ll receive the booking here
      subject: `🎧 New Booking Request from ${name}`,
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Event Date:</strong> ${date}</p>
        <p><strong>Event Type:</strong> ${eventType}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    // Optional: send a confirmation email to the user
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: "🎶 Booking Confirmation – DJ BEATZ",
      html: `
        <h3>Hey ${name},</h3>
        <p>Thanks for reaching out to <strong>DJ BEATZ</strong>! Your booking request has been received for:</p>
        <ul>
          <li><strong>Date:</strong> ${date}</li>
          <li><strong>Event Type:</strong> ${eventType}</li>
        </ul>
        <p>We'll contact you shortly to confirm availability.</p>
        <p>– Team DJ BEATZ 🎧</p>
      `,
    });

    res.status(200).json({ success: true, message: "Booking email sent!" });
  } catch (error) {
    console.error("Email sending failed:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
};
