import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-blue-500/20 via-transparent to-gray-950 opacity-50"></div>

      {/* Animated Warning Icon */}
      <FaExclamationTriangle className="text-red-500 text-7xl animate-bounce" />

      {/* Error Message */}
      <h1 className="text-5xl font-extrabold mt-4 tracking-wide text-gray-200">
        Oops! Page Not Found
      </h1>
      <p className="text-gray-400 mt-2 text-lg max-w-lg text-center">
        Looks like you’re lost in space. The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 transition-all rounded-full text-white text-lg font-semibold shadow-lg transform hover:scale-105 duration-200"
      >
        Take Me Home
      </Link>

      {/* Floating Neon Glows */}
      <div className="absolute w-32 h-32 bg-blue-500 blur-3xl opacity-30 top-1/4 left-1/3 animate-pulse"></div>
      <div className="absolute w-24 h-24 bg-red-500 blur-3xl opacity-30 bottom-1/3 right-1/4 animate-pulse"></div>
    </div>
  );
};

export default Error;