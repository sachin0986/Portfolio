import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CLOUDINARY, imageList } from "../Utils/Database";
import { FaReact, FaNodeJs, FaBootstrap, FaHtml5 } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiPostman, SiBento } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { FaJava } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { FaSquareUpwork } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { VscCode } from "react-icons/vsc";
import { SiVite } from "react-icons/si";
import { RiVercelLine } from "react-icons/ri";
import { SiNetlify } from "react-icons/si";
import { peopleMatterSections } from "../Utils/Database";



const icons = [
  { title: "React.js", icon: <FaReact className="text-blue-400 text-5xl" /> },
    { title: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" /> },
    { title: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 text-5xl" /> },
    { title: "Bootstrap", icon: <FaBootstrap className="text-purple-400 text-5xl" /> },
    { title: "HTML / CSS", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
    { title: "Git", icon: <FaGithub className="text-red-500 text-5xl" /> },
    { title: "Express.js", icon: <SiExpress className="text-gray-400 text-5xl" /> },
    { title: "MongoDB", icon: <SiMongodb className="text-green-400 text-5xl" /> },
    { title: "API & Postman", icon: <SiPostman className="text-orange-400 text-5xl" /> },
    { title: "Bento", icon: <SiBento className="text-gray-300 text-5xl" /> },
    { title: "Java", icon: <FaJava className="text-red-500 text-5xl" /> },
    { title: "JavaScript", icon: <IoLogoJavascript className="text-yellow-500 text-5xl" /> },
    { title: "UP Work", icon: <FaSquareUpwork className="text-green-600 text-5xl" /> },
    { title: "VS Code", icon: <VscVscode className="text-blue-400 text-5xl" /> },
    { title: "GSSoC", icon: <VscCode className="text-orange-500 text-5xl" /> },
    { title: "Vite", icon: <SiVite className="text-purple-500 text-5xl" /> },
    { title: "Vite", icon: <RiVercelLine className="text-white text-5xl" /> },
    { title: "Vite", icon: <SiNetlify className="text-cyan-300 text-5xl" /> },
  ];

export const FooterCarousel = () => {
  return (
    <div className="w-full bg-black overflow-hidden">
      <div className="relative w-full h-[100px]">
        {/* Blurry gradient effect on sides */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[200px] h-full bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-[200px] h-full bg-gradient-to-l from-black to-transparent z-10"></div>
        </div>

        <motion.div
          className="flex space-x-12 w-max"
          animate={{ x: ["0%", "-50%"] }} // Moves left infinitely
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }} // Smooth continuous effect
        >
          {[...icons, ...icons].map((item, index) => (
            <div key={index} className="flex items-center justify-center w-[220px] h-[100px]">
              {item.icon}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};


export const MainCarousel = () => {
  const [dragging, setDragging] = useState(false);

  return (
    <div className="bg-black flex items-center justify-center min-h-screen overflow-hidden">
      <motion.div
        className="carousel h-auto perspective-[600px] -translate-y-[100px] flex space-x-6"
        drag="x"
        dragConstraints={{ left: -1500, right: 150 }}
        onDragStart={() => setDragging(true)}
        onDragEnd={() => setDragging(false)}
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="carousel-item w-[400px] cursor-grab active:cursor-grabbing"
          >
            <img src={src} alt={`Slide ${index + 1}`} className="w-full rounded-lg shadow-lg" />
            <h3 className="bg-white text-black text-2xl font-bold mt-[-5px] px-[10px] py-[5px] text-center">
              Someone Famous {index + 1}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export const AboutCarousel = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

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

  // New settings for text carousel
  const textSliderSettings = {
    infinite: true,
    speed: 1000,           // Transition speed in milliseconds
    autoplay: true,
    autoplaySpeed: 5000,    // Wait time between slides (5 seconds)
    cssEase: "ease-in-out", // Smoother transition between slides
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    pauseOnHover: true,     // Allow pausing on hover
    vertical: false,
    rtl: false,
    fade: true             // Fade transition instead of sliding
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

  return (
    <div className="w-full lg:w-2/4 px-4 lg:px-0">
      <div className="max-w-[1200px] mx-auto">
        {/* Image Slider Section */}
        <div className="mb-8">
          <Slider {...imageSliderSettings}>
            {imageList.map((image, index) => (
              <div key={index} className="px-2 sm:px-4">
                {loading ? (
                  <div className="animate-pulse w-full h-[180px] sm:h-[220px] bg-gray-700 rounded-2xl"></div>
                ) : (
                  <img 
                    src={CLOUDINARY + image} 
                    alt={`VIT ${index}`} 
                    className="rounded-2xl shadow-lg w-full h-[180px] sm:h-[220px] object-cover border border-gray-600" 
                  />
                )}
              </div>
            ))}
          </Slider>
        </div>

        {/* Text Content Carousel */}
        <div className="overflow-hidden">
          <Slider {...textSliderSettings}>
            {textContent.map((content, index) => (
              <div key={index} className="space-y-6 px-4 sm:px-6 lg:px-8">
                <h3 className="text-lg sm:text-xl text-center text-white font-semibold">
                  {content.title.split("!")[0]}
                  <strong className="text-yellow-400">{content.title.includes("!") ? "!" : ""}</strong>
                </h3>
                
                <div className="space-y-4 text-center">
                  {content.highlights.map((highlight, idx) => (
                    <p key={idx} className="text-xs sm:text-sm text-gray-300">
                      {highlight.emoji} <strong className={highlight.color}>{highlight.highlight}</strong> {highlight.text}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};



export const AllPicturesCarousel = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const sliderSettings = {
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

  return (
    <div
      className={`bg-black p-4 rounded-3xl transition-opacity duration-700 ${
        loading ? "animate-pulse bg-gray-800" : "opacity-100"
      }`}
    >
      {loading ? (
        <div className="h-[400px] w-full bg-gray-700 rounded-2xl"></div>
      ) : (
        <Slider {...sliderSettings}>
          {peopleMatterSections.map((section, index) => (
            <div key={index} className="px-4">
              <div className="mb-8 flex flex-col items-center text-center p-6">
                <h2 className="text-4xl font-bold text-blue-400 mb-4">{section.title}</h2>
                <p className="text-white text-lg max-w-2xl">{section.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Large feature image */}
                <div className="lg:col-span-2 h-[400px]">
                  <img
                    src={section.images[0].src}
                    alt={section.images[0].alt}
                    className="w-full h-full object-cover rounded-2xl shadow-2xl"
                  />
                </div>

                {/* Grid of smaller images */}
                <div className="grid grid-cols-2 gap-4">
                  {section.images.slice(1).map((image, imgIndex) => (
                    <div key={imgIndex} className="h-[190px]">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover rounded-xl shadow-xl"
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
  );
};





