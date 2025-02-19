import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";


const codeString = `// GitHub API fetch function
const fetchRepositories = async () => {
  try {
    const response = await fetch(
      'https://api.github.com/users/myusername/repos?sort=updated'
    );
    const data = await response.json();
    
    // Filter out forked repositories
    return data.filter(repo => !repo.fork);
  } catch (error) {
    console.error("Error fetching repositories:", error);
    return [];
  }
};`;

const reusableCode = `// Reusable optimized image component
const OptimizedImage = ({ id, alt, width }) => (
  <img
    src={}
    alt={alt}
    loading="lazy"
    className="w-full h-auto rounded"
  />
);`;

const PortfolioDoc = () => {
  return (
    <div className="mx-auto px-4 py-12 font-sans max-w-7xl">
      <h1 className="text-5xl font-bold text-center mb-16 text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Portfolio Development Documentation
      </h1>

      {/* Section 1: Design Evolution */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-8 pb-2 border-b-2 border-gray-200 text-gray-800">
        Redesigning with Purpose: A Design Evolution Story
        </h2>
        <div className="flex flex-col items-center text-center">
          <p className="text-xl text-gray-700 mb-10 max-w-3xl leading-relaxed">
            My portfolio went through several iterations as I refined both the visual design and user experience. 
            The transformation from initial concept to final implementation demonstrates growth in my design skills.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <div className="w-full md:w-2/5">
              <img 
                src="https://res.cloudinary.com/dm2ek1ift/image/upload/v1739959259/extra/zflvozsibl8vs3p5vzsi.png" 
                alt="Initial portfolio design" 
                className="w-full h-auto rounded-lg shadow-md"
              />
              <p className="mt-3 text-gray-600 font-medium text-lg">Initial Design</p>
            </div>
            
            <div className="my-6 md:my-0">
              <img 
                src="https://pngmaterial.com/dvsxyz02/uploads/mouse-arrow-png.png" 
                alt="Evolution arrow" 
                className="w-26 h-26 rotate-90 md:rotate-0"
              />
            </div>
            
            <div className="w-full pt-40 md:w-2/5">
              <img 
                src="https://res.cloudinary.com/dm2ek1ift/image/upload/v1739959259/extra/alsxqcmwenrzhgzobjbe.png" 
                alt="Final portfolio design" 
                className="w-full h-auto rounded-lg shadow-md"
              />
              <p className="mt-3 text-gray-600 font-medium text-lg">Final Design</p>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg max-w-3xl shadow-sm">
            <h3 className="font-semibold text-xl mb-4 text-gray-800">Key Improvements:</h3>
            <ul className="text-left list-disc pl-6 text-gray-700 space-y-3 text-lg">
              <li>Simplified navigation for better user experience</li>
              <li>Implemented a cohesive color scheme based on user feedback</li>
              <li>Enhanced typography hierarchy for better readability</li>
              <li>Added subtle animations to increase engagement</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2: GitHub API Integration */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-8 pb-2 border-b-2 border-gray-200 text-gray-800">
        Supercharged GitHub API: A Modern Approach
        </h2>
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left side - Text */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Integrating GitHub Repositories</h3>
            <p className="mb-6 text-gray-700 text-lg leading-relaxed">
              To showcase my projects dynamically, I implemented a GitHub API integration that automatically displays my latest work.
            </p>
            <div className="mb-8">
              <SyntaxHighlighter language="javascript" style={dracula}>
                {codeString}
              </SyntaxHighlighter>
            </div>
            <p className="mb-6 text-gray-700 text-lg leading-relaxed">
              This approach provides several benefits:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-3 text-lg">
              <li>Automatically updates when I push new projects</li>
              <li>Displays accurate star counts and last update times</li>
              <li>Allows filtering by technology tags extracted from repository topics</li>
              <li>Implements proper error handling and loading states</li>
            </ul>
          </div>
          
          {/* Right side - Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="relative w-full max-w-md">
              <img 
                src="https://res.cloudinary.com/dm2ek1ift/image/upload/v1739959258/extra/qjwg7tqx8myx6fdyqnl9.png" 
                alt="GitHub API integration" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-4 -right-4 bg-gray-100 px-4 py-2 rounded-md text-sm text-gray-600 shadow">
                GitHub API Response
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Cloudinary Integration */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-8 pb-2 border-b-2 border-gray-200 text-gray-800">
        Cloudinary Chronicles: Building Lightning-Fast Image Loads
        </h2>
        <div className="space-y-8">
          <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto mb-10 leading-relaxed">
            To improve performance and maintainability, I integrated Cloudinary for image management and optimization.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
          <div className="w-full md:w-2/5 pt-30">
            <img 
              src="https://res.cloudinary.com/dm2ek1ift/image/upload/v1739959259/extra/ybmjzuohopxd5qkyrvcl.png"
              alt="cloud 1" 
              className="w-full h-auto rounded-lg shadow-md"
            />
            <p className="mt-3 text-center text-gray-600 font-medium text-lg">Dynamic Image Transformations</p>
          </div>
          
          <div className="my-6 md:my-0">
            <img 
              src="https://static.vecteezy.com/system/resources/thumbnails/055/143/086/small_2x/hand-drawn-sketch-of-a-black-arrow-curving-to-the-right-symbolizing-direction-and-movement-on-a-transparent-background-png.png" 
              alt="Migration arrow" 
              className="w-26 rotate-90 md:rotate-0"
            />
          </div>
          
          <div className="w-full md:w-2/5">
            <img  
              src="https://res.cloudinary.com/dm2ek1ift/image/upload/v1739959259/extra/sy3vlen4aw2pbavodcfd.png"
              alt="cloud 2" 
              className="w-full h-auto rounded-lg shadow-md"
            />
            <p className="mt-3 text-center text-gray-600 font-medium text-lg">Cloudinary Asset Management</p>
          </div>
        </div>

          <div className="mt-10 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">Implementation Benefits</h3>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <pre className="text-sm mb-8 overflow-x-auto">
              <SyntaxHighlighter language="javascript" style={dracula}>
                {reusableCode}
              </SyntaxHighlighter>
              </pre>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-xl mb-4 text-gray-800">Performance Improvements</h4>
                  <ul className="list-disc pl-6 text-gray-700 space-y-3 text-lg">
                    <li>53% reduction in image file sizes</li>
                    <li>Automatic WebP format conversion</li>
                    <li>Responsive sizing for different devices</li>
                    <li>Improved Lighthouse performance score</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-4 text-gray-800">Developer Experience</h4>
                  <ul className="list-disc pl-6 text-gray-700 space-y-3 text-lg">
                    <li>Centralized image management</li>
                    <li>Consistent image handling across the site</li>
                    <li>Simplified responsive image implementation</li>
                    <li>Reduced code duplication</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Vercel Deployment */}
      <section>
        <h2 className="text-3xl font-bold mb-8 pb-2 border-b-2 border-gray-200 text-gray-800">
        Why I Switched to Vercel ( And Never Looked Back ) 
        </h2>
        
        {/* Transition Images */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
          <div className="w-full md:w-2/5 pt-30">
            <img 
              src="https://res.cloudinary.com/dm2ek1ift/image/upload/v1739962526/Screenshot_2025-02-19_at_4.24.55_PM_mz2rqf.png" 
              alt="Netlify dashboard" 
              className="w-full h-auto rounded-lg shadow-md"
            />
            <p className="mt-3 text-center text-gray-600 font-medium text-lg">Previous: Netlify Deployment</p>
          </div>
          
          <div className="my-6 md:my-0">
            <img 
              src="https://static.vecteezy.com/system/resources/thumbnails/021/999/421/small_2x/hand-drawn-dashed-arrow-shape-free-png.png" 
              alt="Migration arrow" 
              className="w-26 rotate-90 md:rotate-0"
            />
          </div>
          
          <div className="w-full md:w-2/5">
            <img 
              src="https://res.cloudinary.com/dm2ek1ift/image/upload/v1739961597/Screenshot_2025-02-19_at_3.40.41_PM_qfivjq.png" 
              alt="Vercel deployment dashboard" 
              className="w-full h-auto rounded-lg shadow-md"
            />
            <p className="mt-3 text-center text-gray-600 font-medium text-lg">Current: Vercel Deployment</p>
          </div>
        </div>

        {/* Comparison and Explanation */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800">Why I Switched to Vercel</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h4 className="font-semibold text-xl mb-4 text-red-600">Netlify Limitations</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-3 text-lg">
                <li>Build times were gradually increasing as project grew</li>
                <li>Preview deployments occasionally had inconsistent behavior</li>
                <li>Limited analytics for performance monitoring</li>
                <li>Edge function performance was not meeting requirements</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h4 className="font-semibold text-xl mb-4 text-green-600">Vercel Advantages</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-3 text-lg">
                <li>Optimized for Next.js with faster build times</li>
                <li>More reliable preview deployments with sharing capabilities</li>
                <li>Comprehensive analytics with Core Web Vitals tracking</li>
                <li>Superior edge function performance and global CDN</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Deployment Features */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold mb-8 text-gray-800">Current Deployment Setup</h3>
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
              <h4 className="font-semibold text-blue-800 mb-3 text-xl">Continuous Deployment</h4>
              <p className="text-blue-700 text-lg leading-relaxed">
                Every push to the main branch triggers an automatic build and deployment, ensuring the site always reflects the latest updates.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
              <h4 className="font-semibold text-green-800 mb-3 text-xl">Preview Deployments</h4>
              <p className="text-green-700 text-lg leading-relaxed">
                Each pull request generates a unique preview URL, allowing me to test changes before merging to production.
              </p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-3 text-xl">Performance Monitoring</h4>
              <p className="text-purple-700 text-lg leading-relaxed">
                Vercel Analytics provides insights into Core Web Vitals and user experience metrics, helping me identify optimization opportunities.
              </p>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
              <h4 className="font-semibold text-amber-800 mb-3 text-xl">Custom Domain & HTTPS</h4>
              <p className="text-amber-700 text-lg leading-relaxed">
                Configured a custom domain with automatic SSL certificate renewal for a professional and secure portfolio presence.
              </p>
            </div>
          </div>
        </div>
        
        {/* Migration Results */}
        <div className="mt-10 p-8 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-2xl font-semibold mb-8 text-gray-800 text-center">Migration Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-green-600 mb-3">43%</p>
              <p className="text-gray-700 text-lg">Faster build times</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-green-600 mb-3">68%</p>
              <p className="text-gray-700 text-lg">Improved load times</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-green-600 mb-3">99.9%</p>
              <p className="text-gray-700 text-lg">Uptime reliability</p>
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

export default PortfolioDoc;