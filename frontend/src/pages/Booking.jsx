import React, { useState, useEffect } from "react";
import djVideo from "../assets/videos/video1.mp4"; // 🎥 add your DJ video here

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

  useEffect(() => {
    if (status.message) {
      const timer = setTimeout(() => setStatus({ type: "", message: "" }), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <section className="relative bg-black text-white min-h-screen flex items-center justify-center overflow-hidden py-24">
      {/* Neon gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-red-900 via-black to-purple-900 opacity-70"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/30 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/30 blur-[150px] rounded-full translate-x-1/2 translate-y-1/2"></div>

      {/* Booking Card */}
      <div className="max-w-6xl w-full bg-zinc-900/80 backdrop-blur-md rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden border border-red-500/20">
      {/* Right: DJ Video with Overlay */}
        <div className="hidden md:block w-1/2 relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover brightness-90"
          >
            <source src={djVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          <div className="absolute bottom-6 left-6 z-10">
            <h2 className="text-3xl font-extrabold text-red-500 drop-shadow-lg">
              Feel the Vibe 🔥
            </h2>
            <p className="text-gray-300 text-sm mt-1">
              Beats that move your soul, lights that ignite your night.
            </p>
          </div>
        </div>
        {/* Left: Form */}
        <div className="w-full md:w-1/2 p-8 md:p-10">
          <h1 className="text-4xl font-bold text-center text-red-500 mb-4 tracking-wide">
            Book DJ BEATZ
          </h1>
          <p className="text-center text-gray-400 mb-6 text-sm">
            Let’s make your event legendary. Fill in your details below 🎶
          </p>

          {/* Status message */}
          {status.message && (
            <div
              className={`text-center mb-5 p-3 rounded-lg ${
                status.type === "success"
                  ? "bg-green-900/40 border border-green-700 text-green-400"
                  : "bg-red-900/40 border border-red-700 text-red-400"
              }`}
            >
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className="p-3 rounded-md bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:border-red-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="p-3 rounded-md bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:border-red-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              className="p-3 rounded-md bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:border-red-500"
            />
            <input
              type="text"
              name="location"
              placeholder="Event Location"
              value={form.location}
              onChange={handleChange}
              required
              className="p-3 rounded-md bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:border-red-500"
            />
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
              className="p-3 rounded-md bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:border-red-500"
            />
            <select
              name="eventType"
              value={form.eventType}
              onChange={handleChange}
              required
              className="p-3 rounded-md bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:border-red-500"
            >
              <option value="">Select Event Type</option>
              <option value="Club">Club</option>
              <option value="Wedding">Wedding</option>
              <option value="Festival">Festival</option>
              <option value="Private Party">Private Party</option>
            </select>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="3"
              placeholder="Tell us about your event..."
              className="p-3 rounded-md bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:border-red-500"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className={`bg-red-600 hover:bg-red-500 text-white font-semibold px-8 py-3 rounded-full transition duration-300 flex items-center justify-center gap-2 mx-auto w-full mt-2 ${
                loading ? "opacity-75 cursor-not-allowed" : ""
              }`}
            >
              {loading && (
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              )}
              {loading ? "Sending..." : "Send Booking Request"}
            </button>
          </form>
        </div>

        
      </div>
    </section>
  );
}

export default Booking;
