import React from "react";
import { FaLinkedin } from "react-icons/fa";
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

const getIconAndColor = (platformName) => {
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

const LinkedInCard = ({ name, handle, displayLink, img, link, buttonText }) => {
  const { icon, bgColor } = getIconAndColor(name);

  return (
    <div className="w-full sm:w-96 md:w-[450px] lg:w-[500px] p-4 sm:p-6 bg-white border border-gray-200 rounded-2xl sm:rounded-3xl shadow transition-all duration-300 hover:shadow-lg">
      <div className="space-y-3 sm:space-y-4">
        {/* Header */}
        <div className="flex items-center gap-2">
          <span className="text-xl sm:text-2xl md:text-3xl">{icon}</span>
          <h5 className="text-base sm:text-lg md:text-xl font-bold text-black">
            {name}
          </h5>
        </div>

        {/* Image */}
        <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={img}
            alt="LinkedIn Profile"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="space-y-1 sm:space-y-2">
          {handle && (
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
              @{handle}
            </p>
          )}
          {displayLink && link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm md:text-base font-medium text-gray-800 hover:underline cursor-pointer hover:text-[#0A66C2] transition-colors duration-300"
            >
              {displayLink}
            </a>
          )}
          {displayLink && !link && (
            <p className="text-xs sm:text-sm md:text-base font-medium text-gray-800">
              {displayLink}
            </p>
          )}
        </div>

        {/* Button */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full"
        >
          <button
            className={`w-full inline-flex items-center justify-between px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-medium text-white ${bgColor} rounded-lg hover:opacity-90 focus:ring-4 focus:ring-blue-300 focus:outline-none transition-all duration-300 hover:scale-[1.02]`}
          >
            {buttonText || "Connect"}
            <HiOutlineExternalLink className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </button>
        </a>
      </div>
    </div>
  );
};

const LinkedIn = () => {
  return (
    <div className="flex justify-center items-center p-2 sm:p-4 md:p-6">
      <div className="max-w-screen-xl w-full">
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

export default LinkedIn;
