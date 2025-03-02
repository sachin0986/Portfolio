import React, { useRef, useState, useEffect } from "react";
import { AllPicturesCarousel } from "../Components/Corousal";
import { CLOUDINARY, imageList } from "../Utils/Database";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GiGraduateCap } from "react-icons/gi";
import { FaPlay, FaPause } from "react-icons/fa";
import { VIDEO } from "../Utils/Constants";
import { BGMI_LOGO, GOD_OF_WAR_LOGO } from "../Utils/Constants";
import { peopleMatterSections } from "../Utils/Database";
import { motion } from "framer-motion";
import Slider from "react-slick";

const About = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [loadingAll, setLoadingAll] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Check if the device is mobile or tablet
  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1280);
    };

    checkDeviceType();
    window.addEventListener("resize", checkDeviceType);
    return () => window.removeEventListener("resize", checkDeviceType);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoadingAll(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleLoadedData = () => {
      setIsLoading(false);
    };

    if (videoRef.current) {
      videoRef.current.addEventListener("loadeddata", handleLoadedData);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("loadeddata", handleLoadedData);
      }
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  // Responsive settings for sliders
  const sliderSettings1 = {
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2800,
    fade: true,
    cssEase: "ease-in-out",
    arrows: false,
    dots: true,
  };

  const imageSliderSettings = {
    transition: {
      repeat: Infinity,
      duration: 40,
      ease: "linear"
    },
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    centerMode: true,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 3,
          centerPadding: "10px",
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "5px",
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
          centerMode: false,
        }
      }
    ]
  };

  const textSliderSettings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    vertical: false,
    rtl: false,
    fade: true
  };

  // Text content for the carousel
  const textContent = [
    {
      title: "When I stepped into VIT Bhopal, I thought my days would be filled with just coding, debugging, and caffeine-fueled all-nighters—but turns out, life at VIT wasn't just about coding and research!",
      highlights: [
        {
          emoji: "🎭",
          highlight: "Cultural Fests?",
          color: "text-yellow-400",
          text: "Absolute Madness! From dancing like nobody's watching at Vibrance 💃🕺 to being awestruck by insane musical performances, the fests here are next level. Whether you're a performer, a spectator, or just here for the food stalls (guilty! 🙈), there's something for everyone."
        },
        {
          emoji: "🔥",
          highlight: "Final Words for Future VITians",
          color: "text-red-400",
          text: "If you're planning to join VIT Bhopal, be ready for an adventure—from late-night hackathons to crazy fest nights, from debugging errors to brainstorming world-changing ideas. It's a place where you don't just study; you experience, explore, and evolve."
        }
      ]
    },
    {
      title: "My journey at VIT Bhopal transformed me from a shy coder to a confident tech enthusiast ready to take on the world!",
      highlights: [
        {
          emoji: "🏆",
          highlight: "Hackathon Adventures",
          color: "text-blue-400",
          text: "From staying up for 36 hours straight to celebrating our first-ever hackathon win, these coding marathons taught me more about teamwork and creative problem-solving than any classroom ever could."
        },
        {
          emoji: "🌟",
          highlight: "Research Opportunities",
          color: "text-purple-400",
          text: "Working alongside professors on cutting-edge research projects opened my eyes to how technology can truly make a difference. Publishing my first paper was definitely a career-defining moment!"
        },
        {
          emoji: "👨‍💻",
          highlight: "Internship Experiences",
          color: "text-orange-400",
          text: "Thanks to VIT's industry connections, I landed internships that gave me real-world experience and a taste of what awaits after graduation. The skills I gained were invaluable for building my professional portfolio."
        }
      ]
    },
    {
      title: "VIT Bhopal isn't just an engineering college – it's where friendships are forged and memories are made that last a lifetime!",
      highlights: [
        {
          emoji: "🎮",
          highlight: "Tech Clubs & Communities",
          color: "text-pink-400",
          text: "From the coding club to the robotics team, these student-led communities became my second family. Late-night debugging sessions turned into lifelong friendships and potential startup partnerships."
        },
        {
          emoji: "🚀",
          highlight: "Beyond Academics",
          color: "text-indigo-400",
          text: "VIT Bhopal prepared me not just with technical skills but with leadership abilities, communication expertise, and the confidence to innovate. The holistic development approach here truly sets graduates apart."
        }
      ]
    }
  ];

  // Function to truncate text for mobile/tablet
  const truncateText = (text, length = 100) => {
    return text.length > length ? `${text.substring(0, length)}...` : text;
  };

  return (
    <div className="bg-black text-white space-y-8 md:space-y-12 lg:space-y-16">
      {/* Section 1: Life Beyond Work */}
      <div className="text-center px-4 pt-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FF9900]">Life is just more than work</h1>
      </div>

      {/* Super Goku Section */}
      <div className="bg-[#F2D2BD] p-4 md:p-6 text-white">
        {/* Upper Section - Responsive */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-between md:ml-8 md:mr-8 lg:ml-20 lg:mr-20 mt-4 md:mt-20">
          {/* First Div */}
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl lg:text-3xl pl-2 md:pl-4 text-[#A0522D]">I lift every day</h2>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#4A0404] mt-2 md:mt-4">And I go Super</h1>
          </div>
          
          {/* Second Div */}
          <div className="flex-1 mt-2 md:mt-0">
            <p className="text-lg md:text-xl lg:text-2xl text-center text-[#A0522D]">
              {isMobile || isTablet ? 
                truncateText("Workouts are a part of my routine. They help me stay physically fit.", 50) : 
                "Workouts are a part of my routine. They help me stay physically fit and also keep me sane while trying to develop great products."
              }
            </p>
          </div>
        </div>
  
        {/* Lower Section - Responsive Image */}
        <div className="flex justify-center md:justify-end mt-4 md:mt-[-150px] lg:mt-[-300px]">
          <img
            src={CLOUDINARY + `v1739824465/goku_prev_ui_eca6nm.png`}
            alt="GOKU IMAGE"
            className="w-full max-w-[400px] md:max-w-[600px] lg:max-w-[1200px] h-auto object-contain"
          />
        </div>
      </div>

      {/* VIT Bhopal Journey Section */}
      <div className="space-y-4 md:space-y-8">
        <div className="flex justify-center gap-2 md:gap-4 align-middle px-4">
          <GiGraduateCap size={isMobile ? 36 : isTablet ? 48 : 60} className="text-gray-400"/>
          <h2 className="text-blue-400 text-2xl md:text-3xl lg:text-5xl font-bold text-center bg-clip-text">
            My Journey at VIT Bhopal
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 px-4 md:px-8 lg:px-10 py-6 md:py-12 lg:py-20 items-center"> 
          {/* Video Section - Hide on mobile/tablet */}
          {!isMobile && !isTablet && (
            <div
              className="relative lg:w-2/4"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {isLoading && (
                <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-lg"></div>
              )}
              <video
                ref={videoRef}
                src={VIDEO}
                className="w-full h-160 rounded-lg shadow-xl border-4 border-gray-400 object-cover"
                onEnded={handleVideoEnd}
              />
              {isHovered && (
                <button
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg"
                >
                  {isPlaying ? (
                    <FaPause className="text-white text-5xl hover:scale-110 transition-transform duration-300" />
                  ) : (
                    <FaPlay className="text-white text-5xl hover:scale-110 transition-transform duration-300" />
                  )}
                </button>
              )}
            </div>
          )}

          {/* Image and Text Carousel Section */}
          <div className="w-full lg:w-2/4 px-2 lg:px-0">
            <div className="max-w-[1200px] mx-auto">
              {/* Image Slider Section */}
              <div className="mb-4 md:mb-8">
                <Slider {...imageSliderSettings}>
                  {imageList.map((image, index) => (
                    <div key={index} className="px-1 sm:px-2 md:px-4">
                      {loading ? (
                        <div className="animate-pulse w-full h-[120px] sm:h-[160px] md:h-[220px] bg-gray-700 rounded-2xl"></div>
                      ) : (
                        <img 
                          src={CLOUDINARY + image} 
                          alt={`VIT ${index}`} 
                          className="rounded-2xl shadow-lg w-full h-[120px] sm:h-[160px] md:h-[220px] object-cover border border-gray-600" 
                        />
                      )}
                    </div>
                  ))}
                </Slider>
              </div>

              {/* Text Content Carousel - Abbreviated on mobile/tablet */}
              <div className="overflow-hidden">
                <Slider {...textSliderSettings}>
                  {textContent.map((content, index) => (
                    <div key={index} className="space-y-3 md:space-y-6 px-2 sm:px-4 md:px-6 lg:px-8">
                      <h3 className="text-base md:text-lg lg:text-xl text-center text-white font-semibold">
                        {isMobile || isTablet 
                          ? truncateText(content.title, 80) 
                          : content.title.split("!")[0]}
                        <strong className="text-yellow-400">{content.title.includes("!") ? "!" : ""}</strong>
                      </h3>
                      
                      <div className="space-y-2 md:space-y-4 text-center">
                        {(isMobile || isTablet ? content.highlights.slice(0, 1) : content.highlights).map((highlight, idx) => (
                          <p key={idx} className="text-xs sm:text-sm text-gray-300">
                            {highlight.emoji} <strong className={highlight.color}>{highlight.highlight}</strong>{" "}
                            {isMobile || isTablet ? truncateText(highlight.text, 50) : highlight.text}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gaming Section - Responsive */}
      <div className="flex flex-col lg:flex-row bg-[#2B0902] w-full min-h-0 md:min-h-[60vh] lg:min-h-screen">
        {/* Text Content - Full width on mobile/tablet */}
        <div className="px-4 py-8 md:px-12 md:py-12 lg:pl-24 lg:pt-24 text-white w-full lg:w-1/2">
          {/* First Section */}
          <div className="mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl text-gray-400">When I need a break</h3>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
              I pull my controller to slay gods or kick goals
            </h1>
          </div>
      
          {/* God of War Section */}
          <div className="flex items-center mb-6 md:mb-8 pt-4 md:pt-8">
            <img
              src={GOD_OF_WAR_LOGO}
              alt="God of War"
              className="w-16 h-16 md:w-24 md:h-24 lg:w-35 lg:h-35 object-cover rounded-lg mr-4 md:mr-6"
            />
            <div>
              <h3 className="text-lg md:text-xl lg:text-2xl text-gray-400">All time favourite</h3>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mt-1 md:mt-2">God of War series</h1>
            </div>
          </div>
      
          {/* BGMI Section */}
          <div className="flex items-center pt-2 md:pt-4">
            <img
              src={BGMI_LOGO}
              alt="BGMI"
              className="w-16 h-16 md:w-24 md:h-24 lg:w-35 lg:h-35 object-cover rounded-3xl mr-4 md:mr-6"
            />
            <div>
              <h3 className="text-lg md:text-xl lg:text-2xl text-gray-400">Most hours spent</h3>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mt-1 md:mt-2">BGMI</h1>
            </div>
          </div>
        </div>
      
        {/* Right Section - Image (hidden on mobile/tablet) */}
        {!isMobile && !isTablet && (
          <div className="w-1/2 flex items-center justify-end">
            <img
              src={CLOUDINARY + `/v1739822077/GOD_1_hzrdqg.png`}
              alt="God of War Character"
              className="object-fill w-[500px] h-[500px] lg:w-[600px] lg:h-[600px]"
            />
          </div>
        )}
        
        {/* Main image for mobile/tablet only */}
        {(isMobile || isTablet) && (
          <div className="flex justify-center w-full px-4 py-6">
            <img
              src={CLOUDINARY + `/v1739822077/GOD_1_hzrdqg.png`}
              alt="God of War Character"
              className="object-contain max-h-[400px]"
            />
          </div>
        )}
      </div>

      {/* People Matter Section */}
      <div className="px-4 md:px-8 lg:px-10 pb-8">
        <div
          className={`bg-black p-4 rounded-3xl transition-opacity duration-700 ${
            loadingAll ? "animate-pulse bg-gray-800" : "opacity-100"
          }`}
        >
          {loadingAll ? (
            <div className="h-[250px] md:h-[350px] lg:h-[400px] w-full bg-gray-700 rounded-2xl"></div>
          ) : (
            <Slider {...sliderSettings1}>
              {peopleMatterSections.map((section, index) => (
                <div key={index} className="px-2 md:px-4">
                  <div className="mb-4 md:mb-8 flex flex-col items-center text-center p-3 md:p-6">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-400 mb-2 md:mb-4">
                      {section.title}
                    </h2>
                    <p className="text-white text-sm md:text-base lg:text-lg max-w-2xl">
                      {isMobile || isTablet ? truncateText(section.description, 120) : section.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8">
                    {/* Large feature image */}
                    <div className="lg:col-span-2 h-[200px] md:h-[300px] lg:h-[400px]">
                      <img
                        src={section.images[0].src}
                        alt={section.images[0].alt}
                        className="w-full h-full object-cover rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl"
                      />
                    </div>

                    {/* Grid of smaller images - Show only on larger screens or just 2 on tablet */}
                    <div className="grid grid-cols-2 gap-2 md:gap-4">
                      {section.images.slice(1, isMobile ? 3 : isTablet ? 3 : 5).map((image, imgIndex) => (
                        <div key={imgIndex} className="h-[95px] md:h-[145px] lg:h-[190px]">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover rounded-lg md:rounded-xl shadow-md md:shadow-xl"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;