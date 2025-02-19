import React from "react";
import { ContactMe } from "../Components/Buttons";
import { CLOUDINARY } from "../Utils/Database";
import Currently from "./Currently";
import HowDesignPort from "./HowDesignPort";
import Unknown from "./Unknown";

const AboutComponent = () => {
  return (
    <div className="bg-black p-6 text-center">
      <div className="flex flex-col items-center p-4">
            <h1 className="text-transparent bg-gradient-to-r from-[#927fe4] to-[#fdbe72] bg-clip-text font-bold text-8xl pt-15">Hi, There 👋🏻</h1>
        <h1 className="text-transparent bg-gradient-to-r from-[#927fe4] to-[#fdbe72] bg-clip-text font-bold text-8xl pb-2">I'm Sachin Arora</h1>
        </div>
        <div className="w-full p-6 flex justify-center items-center">
            <h3 className="text-white text-2xl text-center max-w-xl">
            Full-Stack Development | Open-Source Contribution | MERN | React.js | Javascript | Web Development | RestFulAPI's ⚡️
            </h3>
        </div>
        <div className="p-6 flex justify-center">
           <ContactMe />
          </div>
        {/* <div className="flex justify-center items-center p-4 mt-6">
          <img
          src={CLOUDINARY + `/v1739824467/Screenshot_2024-10-22_at_4.18.54_PM_flpxvn.png`}
          alt="logo"
          className="h-full w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div> */}


          <Currently />
          <HowDesignPort />
          <Unknown />
    </div>
  );
};

export default AboutComponent;



       