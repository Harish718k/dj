import React from "react";
import partyVideo from "../assets/videos/video2.mp4";
import event1 from "../assets/images/event1.jpg"; // sample images
import event2 from "../assets/images/event2.jpg";
import gallery1 from "../assets/images/gallery1.jpg";
import gallery2 from "../assets/images/gallery2.jpg";
import gallery3 from "../assets/images/gallery3.jpg";

function Home() {
  return (
    <div className="relative text-white">
      {/* 🎥 Fixed Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-10 brightness-50"
      >
        <source src={partyVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔹 Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center">
        <div className="max-w-3xl z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-red-500 drop-shadow-lg">
            Welcome to DJ BEATZ
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-8">
            Feel the rhythm, live the vibe. Experience electrifying beats and unforgettable nights.
          </p>

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
      </section>

      {/* 🔹 About the Video Section */}
      <section className="bg-black/60 backdrop-blur-sm py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-red-400 mb-6">
            About the Video
          </h2>
          <p className="text-gray-200 text-lg leading-relaxed">
            This video captures the essence of DJ BEATZ — high-energy performances,
            mesmerizing lights, and unforgettable party vibes. Every beat and drop
            is crafted to make your night legendary.
          </p>
        </div>
      </section>

      {/* 🔹 Latest Events Section */}
      <section className="bg-black/70 py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-red-400 mb-12">
          Latest Events
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[{ img: event1, title: "Neon Night", date: "Oct 2025" },
            { img: event2, title: "Electric Beats Fest", date: "Sept 2025" }].map((event, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
              <img src={event.img} alt={event.title} className="w-full h-60 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-red-400">{event.title}</h3>
                <p className="text-gray-300 mt-2">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Photo Gallery Section */}
      <section className="bg-black/60 py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-red-400 mb-12">
          Photo Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {[gallery1, gallery2, gallery3, gallery1, gallery2, gallery3].map((photo, i) => (
            <div key={i} className="overflow-hidden rounded-xl hover:scale-105 transition-transform duration-300">
              <img src={photo} alt={`Gallery ${i + 1}`} className="object-cover w-full h-56" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
