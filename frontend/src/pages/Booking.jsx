import React, { useState, useEffect } from "react";

function Booking() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    date: "",
    eventType: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await fetch("http://localhost:5000/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus({
          type: "success",
          message: "🎉 Booking successful! We'll contact you soon.",
        });
        setForm({
          name: "",
          email: "",
          phone: "",
          location: "",
          date: "",
          eventType: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: "❌ Failed to send booking email. Try again later.",
        });
      }
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        message: "⚠️ Error sending booking request. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  // auto-clear success message after 5s
  useEffect(() => {
    if (status.message) {
      const timer = setTimeout(() => setStatus({ type: "", message: "" }), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-6 py-16 relative">
      <div className="max-w-4xl w-full bg-zinc-900 rounded-2xl shadow-lg p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-red-500 mb-8">
          Book DJ BEATZ
        </h1>
        <p className="text-center text-gray-400 mb-10">
          Ready to make your event unforgettable? Fill out the form below to
          book DJ BEATZ for your next party, club night, or wedding.
        </p>

        {/* Status message */}
        {status.message && (
          <div
            className={`text-center mb-6 p-3 rounded-lg ${
              status.type === "success"
                ? "bg-green-900/40 border border-green-700 text-green-400"
                : "bg-red-900/40 border border-red-700 text-red-400"
            }`}
          >
            {status.message}
          </div>
        )}

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

          {/* Phone */}
          <div className="col-span-1">
            <label className="block mb-2 text-gray-300">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Location */}
          <div className="col-span-1">
            <label className="block mb-2 text-gray-300">Event Location</label>
            <input
              type="text"
              name="location"
              value={form.location}
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
              disabled={loading}
              className={`bg-red-600 hover:bg-red-500 text-white font-semibold px-8 py-3 rounded-full transition duration-300 flex items-center justify-center gap-2 mx-auto ${
                loading ? "opacity-75 cursor-not-allowed" : ""
              }`}
            >
              {loading && (
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              )}
              {loading ? "Sending..." : "Send Booking Request"}
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
