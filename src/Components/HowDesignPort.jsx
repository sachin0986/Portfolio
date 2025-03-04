import React from "react";
import { ButtonsStyle } from "../Components/Buttons";
import { CLOUDINARY } from "../Utils/Database";
import { Link } from "react-router-dom";

const HowDesignPort = () => {
    // Full and truncated descriptions
    const fullDescription = "In designing my portfolio involves a visual representation of my work and accomplishments. My portfolio is visually appealing and easy to navigate, It include examples of my best work, as well as any relevant credentials or certifications.";
    const truncatedDescription = "In designing my portfolio involves a visual representation of my work and accomplishments.";
    
    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 lg:gap-16 p-4 md:p-8 lg:p-16 pt-8 md:pt-16 lg:pt-24">
            {/* Text and Button Section */}
            <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left mb-8 md:mb-0">
                <h1 className="text-2xl md:text-3xl font-bold bg-clip-text bg-gradient-to-r from-[#BFFF00] to-[#00FF7F] text-transparent">
                    How I design & iterate my portfolio
                </h1>
                <p className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed">
                    <span className="text-white font-medium"></span>
                    {/* Show truncated description on mobile/tablet, full on desktop */}
                    <span className="block lg:hidden">{truncatedDescription}</span>
                    <span className="hidden lg:block">{fullDescription}</span>
                </p>
                <div className="flex justify-center md:justify-start mt-6">
                    <Link to="/portfolioDoc" onClick={() => window.scrollTo(0, 0)}>  
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
        </div>
    );
};

export default HowDesignPort;