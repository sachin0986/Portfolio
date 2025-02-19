import React from "react";
import { ButtonsStyle } from "../Components/Buttons";
import { CLOUDINARY } from "../Utils/Database";
import { Link } from "react-router-dom";

const Unknown = () => {
    return(
       <div className="flex flex-col md:flex-row items-center justify-between gap-18 p-16 pt-30">
         {/* Image Section */}
         <div className="w-200 flex justify-center">
           <img
             src={CLOUDINARY + `/v1739995556/Screenshot_2025-02-20_at_1.35.22_AM_wwztxd.png`}
             alt="currently image"
             className="w-200 rounded-lg shadow-lg"
           />
         </div>
       
         {/* Text and Button Section */}
         <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
           <h1 className="text-3xl font-bold bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 text-transparent">
           GSSoC Contributor - Enhancing Open-Source Projects
           </h1>
           <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
             <span className="text-white font-medium"></span>🐛 Contributed to React.js and MERN stack projects in GSSoC 2024, enhancing functionality, 
             UI/UX, and performance. Collaborated with maintainers, resolved issues, and implemented features to improve project scalability.
           </p>
           <Link to="/caseStudy/GSSoC">
           <button className={`${ButtonsStyle.glocyButtons}`}>
             <span className="text-purple-300 group-hover:text-gray-900 transition-colors duration-300">
               Read Case Study
             </span>
           </button>
           </Link>
         </div>
       </div>
    )
}

export default Unknown;