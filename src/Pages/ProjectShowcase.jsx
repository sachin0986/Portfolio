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
          const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`);
          const data = await response.json();
          console.log(data)
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
    <div className="bg-black min-h-screen text-white p-6">
      <div className="flex justify-evenly space-x-4 mb-6 mt-4">
        {["All", "Deployments"].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2 rounded-full text-lg font-medium transition duration-300 ${
              activeFilter === filter
                ? "bg-white text-black shadow-lg scale-105"
                : "bg-gray-800 text-white hover:bg-gray-700 hover:scale-105"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 m-8 pt-8">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <motion.div
                key={index}
                layout
                className="bg-gray-900 shadow-lg rounded-3xl overflow-hidden animate-pulse"
              >
                <div className="p-4">
                  <div className="h-6 bg-gray-700 rounded w-3/4 mb-3"></div>
                  <div className="h-4 bg-gray-700 rounded w-full mb-3"></div>
                  <div className="h-4 bg-gray-700 rounded w-2/3"></div>
                  <div className="flex items-center gap-4 mt-3">
                    <div className="h-6 w-6 bg-gray-700 rounded-full"></div>
                    <div className="h-4 bg-gray-700 rounded w-1/3"></div>
                  </div>
                </div>
              </motion.div>
            ))
          : repos.length === 0 ? (
            <p className="text-center text-gray-400">No projects found.</p>
          ) : (
            repos.map((repo, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-900 shadow-lg rounded-3xl overflow-hidden transition hover:scale-105 hover:shadow-2xl"
              >
                <div className="p-4">
                  {/* Deployment vs. GitHub Repo */}
                  {activeFilter === "All" ? (
                    <>
                      <h3 className="text-xl font-bold">{repo.name}</h3>
                      <p className="text-gray-400">{repo.description || "No description provided."}</p>
                      <div className="flex items-center gap-4 mt-3">
                        <FaGithub className="text-2xl text-white" />
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 transition"
                        >
                          View on GitHub →
                        </a>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Deployment Data with Small Logo on Left */}
                      <div className="flex items-center space-x-3 mb-2">
                        <img
                          src={repo.logoPng}
                          alt={repo.name}
                          className="w-8 h-8 object-contain rounded-full"
                        />
                        <h3 className="text-xl font-bold">{repo.name}</h3>
                      </div>
                      <img
                        src={repo.imagePng}
                        alt={repo.name}
                        className="w-full h-40 object-cover rounded-md"
                      />
                      <p className="text-gray-400 mt-2">Branch: {repo.branch}</p>
                      <div className="flex items-center gap-4 mt-3">
                        <LuGitBranchPlus className="text-2xl text-green-500" />
                        <a
                          href={repo.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 transition"
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