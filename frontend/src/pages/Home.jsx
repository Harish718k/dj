import React from "react";
import partyVideo from "../assets/videos/video2.mp4"; // adjust path if needed

function Home() {
  return (
    <section className="relative text-white min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center overflow-hidden">
      {/* 🔥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10 brightness-50"
      >
        <source src={partyVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Content */}
      <div className="max-w-3xl z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-red-500 drop-shadow-lg">
          Welcome to DJ BEATZ
        </h1>
        <p className="text-gray-200 text-lg md:text-xl mb-8">
          Feel the rhythm, live the vibe. Experience electrifying beats and unforgettable nights.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/music"
            className="bg-red-600 hover:bg-red-500 px-6 py-3 rounded-full text-lg font-semibold transition duration-300"
          >
            Listen Now
          </a>
          <a
            href="/booking"
            className="border border-red-600 hover:bg-red-600 hover:text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300"
          >
            Book an Event
          </a>
        </div>
      </div>

      {/* Optional dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40 -z-10"></div>
    </section>
  );
}

export default Home;
