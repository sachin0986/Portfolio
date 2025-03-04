import React from "react";
import { BGMI_LOGO, GOD_OF_WAR_LOGO } from "../Utils/Constants";
import { CLOUDINARY } from "../Utils/Database";

const GameComponent = () => {
  return (
    <div className="flex flex-col md:flex-col lg:flex-row bg-[#2B0902] w-full min-h-0 md:min-h-[60vh] lg:min-h-screen">
      {/* Text Content - Better width & centering below 1024px */}
      <div className="px-6 py-8 md:px-12 md:py-12 lg:pl-24 lg:pt-24 text-white w-full md:w-[90%] lg:w-1/2 mx-auto">
        {/* First Section */}
        <div className="mb-8">
          <h3 className="text-lg md:text-xl lg:text-2xl text-gray-400 font-medium">
            When I need a break
          </h3>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-2 leading-tight">
            I pull my controller <br className="hidden md:inline" /> to slay
            gods or kick goals
          </h1>
        </div>

        {/* Favorite Game Section - God of War */}
        <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8">
          <img
            src={GOD_OF_WAR_LOGO}
            alt="God of War"
            className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover rounded-lg"
          />
          <div>
            <h3 className="text-base md:text-lg lg:text-xl text-gray-400">
              All-time favourite
            </h3>
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold mt-1">
              God of War series
            </h1>
          </div>
        </div>

        {/* Most Played Game Section - BGMI */}
        <div className="flex items-center gap-4 md:gap-6">
          <img
            src={BGMI_LOGO}
            alt="BGMI"
            className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover rounded-3xl"
          />
          <div>
            <h3 className="text-base md:text-lg lg:text-xl text-gray-400">
              Most hours spent
            </h3>
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold mt-1">
              BGMI
            </h1>
          </div>
        </div>
      </div>

      {/* Right Section - Show only on large screens (above 1024px) */}
      <div className="hidden md:hidden lg:flex w-1/2 items-center justify-end">
        <img
          src={CLOUDINARY + `/v1739822077/GOD_1_hzrdqg.png`}
          alt="God of War Character"
          className="object-fill w-[500px] h-[500px] lg:w-[600px] lg:h-[600px]"
        />
      </div>
    </div>
  );
};

export default GameComponent;

/*
old code



<div className="flex bg-[#2B0902] w-full min-h-screen">

      <div className="pl-24 pt-24 text-white w-1/2">

        <div className="mb-8">
          <h3 className="text-2xl text-gray-400">When I need a break</h3>
          <h1 className="text-5xl font-bold mt-2">
            I pull my controller to slay gods or kick goals
          </h1>
        </div>


        <div className="flex items-center mb-8 pt-8">
          <img
            src={GOD_OF_WAR_LOGO}
            alt="God of War"
            className="w-35 h-35 object-cover rounded-lg mr-6"
          />
          <div>
            <h3 className="text-2xl text-gray-400">All time favourite</h3>
            <h1 className="text-3xl font-bold mt-2">God of War series</h1>
          </div>
        </div>

        <div className="flex items-center pt-4">
          <img
            src={BGMI_LOGO}
            alt="BGMI"
            className="w-35 h-35 object-cover rounded-3xl mr-6"
          />
          <div>
            <h3 className="text-2xl text-gray-400">Most hours spent</h3>
            <h1 className="text-3xl font-bold mt-2">BGMI</h1>
          </div>
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-end">
        <img
        src={CLOUDINARY + `/v1739822077/GOD_1_hzrdqg.png`}
        alt="God of War Character"
        className="object-fill w-[600px] h-[600px]" // Adjust width and height as needed
        />
        </div>
    </div>
*/
