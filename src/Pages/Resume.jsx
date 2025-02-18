import React, { useState, useEffect } from "react";

const Resume = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // 2 seconds delay for demonstration
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-6 bg-black min-h-screen">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl sm:text-6xl font-bold bg-white bg-clip-text text-transparent animate-gradient m-6">
          Struggling with Your First Developer Resume?
          <br />
          <span className="text-3xl sm:text-5xl font-semibold">
            I Have the Perfect Fix for it!
          </span>
        </h1>
      </div>

      {/* Download Button */}
      <div className="flex justify-center pt-8">
        <a
          href="src/assets/Sachin_Arora_Resume.pdf" // Replace with the correct path to your resume PDF
          download
          className="px-6 py-3 backdrop-blur-lg rounded-3xl bg-white/10 border hover:bg-white/20 border-white/20 transition-colors text-lg"
        >
          <span className="text-blue-500">Download Resume Template</span>
        </a>
      </div>

      {/* Resume Image with Shimmer Loading Effect */}
      <div className="flex justify-center mt-10 relative">
        {/* Shimmer Effect (Visible while Loading) */}
        {isLoading && (
          <div className="w-full max-w-4xl h-[400px] bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 animate-shimmer rounded-lg"></div>
        )}

        {/* Resume Image (Visible after Loading) */}
        {!isLoading && (
          <div className="relative group">
            {/* Shimmer Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer"></div>

            {/* Resume Image */}
            <img
              src="https://res.cloudinary.com/dm2ek1ift/image/upload/v1739903869/resume_photo_vboidx.png" // Replace with your resume image URL
              alt="Resume"
              className="w-full max-w-4xl rounded-lg shadow-lg group-hover:opacity-80 transition-opacity duration-300"
            />

            {/* View Resume Button (Appears on Hover) */}
            <a
              href="src/assets/Sachin_Arora_Resume.pdf" // Replace with the correct path to your resume PDF
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-500 bg-gray-200 backdrop-blur-lg px-6 py-3 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2"
            >
              View Resume
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resume;