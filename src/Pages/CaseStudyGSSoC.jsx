import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Icons
import { FaGitAlt, FaGithub, FaCodeBranch } from 'react-icons/fa';

// Git Commands
const gitForkCommand = `# Fork a repository
git clone https://github.com/username/repository.git
cd repository
git remote add upstream https://github.com/original-owner/repository.git`;

const gitCloneCommand = `# Clone your forked repository
git clone https://github.com/your-username/repository.git
cd repository`;

const gitPullRequestCommand = `# Create a new branch
git checkout -b feature-branch

# Make changes and commit
git add .
git commit -m "Your commit message"

# Push changes to your fork
git push origin feature-branch

# Create a Pull Request on GitHub`;

const CaseStudyGSSoC = () => {
  return (
    <div className="mx-auto px-4 py-12 font-sans max-w-7xl">
      <h1 className="text-6xl font-bold text-center mb-16 text-gray-900 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
        My GSSOC Contributions: MERN Stack Project
      </h1>

      {/* GSSOC Logo */}
      <div className="flex justify-center mb-16">
        <img 
          src="https://repository-images.githubusercontent.com/331823142/9764a900-5c8e-11eb-9f94-da2a01385e83" 
          alt="GirlScript Summer of Code Logo" 
          className="w-48 h-auto"
        />
      </div>

      {/* Project Overview */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-8 pb-2 border-b-2 border-gray-200 text-gray-800">
          Project Overview
        </h2>
        <div className="flex flex-col items-center text-center">
          <p className="text-xl text-gray-700 mb-10 max-w-3xl leading-relaxed">
            During GirlScript Summer of Code (GSSOC), I contributed to a MERN stack project focused on building a robust and scalable web application. My contributions included implementing new features, fixing bugs, and improving the overall codebase.
          </p>
          <div className="w-full max-w-4xl">
            <img 
              src="https://res.cloudinary.com/dm2ek1ift/image/upload/v1740000880/popShop_uo4r9c.png"
              alt="MERN Stack Overview" 
              className="w-full h-auto rounded-lg shadow-lg mb-4"
            />
            <p className="text-gray-600 italic">Pop Shop Overview</p>
          </div>
        </div>
      </section>

      {/* My Contributions */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-8 pb-2 border-b-2 border-gray-200 text-gray-800">
          My Contributions
        </h2>
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">What I Did</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-3 text-lg">
              <li>Implemented user authentication using JWT and bcrypt.</li>
              <li>Developed RESTful APIs for CRUD operations.</li>
              <li>Fixed UI bugs and improved responsiveness.</li>
              <li>Optimized database queries for better performance.</li>
              <li>Added documentation for better code understanding.</li>
            </ul>
          </div>
          <div className="my-6 md:my-0">
            <img 
              src="https://pngmaterial.com/dvsxyz02/uploads/mouse-arrow-png.png" 
              alt="Contribution arrow" 
              className="w-36 rotate-90 md:rotate-0"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <img 
              src="https://res.cloudinary.com/dm2ek1ift/image/upload/v1739995556/Screenshot_2025-02-20_at_1.34.18_AM_unvpep.png"
              alt="Contribution Screenshot" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="mt-8 w-full">
              <SyntaxHighlighter language="javascript" style={dracula}>
                {`import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";

const [status, setStatus] = useState('');
const [loading, setLoading] = useState(false);

const PopShopComponent = ({ props }) => {
    return(
    <div>
        // Code
    </div>)
}`}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </section>

      {/* Git Workflow */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-8 pb-2 border-b-2 border-gray-200 text-gray-800">
          Git Workflow for Open Source Contributions
        </h2>
        <div className="space-y-8">
          {/* Step 1: Fork the Repository */}
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
                <FaGitAlt className="text-3xl text-orange-600" /> Step 1: Fork the Repository
              </h3>
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                Fork the repository to your GitHub account to create a copy of the project.
              </p>
              <SyntaxHighlighter language="bash" style={dracula}>
                {gitForkCommand}
              </SyntaxHighlighter>
            </div>
          </div>

          {/* Step 2: Clone the Repository */}
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
                <FaGithub className="text-3xl text-gray-800" /> Step 2: Clone the Repository
              </h3>
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                Clone your forked repository to your local machine to start working on it.
              </p>
              <SyntaxHighlighter language="bash" style={dracula}>
                {gitCloneCommand}
              </SyntaxHighlighter>
            </div>
            <div className="my-6 md:my-0">
              <img 
                src="https://static.vecteezy.com/system/resources/thumbnails/055/143/086/small_2x/hand-drawn-sketch-of-a-black-arrow-curving-to-the-right-symbolizing-direction-and-movement-on-a-transparent-background-png.png" 
                alt="Clone arrow" 
                className="w-26 rotate-90 md:rotate-0"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center">
              <img 
                src="https://res.cloudinary.com/dm2ek1ift/image/upload/v1740001841/clone_repo_uxwyh2.png"
                alt="GitHub Clone Screenshot" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Step 3: Create a Pull Request */}
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
                <FaCodeBranch className="text-3xl text-green-600" /> Step 3: Create a Pull Request
              </h3>
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                Push your changes to your fork and create a Pull Request (PR) to contribute back to the original repository.
              </p>
              <SyntaxHighlighter language="bash" style={dracula}>
                {gitPullRequestCommand}
              </SyntaxHighlighter>
            </div>
            <div className="my-6 md:my-0">
              <img 
                src="https://static.vecteezy.com/system/resources/thumbnails/055/143/086/small_2x/hand-drawn-sketch-of-a-black-arrow-curving-to-the-right-symbolizing-direction-and-movement-on-a-transparent-background-png.png" 
                alt="PR arrow" 
                className="w-26 rotate-90 md:rotate-0"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center">
              <img 
                src="https://res.cloudinary.com/dm2ek1ift/image/upload/v1740002065/commits_aifgul.png"
                alt="GitHub PR Screenshot" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
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

export default CaseStudyGSSoC;