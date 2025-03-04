import React, { useState, useEffect } from "react";

const Resume = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [atsScore, setAtsScore] = useState(0);
  const targetScore = 85;

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // 0.5 seconds delay for demonstration
    return () => clearTimeout(timer);
  }, []);

  // Animate ATS score from 0 to 80
  useEffect(() => {
    if (!isLoading) {
      const startTime = Date.now();
      const duration = 2000; // 2 seconds animation

      const animateScore = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentScore = Math.floor(progress * targetScore);

        setAtsScore(currentScore);

        if (progress < 1) {
          requestAnimationFrame(animateScore);
        }
      };

      requestAnimationFrame(animateScore);
    }
  }, [isLoading]);

  const calculateStrokeDashoffset = (score) => {
    const circumference = 2 * Math.PI * 85; // 85 is the radius
    return circumference - (score / 100) * circumference;
  };

  return (
    <div className="p-3 sm:p-4 md:p-6 bg-black min-h-screen">
      {/* Heading */}
      <div className="text-center px-2 sm:px-4">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-white bg-clip-text text-transparent animate-gradient my-3 sm:my-4 md:my-6">
          Struggling with Your First Developer Resume?
          <br className="hidden xs:block" />
          <span className="block mt-2 sm:mt-3 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
            I Have the Perfect Fix for it!
          </span>
        </h1>
      </div>

      {/* Download Button */}
      <div className="flex justify-center pt-8">
        <a
          href="src/assets/Sachin_Arora_Resume.pdf" // Replace with the correct path to your resume PDF
          download
          className="px-6 py-3 backdrop-blur-lg rounded-3xl bg-white/10 border hover:bg-white/20 border-white/20 transition-colors text-lg group relative overflow-hidden"
        >
          <span className="relative z-10 text-blue-500 group-hover:text-blue-400 transition-colors">
            Download Resume Template
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-green-500/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
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
              href="https://drive.google.com/file/d/1w3Z9AX0QVeiWTf5TFurNx6FJLfjxCf0b/view?usp=sharing" // Replace with the correct path to your resume PDF
              target="_blank"
              onClick={() => window.scrollTo(0, 0)}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-500 bg-gray-200 backdrop-blur-lg px-6 py-3 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2"
            >
              View Resume
            </a>
          </div>
        )}
      </div>

      {/* ATS Score Section - Now at Bottom */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mt-16 mb-8 border-t border-gray-800 pt-12">
        {/* ATS Score Gauge */}
        <div className="relative flex items-center justify-center">
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            className="transform -rotate-90"
          >
            {/* Background Circle */}
            <circle
              cx="100"
              cy="100"
              r="85"
              fill="none"
              stroke="#333"
              strokeWidth="10"
              className="opacity-30"
            />

            {/* Progress Circle */}
            <circle
              cx="100"
              cy="100"
              r="85"
              fill="none"
              stroke="url(#score-gradient)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={2 * Math.PI * 85}
              strokeDashoffset={calculateStrokeDashoffset(atsScore)}
              className="transition-all duration-300 ease-out"
            />

            {/* Linear Gradient Definition */}
            <defs>
              <linearGradient
                id="score-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
            </defs>
          </svg>

          {/* Score Text */}
          <div className="absolute flex flex-col items-center">
            <span className="text-5xl font-bold text-white">{atsScore}</span>
            <span className="text-sm text-gray-300">ATS SCORE</span>
          </div>
        </div>

        {/* ATS Score Description */}
        <div className="max-w-md text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            ATS-Optimized Template
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            This resume template is designed to score high on Applicant Tracking
            Systems. With a{" "}
            <span className="text-blue-400 font-semibold">95% ATS score</span>,
            your resume will make it past automated filters and into the hands
            of real recruiters. Perfect for developers at all levels!
          </p>

          {/* Features Bullets */}
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center justify-center md:justify-start">
              <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
              <span className="text-gray-300">Clean Layout</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
              <span className="text-gray-300">Proper Formatting</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
              <span className="text-gray-300">Keyword Optimized</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></div>
              <span className="text-gray-300">Recruiter Approved</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
