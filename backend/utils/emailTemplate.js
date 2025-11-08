export const bookingConfirmationTemplate = (name, date, eventType) => `
  <div style="font-family: 'Poppins', sans-serif; background-color: #000; color: #fff; padding: 30px; border-radius: 12px;">
    <h2 style="color: #ff2b2b; text-align: center;">🎧 DJ BEATZ Booking Confirmed</h2>
    <p>Hey <strong>${name}</strong>,</p>
    <p>Thanks for reaching out to <strong>DJ BEATZ</strong>! Your booking request has been received successfully.</p>

    <div style="background: linear-gradient(90deg, #ff2b2b, #000); padding: 15px; border-radius: 10px; margin-top: 20px;">
      <p><strong>📅 Event Date:</strong> ${date}</p>
      <p><strong>🎉 Event Type:</strong> ${eventType}</p>
    </div>

    <p style="margin-top: 20px;">We’ll get back to you shortly to confirm availability and other details.</p>

    <p style="text-align:center; margin-top: 30px; font-size: 14px; color: #aaa;">
      © 2025 DJ BEATZ | Feel the Rhythm. Live the Vibe.
    </p>
  </div>
`;
