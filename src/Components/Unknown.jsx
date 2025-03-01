import React from "react";
import { ButtonsStyle } from "../Components/Buttons";
import { CLOUDINARY } from "../Utils/Database";
import { Link } from "react-router-dom";

const GSSoCContributor = () => {
    // Full and truncated descriptions
    const fullDescription = "🐛 Contributed to React.js and MERN stack projects in GSSoC 2024, enhancing functionality, UI/UX, and performance. Collaborated with maintainers, resolved issues, and implemented features to improve project scalability.";
    const truncatedDescription = "🐛 Contributed to React.js and MERN stack projects in GSSoC 2024, enhancing functionality and UI/UX.";
    
    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 lg:gap-16 p-4 md:p-8 lg:p-16 pt-8 md:pt-16 lg:pt-24">
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
                    {/* Show truncated description on mobile/tablet, full on desktop */}
                    <span className="block lg:hidden">{truncatedDescription}</span>
                    <span className="hidden lg:block">{fullDescription}</span>
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
        </div>
    );
};

export default GSSoCContributor;