import React from "react";
import djImage from "../assets/images/diskjockey.jpg";

function About() {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <img
            src={djImage}
            alt="DJ performing live"
            className="rounded-2xl shadow-lg w-full max-w-sm md:max-w-md object-cover"
          />
        </div>

        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-red-500 mb-6">
            About DJ BEATZ
          </h1>
          <p className="text-gray-300 leading-relaxed mb-4">
            DJ BEATZ is known for spinning electrifying beats that light up dance floors.
            With years of experience performing at clubs, weddings, and festivals,
            he brings passion and energy to every event.
          </p>
          <p className="text-gray-400 leading-relaxed mb-6">
            From deep house to EDM and hip-hop remixes, DJ BEATZ blends genres
            seamlessly to create unforgettable nights. Music is not just sound —
            it’s emotion, rhythm, and connection.
          </p>
          <a
            href="/booking"
            className="inline-block bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300"
          >
            Book Your Event
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
