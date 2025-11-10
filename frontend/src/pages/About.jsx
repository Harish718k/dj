import React from "react";
import djImage from "../assets/images/about_dj_img.jpg";

function About() {
  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen flex flex-col items-center justify-center px-6 py-16">
      {/* Optional subtle overlay pattern */}
      <div className="absolute inset-0 bg-[url('/assets/images/noise-texture.png')] opacity-10 pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center z-10">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={djImage}
            alt="DJ performing live"
            className="rounded-2xl shadow-2xl w-full max-w-sm md:max-w-md object-cover transform hover:scale-105 transition duration-500"
          />
        </div>

        {/* Text Section */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-red-500 mb-6">
            About DJ BEATZ
          </h1>

          <p className="text-gray-300 leading-relaxed mb-4">
            DJ BEATZ is known for spinning electrifying beats that light up dance floors.
            With over a decade of experience performing at clubs, weddings, and festivals,
            he brings pure energy, rhythm, and passion to every event.
          </p>

          <p className="text-gray-400 leading-relaxed mb-4">
            From deep house to EDM, Bollywood, and hip-hop remixes, DJ BEATZ blends
            genres seamlessly to create unforgettable nights. Every track is crafted
            to keep the crowd moving and connected through music.
          </p>

          {/* Music Philosophy Quote */}
          <p className="italic text-gray-400 mb-6">
            “Music isn’t just what I play — it’s what I feel. Every beat tells a story.”
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-6 text-center mb-8">
            <div>
              <h3 className="text-3xl font-bold text-red-500">500+</h3>
              <p className="text-gray-400 text-sm">Events Played</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-red-500">10+</h3>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-red-500">50K+</h3>
              <p className="text-gray-400 text-sm">Happy Guests</p>
            </div>
          </div>

          {/* Genres / Style Highlights */}
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
            <li>Expert in EDM, House, Bollywood & Hip-Hop remixes</li>
            <li>Performs for weddings, clubs, corporate & private events</li>
            <li>Custom playlists curated for your event’s vibe</li>
          </ul>

          {/* Short Journey / Backstory */}
          <p className="text-gray-400 leading-relaxed mb-6">
            What began as a small passion project in college has now evolved into a
            powerhouse DJ act, performing across cities and festivals. DJ BEATZ continues
            to push the boundaries of live performances with stunning visual effects and
            immersive soundscapes.
          </p>

          {/* CTA Button */}
          <a
            href="/booking"
            className="inline-block bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300"
          >
            Book Your Event
          </a>

          {/* Social Links */}
          <div className="mt-8 flex space-x-5">
            <a
              href="https://instagram.com/djbeatz"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-red-500 transition"
            >
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a
              href="https://soundcloud.com/djbeatz"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-red-500 transition"
            >
              <i className="fab fa-soundcloud text-2xl"></i>
            </a>
            <a
              href="https://youtube.com/@djbeatz"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-red-500 transition"
            >
              <i className="fab fa-youtube text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
