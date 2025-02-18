import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ContactMe, MailLogo } from "./Buttons";
import { FaSquareUpwork } from "react-icons/fa6";
import { SiBento } from "react-icons/si";

const Footer = () => {
  const Link = "/v1739801151/bg_m7sod6.avif";
  return (
    <footer className="bg-black text-white py-8 px-8">
      {/* Freelance Section with Background Image */}
      <div
        className="relative text-center p-15 mb-8"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dm2ek1ift/image/upload/v1739801151/bg_m7sod6.avif")`, // ✅ External image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "35px",
          padding: "100px",
          margin: "60px"
        }}
      >
        <div className="bg-opacity-50 p-6">
          <h1 className="text-4xl p-4 font-bold">Ready to Transform Your Workflow?</h1>
          <h3 className="text-gray-300 text-xl mt-2">
            I am available for freelance projects, remote work, or just discussing design.
            Feel free to ping me at
          </h3>
          <div className="pt-6">
          <MailLogo />
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container pt-10 pb-5 mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Side - Name */}
        <h2 className="text-2xl font-bold">Sachin Arora</h2>

        {/* Center - Social Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://github.com/sachin0986" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/sachin0986" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <FaLinkedin size={24} />
          </a>
          <a href="https://bento.me/sachin0986" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <SiBento size={24} />
          </a>
          <a href="mailto:sachin.arora@example.com" className="text-gray-400 hover:text-white transition">
            <FaEnvelope size={24} />
          </a>
          <a href="https://bento.me/sachin0986" className="text-gray-400 hover:text-white transition">
            <FaSquareUpwork size={24} />
          </a>
        </div>

        {/* Right Side - Buttons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <ContactMe />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-400 mt-4 text-sm">
        © {new Date().getFullYear()} Sachin Arora. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;