import React, { useState } from "react";
import { FaSpotify, FaPlay, FaPlus } from "react-icons/fa";
import track1 from "../assets/images/track1.jpg";
import track2 from "../assets/images/track2.jpg";
import track3 from "../assets/images/track3.jpg";
import mix1 from "../assets/musics/kosmo-dj-243665.mp3"
import mix2 from "../assets/musics/the-turntable-299187.mp3"
import mix3 from "../assets/musics/wasting-my-time-156442.mp3"
import MusicPlayer from "../components/MusicPlayer";

function Music() {
  const [currentTrack, setCurrentTrack] = useState(null);

  const tracks = [
    {
      id: 1,
      title: "Rizzla",
      artist: "The Martinez Brothers, Gordo, Rema",
      img: track1,
      color: "bg-red-800",
      spotify: "#",
      audioUrl: mix1,
    },
    {
      id: 2,
      title: "Leaving Earth",
      artist: "KAS:ST, Gordo, Ki Bae",
      img: track2,
      color: "bg-blue-800",
      spotify: "#",
      audioUrl: mix2,
    },
    {
      id: 3,
      title: "KTM",
      artist: "Gordo",
      img: track3,
      color: "bg-red-900",
      spotify: "#",
      audioUrl: mix3,
    },
  ];

  return (
    <section className="bg-black text-white min-h-screen px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-10 border-b border-gray-700 pb-4">
          Latest Tracks
        </h1>

        {/* Grid layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track) => (
            <div
              key={track.id}
              className={`${track.color} rounded-xl p-6 flex flex-col justify-between shadow-lg hover:scale-[1.02] transition duration-300`}
            >
              {/* Album & Header */}
              <div className="flex justify-between items-start">
                <img
                  src={track.img}
                  alt={track.title}
                  className="w-24 h-24 rounded-md object-cover"
                />
                <FaSpotify className="text-white opacity-80" size={24} />
              </div>

              {/* Info */}
              <div className="mt-6">
                <h2 className="text-2xl font-bold mb-2">{track.title}</h2>
                <span className="bg-gray-700 text-xs px-2 py-1 rounded mr-2">
                  Preview
                </span>
                <p className="text-gray-300 text-sm mt-2">{track.artist}</p>
              </div>

              {/* Actions */}
              <div className="flex justify-between items-center mt-6">
                <a
                  href={track.spotify}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 hover:text-green-400 transition"
                >
                  <FaPlus size={14} />
                  <span className="text-sm font-medium">Save on Spotify</span>
                </a>
                <button
                  onClick={() => setCurrentTrack(track)}
                  className="bg-white text-black rounded-full p-3 hover:scale-110 transition"
                >
                  <FaPlay size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Music Player */}
      {currentTrack && (
        <MusicPlayer
          track={currentTrack}
          onClose={() => setCurrentTrack(null)}
        />
      )}
    </section>
  );
}

export default Music;
