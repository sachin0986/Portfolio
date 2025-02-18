import React from "react"
import { FaLinkedin } from "react-icons/fa";

const LinkData = [
    {
      name: "LinkedIn",
      handle: "sachina0986",
      displayLink: "/sachin/linkedIn",
      link: "https://www.linkedin.com/in/sachin0986/",
      img: "https://res.cloudinary.com/dm2ek1ift/image/upload/v1739895504/me_zgbvni.jpg",
      buttonText: "Connect"
    }
  ];

  const getIconAndColor = (platformName) => {
    switch (platformName.toLowerCase()) {
      case 'linkedin':
        return { icon: <FaLinkedin className="text-[#0A66C2]" />, bgColor: 'bg-[#0A66C2]' };
      default:
        return { icon: null, bgColor: 'bg-blue-600' };
    }
  };
  

  const LinkedInCard = ({ name, handle, displayLink, img, link, buttonText }) => {
    const { icon, bgColor } = getIconAndColor(name);
  
    return (
      <div className="w-100 p-6 bg-white border border-gray-200 rounded-3xl shadow">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-center gap-2">
            <span className="text-xl">{icon}</span>
            <h5 className="text-lg font-bold text-black">{name}</h5>
          </div>
          {/* Image */}
          <div className="flex items-center gap-2">
            <img className="rounded-2xl object-contain" src={img} alt="image" />
          </div>
          {/* Content */}
          <div className="space-y-1">
            {handle && (
              <p className="text-sm text-gray-600">@{handle}</p>
            )}
            {displayLink && link && (
              <a 
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-800 hover:underline cursor-pointer"
              >
                {displayLink}
              </a>
            )}
            {displayLink && !link && (
              <p className="text-sm font-medium text-gray-800">{displayLink}</p>
            )}
          </div>
          
          {/* Button */}
          <button className={`w-full inline-flex items-center justify-between px-4 py-2 text-sm font-medium text-white ${bgColor} rounded-lg hover:opacity-90 focus:ring-4 focus:ring-blue-300 focus:outline-none transition-colors`}>
            {buttonText || 'Connect'}
            <svg 
              className="w-3.5 h-3.5 ml-2" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 14 10"
            >
              <path 
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  };
  
  const LinkedIn = () => {
    return (
      <div className="flex flex-wrap gap-4 p-4">
        {LinkData.map((item, index) => (
          <LinkedInCard 
            key={index}
            name={item.name}
            img={item.img}
            handle={item.handle}
            displayLink={item.displayLink}
            link={item.link}
            buttonText={item.buttonText}
          />
        ))}
      </div>
    );
  };
  


  export default LinkedIn;
  