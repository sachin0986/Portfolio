import React, { useState, useEffect } from "react";
import { CLOUDINARY } from "../Utils/Database";
import { IEEE_LINK, CERTIFICATE_LINK, COLLEGE_VIEW } from "../Utils/Constants";


const Publications = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Cycle through images
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveImage((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    
    return () => clearInterval(intervalId);
  }, []);

  // Placeholder image URLs - replace with your actual images
  const images = [
    CLOUDINARY + `v1739946540/R1_zxnl0a.png`,
    CLOUDINARY + `v1739946538/R2_kgx2d6.png`
  ];

  return (
    <div className="p-6 bg-black min-h-screen">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl sm:text-6xl font-bold bg-white bg-clip-text text-transparent animate-gradient m-6">
        Decoding Customer Sentiment
          <br />
          <span className="text-3xl sm:text-5xl font-semibold">
          My research unveils cutting-edge techniques for analyzing Amazon product reviews
          </span>
        </h1>
      </div>

      {/* Download Button */}
      <div className="flex justify-center pt-4 pb-8">
        <a
          href="src/assets/RESEARCH_PAPER_870.docx"
          download
          className="px-6 py-3 backdrop-blur-lg rounded-3xl bg-white/10 border hover:bg-white/20 border-white/20 transition-colors text-lg"
        >
          <span className="text-blue-500">Download Research Paper</span>
        </a>
      </div>

      {/* Two-column layout for experience and resume image */}
      <div className="flex flex-col lg:flex-row gap-8 mt-6 max-w-6xl mx-auto">
        {/* Left column: Experience details */}
        <div className="w-full lg:w-1/2 text-white space-y-6">
          <div className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold text-blue-400">Research Assistant</h2>
                <h3 className="text-xl text-gray-300">Vellore Institute of Technology</h3>
                <p className="text-gray-400 text-sm">May 2024 – Jun 2024 | Bhopal, MP</p>
              </div>
              <a
                target="_blank"
                href={CERTIFICATE_LINK}
                className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/40 text-blue-400 rounded-lg transition-colors text-sm border border-blue-500/30"
              >
                Certificate
              </a>
            </div>
            
            <ul className="space-y-3 list-disc pl-5 text-gray-300">
              <li>Led research on stack ensembling for sentiment analysis of Amazon product reviews, resulting in publication in the IEEE Digital Library.</li>
              <li>Designed experiments and preprocessed data from Kaggle using text cleaning, tokenization, and lemmatization.</li>
              <li>Developed a novel stack ensemble model combining decision trees, random forests, and SVMs, enhancing accuracy.</li>
              <li>Presented findings at IEEE 2024 Conference.</li>
            </ul>
            
            <div className="mt-6 flex gap-4">
              <a 
                target="_blank"
                href={IEEE_LINK}
                className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                View IEEE Publication
              </a>
              <a 
                target="_blank"
                href={COLLEGE_VIEW}
                className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                College View
              </a>
            </div>
          </div>
          
          <div className="text-gray-300 backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-blue-400 mb-3">About This Project</h3>
            <p className="mb-3">
              This research project focused on improving sentiment analysis accuracy for e-commerce product reviews. 
              By implementing an ensemble approach that combined multiple machine learning algorithms, we achieved 
              a 12% increase in classification accuracy compared to single-model approaches.
            </p>
            <p>
              The work demonstrates how combining different algorithmic strengths can overcome individual 
              model limitations, particularly when dealing with the nuanced language patterns found in customer reviews.
            </p>
          </div>
        </div>

        {/* Right column: Resume images with animation - Center aligned */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          {/* Shimmer Effect (Visible while Loading) */}
          {isLoading && (
            <div className="w-full max-w-md h-[600px] bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 animate-shimmer rounded-lg"></div>
          )}

          {/* Animated Publication Images Container - Center aligned */}
          {!isLoading && (
            <div className="relative w-full h-[600px] overflow-hidden rounded-3xl mx-auto bg-white">
              {/* Image Navigation Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      activeImage === index ? 'bg-blue-500' : 'bg-white/40'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>

              {/* First Image */}
              <div
                className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
                  activeImage === 0 ? 'translate-x-0' : '-translate-x-full'
                }`}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {/* Image with object-cover to ensure proper fitting */}
                <img
                  src={images[0]}
                  alt="Publication Preview 1"
                  className="w-full h-full object-fill rounded-3xl shadow-lg"
                />
                
                {/* Overlay gradient for better visibility */}
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  {/* Centered View Publication Button */}
                  <a
                    href={IEEE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition-all transform hover:scale-105 flex items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View Publication
                  </a>
                </div>
              </div>

              {/* Second Image */}
              <div
                className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
                  activeImage === 1 ? 'translate-x-0' : 'translate-x-full'
                }`}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {/* Image with object-cover to ensure proper fitting */}
                <img
                  src={images[1]}
                  alt="Publication Preview 2"
                  className="w-full h-full object-fill rounded-3xl shadow-lg"
                />
                
                {/* Overlay gradient for better visibility */}
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  {/* Centered View Publication Button */}
                  <a
                    target="_blank"
                    href={IEEE_LINK}
                    className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition-all transform hover:scale-105 flex items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View Presentation
                  </a>
                </div>
              </div>

              {/* Animation Overlay - modified to not interfere with button visibility */}
              <div 
                className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transition-opacity duration-300 animate-shimmer rounded-lg pointer-events-none ${
                  isHovering ? 'opacity-100' : 'opacity-0'
                }`}
              ></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Publications;