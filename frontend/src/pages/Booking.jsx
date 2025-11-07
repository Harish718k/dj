import React, { useState } from "react";

function Booking() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    eventType: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const res = await fetch("http://localhost:5000/api/send-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        });

        const data = await res.json();

        if (data.success) {
        alert("🎉 Booking successful! We'll contact you soon.");
        setForm({ name: "", email: "", date: "", eventType: "", message: "" });
        } else {
        alert("❌ Failed to send booking email. Try again later.");
        }
    } catch (err) {
        console.error(err);
        alert("⚠️ Error sending booking request.");
    }
    };

  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-4xl w-full bg-zinc-900 rounded-2xl shadow-lg p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-red-500 mb-8">
          Book DJ BEATZ
        </h1>
        <p className="text-center text-gray-400 mb-10">
          Ready to make your event unforgettable? Fill out the form below to
          book DJ BEATZ for your next party, club night, or wedding.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Name */}
          <div className="col-span-1">
            <label className="block mb-2 text-gray-300">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Email */}
          <div className="col-span-1">
            <label className="block mb-2 text-gray-300">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Event Date */}
          <div className="col-span-1">
            <label className="block mb-2 text-gray-300">Event Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Event Type */}
          <div className="col-span-1">
            <label className="block mb-2 text-gray-300">Event Type</label>
            <select
              name="eventType"
              value={form.eventType}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:border-red-500"
            >
              <option value="">Select event type</option>
              <option value="Club">Club</option>
              <option value="Wedding">Wedding</option>
              <option value="Festival">Festival</option>
              <option value="Private Party">Private Party</option>
            </select>
          </div>

          {/* Message */}
          <div className="col-span-2">
            <label className="block mb-2 text-gray-300">Additional Details</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 rounded-md bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:border-red-500"
              placeholder="Tell us about your event..."
            ></textarea>
          </div>

          {/* Submit */}
          <div className="col-span-2 text-center mt-4">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-500 text-white font-semibold px-8 py-3 rounded-full transition duration-300"
            >
              Send Booking Request
            </button>
          </div>
        </form>
      </div>

      {/* Gradient background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-red-950/30 via-black to-black"></div>
    </section>
  );
}

export default Booking;
