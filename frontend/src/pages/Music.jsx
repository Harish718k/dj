import React, { useState, useEffect, useRef } from "react";
import { FaSpotify, FaPlay, FaPause, FaPlus } from "react-icons/fa";
import track1 from "../assets/images/track1.jpg";
import track2 from "../assets/images/track2.jpg";
import track3 from "../assets/images/track3.jpg";
import mix1 from "../assets/musics/kosmo-dj-243665.mp3";
import mix2 from "../assets/musics/the-turntable-299187.mp3";
import mix3 from "../assets/musics/wasting-my-time-156442.mp3";

function Music() {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [analyser, setAnalyser] = useState(null);
  const canvasRef = useRef(null);
  const audioRef = useRef(null);

  const tracks = [
    {
      id: 1,
      title: "Rizzla",
      artist: "The Martinez Brothers, Gordo, Rema",
      img: track1,
      color: "from-red-700 to-black",
      pulse: "shadow-[0_0_25px_#ff004c]",
      audioUrl: mix1,
    },
    {
      id: 2,
      title: "Leaving Earth",
      artist: "KAS:ST, Gordo, Ki Bae",
      img: track2,
      color: "from-blue-700 to-black",
      pulse: "shadow-[0_0_25px_#0084ff]",
      audioUrl: mix2,
    },
    {
      id: 3,
      title: "KTM",
      artist: "Gordo",
      img: track3,
      color: "from-purple-700 to-black",
      pulse: "shadow-[0_0_25px_#b300ff]",
      audioUrl: mix3,
    },
  ];

  // 🎵 Waveform animation
  useEffect(() => {
    if (!analyser || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    let phase = 0;

    const draw = () => {
      requestAnimationFrame(draw);
      analyser.getByteTimeDomainData(dataArray);

      ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(0, "#ff004c");
      gradient.addColorStop(0.5, "#00bfff");
      gradient.addColorStop(1, "#ff00ff");

      ctx.lineWidth = 3;
      ctx.strokeStyle = gradient;
      ctx.beginPath();

      const sliceWidth = canvas.width / bufferLength;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const v = dataArray[i] / 128.0;
        const y =
          (v * canvas.height) / 2 +
          Math.sin(i * 0.05 + phase) * (canvas.height / 30);

        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
        x += sliceWidth;
      }

      ctx.lineTo(canvas.width, canvas.height / 2);
      ctx.stroke();

      phase += 0.03;
    };

    draw();
  }, [analyser]);

  // 🎧 Play logic
  const handlePlay = (track) => {
    if (audioRef.current) audioRef.current.pause();
    const newAudio = new Audio(track.audioUrl);
    audioRef.current = newAudio;
    setCurrentTrack(track);
    setIsPlaying(true);

    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const src = ctx.createMediaElementSource(newAudio);
    const analyserNode = ctx.createAnalyser();
    src.connect(analyserNode);
    analyserNode.connect(ctx.destination);

    setAnalyser(analyserNode);
    newAudio.play();
  };

  const handleStop = () => {
    if (audioRef.current) audioRef.current.pause();
    setIsPlaying(false);
    setCurrentTrack(null);
  };

  return (
    <section className="relative bg-black text-white min-h-screen px-6 py-24 overflow-hidden">
      {/* 🎶 Flowing wave background */}
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
        className="absolute top-0 left-0 w-full h-full opacity-30"
      ></canvas>

      {/* Overlay gradient for smooth blend */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-500 mb-10 border-b border-gray-700 pb-4">
          Latest Tracks
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track) => (
            <div
              key={track.id}
              className={`bg-gradient-to-br ${track.color} rounded-2xl p-6 shadow-2xl backdrop-blur-md hover:scale-[1.03] transition-transform duration-300`}
            >
              <div className="flex justify-between items-start">
                <img
                  src={track.img}
                  alt={track.title}
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <FaSpotify className="text-green-400 opacity-80" size={28} />
              </div>

              <div className="mt-6">
                <h2 className="text-2xl font-bold mb-1">{track.title}</h2>
                <p className="text-gray-300 text-sm mb-2">{track.artist}</p>
                <span className="bg-white/20 text-xs px-2 py-1 rounded">
                  Club Mix
                </span>
              </div>

              <div className="flex justify-between items-center mt-6">
                <a
                  href="#"
                  className="flex items-center space-x-2 hover:text-green-400 transition"
                >
                  <FaPlus size={14} />
                  <span className="text-sm font-medium">Save</span>
                </a>
                <button
                  onClick={() => handlePlay(track)}
                  className="bg-white text-black rounded-full p-3 hover:scale-110 transition"
                >
                  <FaPlay size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🎧 Player Bar */}
      {currentTrack && (
        <div
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] md:w-[70%] rounded-3xl bg-gradient-to-r ${currentTrack.color} backdrop-blur-2xl border border-white/20 p-4 md:p-6 flex items-center justify-between shadow-xl ${isPlaying ? currentTrack.pulse : ""
            }`}
        >
          <div className="flex items-center space-x-4">
            <img
              src={currentTrack.img}
              alt={currentTrack.title}
              className="w-14 h-14 md:w-16 md:h-16 rounded-xl object-cover shadow-lg"
            />
            <div>
              <h3 className="font-semibold text-lg md:text-xl">
                {currentTrack.title}
              </h3>
              <p className="text-gray-200 text-sm">{currentTrack.artist}</p>
            </div>
          </div>
          <button
            onClick={handleStop}
            className="bg-red-600 hover:bg-red-500 text-white px-5 py-2 rounded-full font-semibold transition-all shadow-lg"
          >
            <FaPause className="inline-block mr-2" />
            Stop
          </button>
        </div>
      )}
    </section>
  );
}

export default Music;
