import React, { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { VIDEO } from "../Utils/Constants";

const AboutVideo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoadedData = () => {
      setIsLoading(false);
    };

    if (videoRef.current) {
      videoRef.current.addEventListener("loadeddata", handleLoadedData);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("loadeddata", handleLoadedData);
      }
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div
      className="relative lg:w-2/4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-lg"></div>
      )}
      <video
        ref={videoRef}
        src={VIDEO}
        className="w-full h-160 rounded-lg shadow-xl border-4 border-gray-400 object-cover"
        onEnded={handleVideoEnd}
      />
      {isHovered && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg"
        >
          {isPlaying ? (
            <FaPause className="text-white text-5xl hover:scale-110 transition-transform duration-300" />
          ) : (
            <FaPlay className="text-white text-5xl hover:scale-110 transition-transform duration-300" />
          )}
        </button>
      )}
    </div>
  );
};


export default AboutVideo;