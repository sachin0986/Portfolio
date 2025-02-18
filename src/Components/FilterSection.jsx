import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Assignment, personalProjects, realWorld } from "../Utils/Database";
import { FaGithub } from "react-icons/fa6";
import { GrDeploy } from "react-icons/gr";

const style = {
  filterButton: `px-5 py-2 rounded-3xl shadow-lg text-white font-semibold transition-all duration-300 backdrop-blur-lg bg-white/10 border border-white/20 hover:bg-white/20`,
  buttons: `bg-blue-300 text-black font-semibold py-2 px-4 rounded-3xl shadow-md hover:bg-blue-400 transition-all duration-300`,
  iconButton: `flex items-center justify-center w-10 h-10 rounded-lg shadow-md transition-all duration-300 transform hover:scale-120`,
};

const shimmerEffect = {
  initial: { opacity: 0.3 },
  animate: { opacity: [0.3, 0.6, 0.9, 1], transition: { duration: 1, repeat: Infinity } },
};

const FilterSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Personal Projects");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700); // Simulates a loading delay
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const getCategoryData = () => {
    if (selectedCategory === "Assignments") return Assignment;
    if (selectedCategory === "Personal Projects") return personalProjects;
    if (selectedCategory === "Real World") return realWorld;
    return [];
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* Filter Buttons */}
      <div className="w-full flex justify-evenly py-6">
        {["Assignments", "Personal Projects", "Real World"].map((category) => (
          <button
            key={category}
            className={`${style.filterButton} ${
              selectedCategory === category ? "bg-amber-600" : "bg-amber-500"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Cards Section with Smooth Transition */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-4">
        <AnimatePresence mode="wait">
          {loading
            ? Array(6)
                .fill(0)
                .map((_, id) => (
                  <motion.div
                    key={id}
                    className="bg-gray-800 p-6 rounded-xl shadow-lg w-100 flex flex-col items-center"
                    {...shimmerEffect}
                  >
                    <div className="w-full h-40 bg-gray-700 rounded-lg animate-pulse"></div>
                    <div className="w-3/4 h-6 bg-gray-600 rounded-md mt-4 animate-pulse"></div>
                    <div className="w-2/3 h-4 bg-gray-600 rounded-md mt-2 animate-pulse"></div>
                    <div className="w-full h-8 bg-gray-700 rounded-md mt-4 animate-pulse"></div>
                  </motion.div>
                ))
            : getCategoryData().map((item, id) => (
                <motion.div
                  key={id}
                  className="bg-black p-6 rounded-xl shadow-lg w-100 flex flex-col items-center transform transition-all duration-300 hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-gray-300 text-xl font-semibold mb-3 text-center">{item.title}</h3>
                  <img src={item.image} alt="image_preview" className="w-full h-40 object-cover rounded-lg" />
                  <p className="text-gray-300 text-center m-4">{item.discription}</p>

                  {/* Buttons Row */}
                  <div className="flex justify-between items-center w-full mt-4 space-x-4">
                    <button className={`${style.buttons} flex-1`}>More Info</button>

                    {/* GitHub Link */}
                    <a href={item.gitLinl} target="_blank" rel="noopener noreferrer" className={style.iconButton}>
                      <FaGithub className="text-2xl text-white" />
                    </a>

                    {/* Live Link */}
                    <a href={item.deployedlink} target="_blank" rel="noopener noreferrer" className={style.iconButton}>
                      <GrDeploy className="text-2xl text-red-500" />
                    </a>
                  </div>
                </motion.div>
              ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FilterSection;