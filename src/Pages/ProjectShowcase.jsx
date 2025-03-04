import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { LuGitBranchPlus } from "react-icons/lu";
import { Deployments } from "../Utils/Database"; // Import Deployment Data

const GITHUB_USERNAME = "sachin0986"; // Replace with your GitHub username

const ProjectShowcase = () => {
  const [repos, setRepos] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (activeFilter === "All") {
      const fetchRepos = async () => {
        try {
          const response = await fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos`
          );
          const data = await response.json();
          console.log(data);
          setRepos(data);
        } catch (error) {
          console.error("Error fetching GitHub repos:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchRepos();
    } else {
      setTimeout(() => {
        setRepos(Deployments);
        setLoading(false);
      }, 1000); // Simulating load time for deployments
    }
  }, [activeFilter]);

  return (
    <div className="bg-black min-h-screen text-white p-2 sm:p-4 md:p-6">
      {/* Filter buttons - responsive sizing and spacing */}
      <div className="flex justify-evenly sm:justify-evenly space-x-2 sm:space-x-4 mb-4 sm:mb-6 mt-2 sm:mt-4">
        {["All", "Deployments"].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-3 sm:px-4 md:px-6 py-1 sm:py-2 rounded-full text-sm sm:text-base md:text-lg font-medium transition duration-300 ${
              activeFilter === filter
                ? "bg-white text-black shadow-lg scale-105"
                : "bg-gray-800 text-white hover:bg-gray-700 hover:scale-105"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Project grid - responsive grid and spacing */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mx-2 sm:mx-4 md:mx-8 pt-2 sm:pt-4 md:pt-8"
      >
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <motion.div
              key={index}
              layout
              className="bg-gray-900 shadow-lg rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden animate-pulse"
            >
              <div className="p-3 sm:p-4">
                <div className="h-4 sm:h-5 md:h-6 bg-gray-700 rounded w-3/4 mb-2 sm:mb-3"></div>
                <div className="h-3 sm:h-4 bg-gray-700 rounded w-full mb-2 sm:mb-3"></div>
                <div className="h-3 sm:h-4 bg-gray-700 rounded w-2/3"></div>
                <div className="flex items-center gap-2 sm:gap-4 mt-2 sm:mt-3">
                  <div className="h-5 w-5 sm:h-6 sm:w-6 bg-gray-700 rounded-full"></div>
                  <div className="h-3 sm:h-4 bg-gray-700 rounded w-1/3"></div>
                </div>
              </div>
            </motion.div>
          ))
        ) : repos.length === 0 ? (
          <p className="text-center text-gray-400 col-span-full">
            No projects found.
          </p>
        ) : (
          repos.map((repo, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 shadow-lg rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden transition hover:scale-105 hover:shadow-2xl"
            >
              <div className="p-3 sm:p-4">
                {/* Deployment vs. GitHub Repo */}
                {activeFilter === "All" ? (
                  <>
                    <h3 className="text-lg sm:text-xl font-bold truncate">
                      {repo.name}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base line-clamp-2 sm:line-clamp-3 h-10 sm:h-16">
                      {repo.description || "No description provided."}
                    </p>
                    <div className="flex items-center gap-2 sm:gap-4 mt-2 sm:mt-3">
                      <FaGithub className="text-xl sm:text-2xl text-white" />
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base text-blue-400 hover:text-blue-300 transition"
                      >
                        View on GitHub →
                      </a>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Deployment Data with Small Logo on Left */}
                    <div className="flex items-center space-x-2 sm:space-x-3 mb-1 sm:mb-2">
                      <img
                        src={repo.logoPng}
                        alt={repo.name}
                        className="w-6 h-6 sm:w-8 sm:h-8 object-contain rounded-full"
                      />
                      <h3 className="text-lg sm:text-xl font-bold truncate">
                        {repo.name}
                      </h3>
                    </div>
                    <div className="w-full h-28 sm:h-32 md:h-40 overflow-hidden rounded-md">
                      <img
                        src={repo.imagePng}
                        alt={repo.name}
                        className="w-full h-full object-cover transition hover:scale-110"
                      />
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2">
                      Branch: {repo.branch}
                    </p>
                    <div className="flex items-center gap-2 sm:gap-4 mt-2 sm:mt-3">
                      <LuGitBranchPlus className="text-xl sm:text-2xl text-green-500" />
                      <a
                        href={repo.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base text-blue-400 hover:text-blue-300 transition"
                      >
                        Visit Deployment →
                      </a>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ))
        )}
      </motion.div>
    </div>
  );
};

export default ProjectShowcase;
