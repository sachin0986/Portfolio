import React from "react";
import { ButtonsStyle } from "../Components/Buttons";
import { CLOUDINARY } from "../Utils/Database";
import { Link } from "react-router-dom";

const Currently = () => {
    return(
       <div className="flex flex-col md:flex-row items-center justify-between gap-18 p-16 pt-30">
         {/* Image Section */}
         <div className="w-200 flex justify-center">
           <img
             src={CLOUDINARY + `/v1739975135/currently_1_ntqssi.png`}
             alt="currently image"
             className="w-200 rounded-lg shadow-lg"
           />
         </div>
       
         {/* Text and Button Section */}
         <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
           <h1 className="text-3xl font-bold bg-clip-text bg-gradient-to-r from-blue-300 to-blue-400 text-transparent">
             Currently focusing on!
           </h1>
           <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
             <span className="text-white font-medium"></span> 🥗 Reps & Recipes is a MERN-based food ordering web application, 
             offering a wide range of healthy, high-protein meal options tailored to individual diet plans.
           </p>
           <Link to="/caseStudy/RepsandRecipies">
           <button className={`${ButtonsStyle.glocyButtons}`}>
             <span className="text-blue-400 group-hover:text-gray-900 transition-colors duration-300">
               Read Case Study
             </span>
           </button>
           </Link>
         </div>
       </div>
    )
}

export default Currently;