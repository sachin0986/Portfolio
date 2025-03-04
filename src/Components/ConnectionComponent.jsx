import React from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaSquareUpwork,
} from "react-icons/fa6";
import { SiBento } from "react-icons/si";
import { HiOutlineExternalLink } from "react-icons/hi";

const LinkData = [
  {
    name: "LinkedIn",
    handle: "sachina0986",
    displayLink: "/sachin/linkedIn",
    link: "https://www.linkedin.com/in/sachin0986/",
    img: "https://res.cloudinary.com/dm2ek1ift/image/upload/v1739895504/me_zgbvni.jpg",
    buttonText: "Connect",
  },
];

const data = [
  {
    name: "Twitter",
    handle: "Sachinarora_01",
    displayLink: "/sachin/twitter",
    link: "https://x.com/Sachinarora_01",
    buttonText: "Connect",
  },
  {
    name: "upwork",
    handle: "Sachin A.",
    displayLink: "/sachin/up-work",
    link: "https://www.upwork.com/freelancers/~019f3b97a43acf7841?mp_source=share",
    buttonText: "Connect",
  },
  {
    name: "Bento",
    handle: "sachinrora",
    link: "https://bento.me/sachinarora",
    displayLink: "/sachin/bento",
    buttonText: "My Bento",
  },
  {
    name: "GitHub",
    handle: "sachin0986",
    link: "https://github.com/sachin0986",
    displayLink: "/sachin/gitHub",
    buttonText: "Follow",
  },
];

const getIconAndColorL = (platformName) => {
  switch (platformName.toLowerCase()) {
    case "linkedin":
      return {
        icon: <FaLinkedin className="text-[#0A66C2]" />,
        bgColor: "bg-[#0A66C2]",
      };
    default:
      return { icon: null, bgColor: "bg-blue-600" };
  }
};

const getIconAndColor = (platformName) => {
  switch (platformName.toLowerCase()) {
    case "twitter":
      return {
        icon: <FaTwitter className="text-[#1DA1F2]" />,
        bgColor: "bg-[#1DA1F2]",
      };
    case "upwork":
      return {
        icon: <FaSquareUpwork className="text-black" />,
        bgColor: "bg-[#355e3b]",
      };
    case "bento":
      return {
        icon: <SiBento className="text-[#666666]" />,
        bgColor: "bg-[#666666]",
      };
    case "github":
      return {
        icon: <FaGithub className="text-[#24292e]" />,
        bgColor: "bg-[#24292e]",
      };
    default:
      return { icon: null, bgColor: "bg-blue-600" };
  }
};

const LinkedInCard = ({ name, handle, displayLink, img, link, buttonText }) => {
  const { icon, bgColor } = getIconAndColorL(name);

  return (
    <div className="w-full max-w-[500px] p-4 bg-white border border-gray-200 rounded-2xl shadow transition-all duration-300 hover:shadow-lg">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl sm:text-3xl">{icon}</span>
          <h5 className="text-lg sm:text-xl font-bold text-black">{name}</h5>
        </div>

        <div className="relative w-full aspect-video rounded-xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={img}
            alt="LinkedIn Profile"
            loading="lazy"
          />
        </div>

        <div className="space-y-1">
          {handle && (
            <p className="text-sm sm:text-base text-gray-600">@{handle}</p>
          )}
          {displayLink && link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base font-medium text-gray-800 hover:underline cursor-pointer hover:text-[#0A66C2] transition-colors duration-300"
            >
              {displayLink}
            </a>
          )}
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full"
        >
          <button
            className={`w-full inline-flex items-center justify-between px-4 py-2.5 text-sm sm:text-base font-medium text-white ${bgColor} rounded-lg hover:opacity-90 focus:ring-4 focus:ring-blue-300 focus:outline-none transition-all duration-300 hover:scale-[1.02]`}
          >
            {buttonText || "Connect"}
            <HiOutlineExternalLink className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </button>
        </a>
      </div>
    </div>
  );
};

const ConnectionCard = ({ name, handle, displayLink, link, buttonText }) => {
  const { icon, bgColor } = getIconAndColor(name);

  return (
    <div className="w-full bg-white border border-gray-200 rounded-3xl shadow p-4 sm:p-6">
      <div className="space-y-3 sm:space-y-4">
        {/* Mobile View */}
        <div className="flex sm:hidden items-center justify-between">
          <span className="text-2xl">{icon}</span>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button
              className={`px-3 py-2 text-sm font-medium text-white ${bgColor} rounded-lg hover:opacity-90 transition-colors flex items-center justify-center`}
            >
              <HiOutlineExternalLink className="w-4 h-4" />
            </button>
          </a>
        </div>

        {/* Desktop View */}
        <div className="hidden sm:block space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">{icon}</span>
            <h5 className="text-lg font-bold text-black">{name}</h5>
          </div>

          <div className="space-y-1">
            {handle && <p className="text-sm text-gray-600">@{handle}</p>}
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
          </div>

          <a href={link} target="_blank" rel="noopener noreferrer">
            <button
              className={`w-full inline-flex items-center justify-between px-4 py-2 text-sm font-medium text-white ${bgColor} rounded-lg hover:opacity-90 focus:ring-4 focus:ring-blue-300 focus:outline-none transition-colors`}
            >
              {buttonText || "Connect"}
              <HiOutlineExternalLink className="w-4 h-4 ml-2" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export const LinkedIn = () => {
  return (
    <div className="flex justify-center items-center p-2 sm:p-4">
      <div className="w-full max-w-screen-xl">
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
    </div>
  );
};

export const ConnectionComponent = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
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
