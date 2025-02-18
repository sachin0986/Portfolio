import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { SiBento } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { FaSquareUpwork } from "react-icons/fa6";

const data = [
  {
    name: "Twitter",
    handle: "Sachinarora_01",
    displayLink: "/sachin/twitter",
    link: "https://x.com/Sachinarora_01",
    buttonText: "Connect"
  },
  {
    name: "upwork",
    handle: "Sachin A.",
    displayLink: "/sachin/up-work",
    link: "https://www.upwork.com/freelancers/~019f3b97a43acf7841?mp_source=share",
    buttonText: "Connect"
  },
  {
    name: "Bento",
    handle: "sachinrora",
    link: "https://bento.me/sachinarora",
    displayLink: "/sachin/bento",
    buttonText: "My Bento"
  },
  {
    name: "GitHub",
    handle: "sachin0986",
    link: "https://github.com/sachin0986",
    displayLink: "/sachin/gitHub",
    buttonText: "Follow"
  }
];

const getIconAndColor = (platformName) => {
  switch (platformName.toLowerCase()) {
    case 'twitter':
      return { icon: <FaTwitter className="text-[#1DA1F2]" />, bgColor: 'bg-[#1DA1F2]' };
    case 'upwork':
      return { icon: <FaSquareUpwork className="text-black" />, bgColor: 'bg-[#355e3b]' };
    case 'bento':
      return { icon: <SiBento className="text-[#666666]" />, bgColor: 'bg-[#666666]' };
    case 'github':
      return { icon: <FaGithub className="text-[#24292e]" />, bgColor: 'bg-[#24292e]' };
    default:
      return { icon: null, bgColor: 'bg-blue-600' };
  }
};

const ConnectionCard = ({ name, handle, displayLink, link, buttonText }) => {
  const { icon, bgColor } = getIconAndColor(name);

  return (
    <div className="w-60 p-6 bg-white border border-gray-200 rounded-3xl shadow">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center gap-2">
          <span className="text-xl">{icon}</span>
          <h5 className="text-lg font-bold text-black">{name}</h5>
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
        <a href={link} target='_blank'>
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
        </a>
      </div>
    </div>
  );
};

const ConnectionComponent = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
      {data.map((item, index) => (
        <ConnectionCard 
          key={index}
          name={item.name}
          handle={item.handle}
          displayLink={item.displayLink}
          link={item.link}
          buttonText={item.buttonText}
        />
      ))}
    </div>
  );
};

export default ConnectionComponent;