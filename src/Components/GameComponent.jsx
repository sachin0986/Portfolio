import React from "react";
import { BGMI_LOGO, GOD_OF_WAR_LOGO } from "../Utils/Constants";
import { CLOUDINARY } from "../Utils/Database";

const GameComponent = () => {
  return (
    <div className="flex bg-[#2B0902] w-full min-h-screen">
      {/* Left Section - Text Content */}
      <div className="pl-24 pt-24 text-white w-1/2">
        {/* First Section */}
        <div className="mb-8">
          <h3 className="text-2xl text-gray-400">When I need a break</h3>
          <h1 className="text-5xl font-bold mt-2">
            I pull my controller to slay gods or kick goals
          </h1>
        </div>

        {/* God of War Section */}
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

        {/* BGMI Section */}
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

      {/* Right Section - Image */}
      <div className="w-1/2 flex items-center justify-end">
        <img
        src={CLOUDINARY + `/v1739822077/GOD_1_hzrdqg.png`}
        alt="God of War Character"
        className="object-fill w-[600px] h-[600px]" // Adjust width and height as needed
        />
        </div>
    </div>
  );
};

export default GameComponent;