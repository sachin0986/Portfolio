import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ContactMe, MailLogo } from "./Buttons";
import { FaSquareUpwork } from "react-icons/fa6";
import { SiBento } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      {/* Freelance Section with Background Image */}
      <div
        className="relative text-center p-6 md:p-10 mb-8 rounded-3xl"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dm2ek1ift/image/upload/v1739801151/bg_m7sod6.avif")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-opacity-50 p-6 rounded-3xl">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Workflow?
          </h1>
          <h3 className="text-gray-300 text-lg md:text-xl mb-6">
            I am available for freelance projects, remote work, or just
            discussing design. Feel free to ping me at
          </h3>
          <div className="flex justify-center">
            <MailLogo />
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Left Side - Name */}
        <h2 className="text-2xl font-bold">Sachin Arora</h2>

        {/* Center - Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/sachin0986"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/sachin0986"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://bento.me/sachin0986"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <SiBento size={24} />
          </a>
          <a
            href="mailto:sachin.arora@example.com"
            className="text-gray-400 hover:text-white transition"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://bento.me/sachin0986"
            className="text-gray-400 hover:text-white transition"
          >
            <FaSquareUpwork size={24} />
          </a>
        </div>

        {/* Right Side - Buttons */}
        <div className="flex space-x-4">
          <ContactMe />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-400 mt-8 text-sm">
        © {new Date().getFullYear()} Sachin Arora. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
