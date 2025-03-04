import React from "react";
import { ButtonsStyle } from "../Components/Buttons";
import { CLOUDINARY } from "../Utils/Database";
import { Link } from "react-router-dom";

const Currently = () => {
  // Full and truncated descriptions
  const fullDescription =
    "🥗 Reps & Recipes is a MERN-based food ordering web application, offering a wide range of healthy, high-protein meal options tailored to individual diet plans.";
  const truncatedDescription =
    "🥗 Reps & Recipes is a MERN-based food ordering web application.";

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-10 md:gap-16 p-6 sm:p-10 md:p-16 pt-10 sm:pt-16 md:pt-24">
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
          {/* Use lg breakpoint to ensure iPad Mini also shows truncated version */}
          <span className="block lg:hidden">{truncatedDescription}</span>
          <span className="hidden lg:block">{fullDescription}</span>
        </p>
        <div className="pt-2">
          <Link
            to="/caseStudy/RepsandRecipies"
            onClick={() => window.scrollTo(0, 0)}
          >
            <button className={`${ButtonsStyle.glocyButtons} mx-auto md:mx-0`}>
              <span className="text-blue-400 group-hover:text-gray-900 transition-colors duration-300">
                Read Case Study
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Currently;
