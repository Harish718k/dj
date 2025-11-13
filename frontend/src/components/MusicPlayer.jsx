import React, { useRef, useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaTimes } from "react-icons/fa";

const MusicPlayer = forwardRef(({ track, onClose }, ref) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.8);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  // Expose audio element to parent (Music)
  useImperativeHandle(ref, () => ({
    getAudioElement: () => audioRef.current,
  }));

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
      const playAudio = async () => {
        try {
          await audio.play();
          setIsPlaying(true);
        } catch {
          setIsPlaying(false);
        }
      };
      playAudio();
      return () => {
        audio.pause();
        setIsPlaying(false);
      };
    }
  }, [track]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const updateProgress = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration);
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
    };
    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", updateProgress);
    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", updateProgress);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) audio.pause();
    else audio.play();
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (audioRef.current) {
      audioRef.current.volume = vol;
      if (vol > 0) setIsMuted(false);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleProgressChange = (e) => {
    const newTime = (parseFloat(e.target.value) / 100) * duration;
    audioRef.current.currentTime = newTime;
    setProgress(e.target.value);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] md:w-[600px] bg-gradient-to-r from-red-800 to-black border border-red-700 shadow-lg rounded-2xl px-5 py-4 flex flex-col gap-3 text-white z-50 backdrop-blur-sm">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img
            src={track?.img}
            alt={track?.title}
            className="w-14 h-14 rounded-lg object-cover shadow-md"
          />
          <div>
            <h3 className="font-bold text-lg">{track?.title}</h3>
            <p className="text-sm text-gray-300">{track?.artist}</p>
          </div>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-red-500 transition">
          <FaTimes size={18} />
        </button>
      </div>

      <div className="flex items-center gap-2 text-xs text-gray-400">
        <span>{formatTime(currentTime)}</span>
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleProgressChange}
          className="flex-1 accent-red-600 h-1 cursor-pointer"
        />
        <span>{formatTime(duration)}</span>
      </div>

      <div className="flex items-center justify-between">
        <button onClick={togglePlay} className="bg-white text-black rounded-full p-3 hover:scale-110 transition">
          {isPlaying ? <FaPause size={16} /> : <FaPlay size={16} />}
        </button>
        <div className="flex items-center gap-3">
          <button onClick={toggleMute} className="text-gray-300 hover:text-red-500 transition">
            {isMuted ? <FaVolumeMute size={18} /> : <FaVolumeUp size={18} />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-20 accent-red-600 cursor-pointer"
          />
        </div>
      </div>

      <audio ref={audioRef} src={track?.audioUrl} />
    </div>
  );
});

export default MusicPlayer;
