import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EmailMe } from "./Buttons";
import { FaBars, FaTimes } from "react-icons/fa";

const headerStyle = {
  mainDiv: `bg-black text-gray-400 py-4 shadow-md`,
  logoDiv: `w-full md:w-auto flex justify-between items-center`,
  nameStyle: `text-2xl font-bold hover:text-white transition duration-300`,
  mobilemenu: `md:hidden text-gray-400 hover:text-white focus:outline-none`,
}

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={headerStyle.mainDiv}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo / Name and Mobile Menu Toggle */}
        <div className={headerStyle.logoDiv}>
          <h1 className={headerStyle.nameStyle}>
            <Link to="/">Sachin Arora</Link>
          </h1>

          {/* Mobile Menu Toggle Button */}
          <button
            className={headerStyle.mobilemenu}
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation */}
        <nav
          className={`${isMobileMenuOpen ? "block" : "hidden"} md:block mt-4 md:mt-0 w-full md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-2 lg:space-x-6 space-y-4 md:space-y-0">
            {[
              { name: "Home", path: "/" },
              { name: "Projects", path: "/projectShowcase" },
              { name: "Portfolio", path: "/portfolioDoc" },
              { name: "About", path: "/about" },
              { name: "Publications", path: "/publications" },
              { name: "Resume", path: "/resume" },
            ].map((item, index) => (
              <li
                key={index}
                className="cursor-pointer text-base md:text-sm lg:text-lg hover:text-white transition duration-300"
              >
                <Link to={item.path} onClick={() => setIsMobileMenuOpen(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Email Button - Only visible on laptop screens (lg and above) */}
        <div className="hidden lg:flex items-center space-x-4">
          <EmailMe />
        </div>
      </div>
    </header>
  );
};

export default Header;