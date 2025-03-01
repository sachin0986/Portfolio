import React from "react";
import { ContactMe } from "../Components/Buttons";
import { CLOUDINARY } from "../Utils/Database";
import Currently from "./Currently";
import HowDesignPort from "./HowDesignPort";
import Unknown from "./Unknown";

const AboutComponent = () => {
  return (
    <div className="bg-black min-h-screen p-4 sm:p-6 text-center">
      {/* Header Section */}
      <div className="flex flex-col items-center p-2 sm:p-4 mt-8 sm:mt-12 md:mt-16">
        <h1 className="text-transparent bg-gradient-to-r from-[#927fe4] to-[#fdbe72] bg-clip-text font-bold text-4xl sm:text-5xl md:text-6xl lg:text-8xl pt-4 sm:pt-8">
          Hi, There 👋🏻
        </h1>
        <h1 className="text-transparent bg-gradient-to-r from-[#927fe4] to-[#fdbe72] bg-clip-text font-bold text-4xl sm:text-5xl md:text-6xl lg:text-8xl pb-2 mt-2">
          I'm Sachin Arora
        </h1>
      </div>

      {/* Skills Section */}
      <div className="w-full p-2 sm:p-4 md:p-6 flex justify-center items-center">
        <h3 className="text-white text-lg sm:text-xl md:text-2xl text-center max-w-xs sm:max-w-md md:max-w-xl leading-relaxed">
          Full-Stack Development | Open-Source Contribution | MERN | React.js | Javascript | Web Development | RestFulAPI's ⚡️
        </h3>
      </div>

      {/* Contact Button */}
      <div className="p-4 flex justify-center mb-8 sm:mb-12">
        <ContactMe />
      </div>

      {/* Commented out image section */}
      {/* <div className="flex justify-center items-center p-4 mt-6">
        <img
          src={CLOUDINARY + `/v1739824467/Screenshot_2024-10-22_at_4.18.54_PM_flpxvn.png`}
          alt="logo"
          className="h-full w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div> */}

      {/* Portfolio Component Sections */}
      <div className="space-y-12 sm:space-y-16 md:space-y-24 mt-8 sm:mt-12 md:mt-16">
        <Currently />
        <HowDesignPort />
        <Unknown />
      </div>
    </div>
  );
};

export default AboutComponent;