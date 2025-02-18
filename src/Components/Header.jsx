import React from "react";
import { Link } from "react-router-dom";
import { EmailMe } from "./Buttons";

const Header = () => {
  return (
    <header className="bg-black text-gray-400 pt-10 pb-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo / Name */}
        <h1 className="text-2xl font-bold hover:text-white transition duration-300">
          <Link to="/">Sachin Arora</Link>
        </h1>

        {/* Navigation */}
        <nav className="mt-2 md:mt-0">
          <ul className="flex flex-wrap justify-center md:justify-start space-x-6">
            {[
              { name: "Home", path: "/" },
              { name: "Project's Showcase", path: "/projectShowcase" },
              { name: "Portfolio Doc", path: "/portfolioDoc" },
              { name: "About", path: "/about" },
              { name: "Publications", path: "/publications" },
              { name: "Resume", path: "/resume" }
            ].map((item, index) => (
              <li key={index} className="cursor-pointer text-lg hover:text-white transition duration-300">
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Search Bar & Button */}
        <div className="mt-2 md:mt-0 flex items-center space-x-4">
          <EmailMe />
        </div>
      </div>
    </header>
  );
};

export default Header;