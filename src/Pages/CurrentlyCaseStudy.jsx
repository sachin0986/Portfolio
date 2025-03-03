import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';


// Icons
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';

// Code Snippets
const authCode = `// JWT Authentication Middleware
const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Access denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ error: 'Invalid token' });
  }
};`;

const expressCode = `// Express Server Setup
const express = require('express');
const app = express();

app.use(express.json());
app.use('/api', require('./routes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));`;

const mongoDBCode = `// MongoDB Schema Example
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});`;

const CurrentlyCaseStudy = () => {
  return (
    <div className="mx-auto px-4 py-12 font-sans max-w-7xl">
      <h1 className="text-5xl font-bold text-center mb-16 text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Reps & Recipes: A Full-Stack Journey
      </h1>

      {/* Tech Stack Icons */}
      <div className="flex justify-center items-center gap-8 mb-16">
        <FaReact className="text-6xl text-blue-500" />
        <FaNodeJs className="text-6xl text-green-600" />
        <SiExpress className="text-6xl text-gray-800" />
        <SiMongodb className="text-6xl text-green-700" />
      </div>

      {/* Project Overview */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-8 pb-2 border-b-2 border-gray-200 text-gray-800">
          Project Overview
        </h2>
        <div className="flex flex-col items-center text-center">
          <p className="text-xl text-gray-700 mb-10 max-w-3xl leading-relaxed">
            Reps & Recipes is a full-stack application that combines fitness tracking with meal planning.
            Built with React.js, Node.js, MongoDB, and Express, it showcases modern web development practices
            and robust architecture.
          </p>
          <div className="w-full max-w-4xl">
            <img 
              src="https://res.cloudinary.com/dm2ek1ift/image/upload/v1739959259/extra/zflvozsibl8vs3p5vzsi.png"
              alt="Reps & Recipes Dashboard" 
              className="w-full h-auto rounded-lg shadow-lg mb-4"
            />
            <p className="text-gray-600 italic">Project Dashboard Overview</p>
          </div>
        </div>
      </section>

      {/* Authentication Challenge */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-8 pb-2 border-b-2 border-gray-200 text-gray-800">
          Authentication Implementation
        </h2>
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">The Challenge</h3>
            <p className="mb-6 text-gray-700 text-lg leading-relaxed">
              Implementing secure user authentication while maintaining a smooth user experience presented
              several key challenges.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-xl mb-4 text-gray-800">Solutions Implemented:</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-3 text-lg">
                <li>JWT-based authentication with secure token storage</li>
                <li>Password hashing using bcrypt</li>
                <li>Protected route middleware in Express</li>
                <li>Refresh token rotation for enhanced security</li>
              </ul>
            </div>
          </div>
          <div className="my-6 md:my-0">
            <img 
              src="https://static.vecteezy.com/system/resources/thumbnails/055/143/086/small_2x/hand-drawn-sketch-of-a-black-arrow-curving-to-the-right-symbolizing-direction-and-movement-on-a-transparent-background-png.png" 
              alt="Migration arrow" 
              className="w-26 rotate-90 md:rotate-0"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <div className="relative w-full max-w-md">
              <img 
                src="https://res.cloudinary.com/dm2ek1ift/image/upload/v1739959258/extra/qjwg7tqx8myx6fdyqnl9.png"
                alt="Authentication Flow" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-gray-100 px-4 py-2 rounded-md text-sm text-gray-600 shadow">
                Auth Flow
              </div>
            </div>
            <div className="mt-8 w-full">
              <SyntaxHighlighter language="javascript" style={dracula}>
                {authCode}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </section>

      {/* Server Architecture */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-8 pb-2 border-b-2 border-gray-200 text-gray-800">
          Server Architecture
        </h2>
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Express Backend Structure</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-3 text-lg">
              <li>MVC architecture for organized code structure</li>
              <li>Middleware for request validation and error handling</li>
              <li>RESTful API endpoints for resource management</li>
              <li>MongoDB integration with Mongoose ODM</li>
            </ul>
          </div>
          <div className="my-6 md:my-0">
            <img 
              src="https://pngmaterial.com/dvsxyz02/uploads/mouse-arrow-png.png" 
              alt="Migration arrow" 
              className="w-36 rotate-90 md:rotate-0"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <img 
              src="https://res.cloudinary.com/dm2ek1ift/image/upload/v1739959259/extra/alsxqcmwenrzhgzobjbe.png"
              alt="Server Architecture Diagram" 
              className="w-full h-auto rounded-lg shadow-md"
            />
            <div className="mt-8 w-full">
              <SyntaxHighlighter language="javascript" style={dracula}>
                {expressCode}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </section>

      {/* Database Design */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-8 pb-2 border-b-2 border-gray-200 text-gray-800">
          MongoDB Database Design
        </h2>
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Data Models</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-3 text-lg">
              <li>User schema with profile information</li>
              <li>Workout sessions with exercise details</li>
              <li>Recipe collection with ingredients and steps</li>
              <li>Progress tracking with timestamps</li>
            </ul>
          </div>
          <div className="my-6 md:my-0">
            <img 
              src="https://static.vecteezy.com/system/resources/thumbnails/055/143/086/small_2x/hand-drawn-sketch-of-a-black-arrow-curving-to-the-right-symbolizing-direction-and-movement-on-a-transparent-background-png.png" 
              alt="Migration arrow" 
              className="w-26 rotate-90 md:rotate-0"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <img 
              src="https://res.cloudinary.com/dm2ek1ift/image/upload/v1739959259/extra/sy3vlen4aw2pbavodcfd.png"
              alt="Database Schema" 
              className="w-full h-auto rounded-lg shadow-md"
            />
            <div className="mt-8 w-full">
              <SyntaxHighlighter language="javascript" style={dracula}>
                {mongoDBCode}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 pt-8 border-t border-gray-200 text-center text-gray-600 text-lg">
        <p>Last updated: February 2025</p>
      </footer>
    </div>
  );
};

export default CurrentlyCaseStudy;