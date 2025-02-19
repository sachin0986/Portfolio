import React from "react";
import { ButtonsStyle } from "../Components/Buttons";
import { CLOUDINARY } from "../Utils/Database";
import { Link } from "react-router-dom";

const HowDesignPort = () => {
    return(
       <div className="flex flex-col md:flex-row items-center justify-between gap-18 p-16 pt-30">
         {/* Text and Button Section */}
         <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
           <h1 className="text-3xl font-bold bg-clip-text bg-gradient-to-r from-[#BFFF00] to-[#00FF7F] text-transparent">
           How I design & iterate my portfolio
           </h1>
           <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
             <span className="text-white font-medium"></span> In designing my portfolio involves a visual representation of my work and accomplishments. 
             My portfolio is visually appealing and easy to navigate, It include examples of my best work, as well as any relevant credentials or certifications.
           </p>
           <Link to="/portfolioDoc">  
           <button className={`${ButtonsStyle.glocyButtons}`}>
             <span className="text-[#BFFF00] group-hover:text-gray-900 transition-colors duration-300">
               Read Case Study
             </span>
           </button>
           </Link>
         </div>

         <div className="w-200 flex justify-center">
        <img
        src={CLOUDINARY + `/v1739959259/extra/alsxqcmwenrzhgzobjbe.png`}
        alt="currently image"
        className="w-200 rounded-lg shadow-lg"
        />
        </div>
    </div>
    )
}

export default HowDesignPort;
