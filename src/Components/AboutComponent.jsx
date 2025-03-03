import React from "react";
import { ContactMe } from "../Components/Buttons";
import { CLOUDINARY } from "../Utils/Database";
import { motion } from "framer-motion";
import { ButtonsStyle } from "../Components/Buttons";
import { Link } from "react-router-dom";

const AboutComponent = () => {
  const fullDescription = "In designing my portfolio involves a visual representation of my work and accomplishments. My portfolio is visually appealing and easy to navigate, It include examples of my best work, as well as any relevant credentials or certifications.";
  const truncatedDescription = "In designing my portfolio involves a visual representation of my work and accomplishments.";

  const fullDescriptionU = "🐛 Contributed to React.js and MERN stack projects in GSSoC 2024, enhancing functionality, UI/UX, and performance. Collaborated with maintainers, resolved issues, and implemented features to improve project scalability.";
  const truncatedDescriptionU = "🐛 Contributed to React.js and MERN stack projects in GSSoC 2024, enhancing functionality and UI/UX.";

  return (
    <div className="bg-black min-h-screen p-4 sm:p-6 text-center">
      {/* Header Section */}
      <div className="flex flex-col items-center p-2 sm:p-4 mt-8 sm:mt-12 md:mt-16 overflow-hidden">
        {/* First heading slides in from left */}
        <motion.h1 
          className="text-transparent bg-gradient-to-r from-[#927fe4] to-[#fdbe72] bg-clip-text font-bold text-4xl sm:text-5xl md:text-6xl lg:text-8xl pt-4 sm:pt-8 w-full text-center"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 50,
            damping: 20,
            duration: 1.5,
            ease: "easeInOut"
          }}
        >
          Hi, There 👋🏻
        </motion.h1>
        
        {/* Second heading slides in from right */}
        <motion.h1 
          className="text-transparent bg-gradient-to-r from-[#927fe4] to-[#fdbe72] bg-clip-text font-bold text-4xl sm:text-5xl md:text-6xl lg:text-8xl pb-2 mt-2 w-full text-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 50,
            damping: 20,
            duration: 1.5,
            delay: 0.3,
            ease: "easeInOut"
          }}
        >
          I'm Sachin Arora
        </motion.h1>
      </div>

      {/* Skills Section */}
      <motion.div 
        className="w-full p-2 sm:p-4 md:p-6 flex justify-center items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 0.8 
        }}
      >
        <h3 className="text-white text-lg sm:text-xl md:text-2xl text-center max-w-xs sm:max-w-md md:max-w-xl leading-relaxed">
          Full-Stack Development | Open-Source Contribution | MERN | React.js | Javascript | Web Development | RestFulAPI's ⚡️
        </h3>
      </motion.div>

      {/* Contact Button */}
      <motion.div 
        className="p-4 flex justify-center mb-8 sm:mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 1.2 
        }}
      >
        <ContactMe />
      </motion.div>

      {/* Portfolio Component Sections */}
      <div className="space-y-12 sm:space-y-16 md:space-y-24 mt-8 sm:mt-12 md:mt-16">
        {/* Currently Component - Slides in from Left */}
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-10 md:gap-16 p-6 sm:p-10 md:p-16 pt-10 sm:pt-16 md:pt-24"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 20,
            duration: 0.8
          }}
        >
          {/* Image Section - Full width on mobile, half width on md screens and up */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={CLOUDINARY + `/v1739975135/currently_1_ntqssi.png`}
              alt="currently image"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        
          {/* Text and Button Section - Full width on mobile, half width on md screens and up */}
          <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold bg-clip-text bg-gradient-to-r from-blue-300 to-blue-400 text-transparent">
              Currently focusing on!
            </h1>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
              <span className="text-white font-medium"></span>
              <span className="block lg:hidden">{truncatedDescription}</span>
              <span className="hidden lg:block">{fullDescription}</span>
            </p>
            <div className="pt-2">
              <Link to="/caseStudy/RepsandRecipies">
                <button className={`${ButtonsStyle.glocyButtons} mx-auto md:mx-0`}>
                  <span className="text-blue-400 group-hover:text-gray-900 transition-colors duration-300">
                    Read Case Study
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* How I Design Component - Slides in from Right */}
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 lg:gap-16 p-4 md:p-8 lg:p-16 pt-8 md:pt-16 lg:pt-24"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 20,
            duration: 0.8
          }}
        >
          {/* Text and Button Section */}
          <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-2xl md:text-3xl font-bold bg-clip-text bg-gradient-to-r from-[#BFFF00] to-[#00FF7F] text-transparent">
              How I design & iterate my portfolio
            </h1>
            <p className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed">
              <span className="text-white font-medium"></span>
              <span className="block lg:hidden">{truncatedDescription}</span>
              <span className="hidden lg:block">{fullDescription}</span>
            </p>
            <div className="flex justify-center md:justify-start mt-6">
              <Link to="/portfolioDoc">  
                <button className={`${ButtonsStyle.glocyButtons}`}>
                  <span className="text-[#BFFF00] group-hover:text-gray-900 transition-colors duration-300">
                    Read Case Study
                  </span>
                </button>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={CLOUDINARY + `/v1739959259/extra/alsxqcmwenrzhgzobjbe.png`}
              alt="portfolio design process"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </motion.div>

        {/* Unknown Component - Slides in from Left */}
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 lg:gap-16 p-4 md:p-8 lg:p-16 pt-8 md:pt-16 lg:pt-24"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 20,
            duration: 0.8
          }}
        >
          {/* Image Section - On mobile, this will show below the text */}
          <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1 mt-8 md:mt-0">
            <img
              src={CLOUDINARY + `/v1739995556/Screenshot_2025-02-20_at_1.35.22_AM_wwztxd.png`}
              alt="GSSoC contribution screenshot"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        
          {/* Text and Button Section - On mobile, this will show first */}
          <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left order-1 md:order-2">
            <h1 className="text-xl md:text-3xl font-bold bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 text-transparent">
              GSSoC Contributor - Enhancing Open-Source Projects
            </h1>
            
            <p className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed">
              <span className="text-white font-medium"></span>
              <span className="block lg:hidden">{truncatedDescriptionU}</span>
              <span className="hidden lg:block">{fullDescriptionU}</span>
            </p>
            
            <div className="flex justify-center md:justify-start mt-6">
              <Link to="/caseStudy/GSSoC">
                <button className={`${ButtonsStyle.glocyButtons}`}>
                  <span className="text-purple-300 group-hover:text-gray-900 transition-colors duration-300">
                    Read Case Study
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutComponent;