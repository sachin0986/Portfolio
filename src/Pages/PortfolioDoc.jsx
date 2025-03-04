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
    <div className="px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 font-sans max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-10 md:mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Portfolio Development Documentation
      </h1>

      {/* Section 1: Design Evolution */}
      <section className="mb-12 sm:mb-16 md:mb-24">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 pb-2 border-b-2 border-gray-200 text-gray-800">
          Redesigning with Purpose: A Design Evolution Story
        </h2>
        <div className="flex flex-col items-center text-center">
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed">
            My portfolio went through several iterations as I refined both the
            visual design and user experience. The transformation from initial
            concept to final implementation demonstrates growth in my design
            skills.
          </p>

          {/* Comparison images - stacked on mobile, side by side on larger screens */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 w-full mb-6 sm:mb-8">
            <div className="w-full md:w-2/5">
              <img
                src="https://res.cloudinary.com/dm2ek1ift/image/upload/v1739959259/extra/zflvozsibl8vs3p5vzsi.png"
                alt="Initial portfolio design"
                className="w-full h-auto rounded-lg shadow-md"
              />
              <p className="mt-2 sm:mt-3 text-gray-600 font-medium text-base sm:text-lg">
                Initial Design
              </p>
            </div>

            <div className="my-2 md:my-0">
              <img
                src="https://pngmaterial.com/dvsxyz02/uploads/mouse-arrow-png.png"
                alt="Evolution arrow"
                className="w-16 h-16 sm:w-16 sm:h-16 md:w-20 md:h-20 rotate-90 md:rotate-0"
              />
            </div>

            <div className="w-full md:w-2/5">
              <img
                src="https://res.cloudinary.com/dm2ek1ift/image/upload/v1739959259/extra/alsxqcmwenrzhgzobjbe.png"
                alt="Final portfolio design"
                className="w-full h-auto rounded-lg shadow-md"
              />
              <p className="mt-2 sm:mt-3 text-gray-600 font-medium text-base sm:text-lg">
                Final Design
              </p>
            </div>
          </div>

          {/* Key improvements box */}
          <div className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg max-w-3xl mx-auto shadow-sm w-full">
            <h3 className="font-semibold text-lg sm:text-xl mb-3 sm:mb-4 text-gray-800">
              Key Improvements:
            </h3>
            <ul className="text-left list-disc pl-5 sm:pl-6 text-gray-700 space-y-2 sm:space-y-3 text-base sm:text-lg">
              <li>Simplified navigation for better user experience</li>
              <li>
                Implemented a cohesive color scheme based on user feedback
              </li>
              <li>Enhanced typography hierarchy for better readability</li>
              <li>Added subtle animations to increase engagement</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2: GitHub API Integration */}
      <section className="mb-12 sm:mb-16 md:mb-24">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 pb-2 border-b-2 border-gray-200 text-gray-800">
          Supercharged GitHub API: A Modern Approach
        </h2>

        {/* Stack on mobile, side-by-side on larger screens */}
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10">
          {/* Text content */}
          <div className="w-full md:w-1/2">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800">
              Integrating GitHub Repositories
            </h3>
            <p className="mb-4 sm:mb-6 text-gray-700 text-base sm:text-lg leading-relaxed">
              To showcase my projects dynamically, I implemented a GitHub API
              integration that automatically displays my latest work.
            </p>

            {/* Code snippet - responsive width */}
            <div className="mb-4 sm:mb-6 md:mb-8 overflow-x-auto rounded-lg">
              <SyntaxHighlighter
                language="javascript"
                style={dracula}
                customStyle={{ fontSize: "0.85rem", padding: "1rem" }}
              >
                {codeString}
              </SyntaxHighlighter>
            </div>

            <p className="mb-3 sm:mb-4 text-gray-700 text-base sm:text-lg leading-relaxed">
              This approach provides several benefits:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 text-gray-700 space-y-2 sm:space-y-3 text-base sm:text-lg">
              <li>Automatically updates when I push new projects</li>
              <li>Displays accurate star counts and last update times</li>
              <li>
                Allows filtering by technology tags extracted from repository
                topics
              </li>
              <li>Implements proper error handling and loading states</li>
            </ul>
          </div>

          {/* Image - centered on mobile */}
          <div className="w-full md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
            <div className="relative w-full max-w-sm md:max-w-md">
              <img
                src="https://res.cloudinary.com/dm2ek1ift/image/upload/v1739959258/extra/qjwg7tqx8myx6fdyqnl9.png"
                alt="GitHub API integration"
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-gray-100 px-3 py-1 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm text-gray-600 shadow">
                GitHub API Response
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Cloudinary Integration */}
      <section className="mb-12 sm:mb-16 md:mb-24">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 pb-2 border-b-2 border-gray-200 text-gray-800">
          Cloudinary Chronicles: Building Lightning-Fast Image Loads
        </h2>

        <div className="space-y-6 sm:space-y-8">
          <p className="text-base sm:text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 leading-relaxed">
            To improve performance and maintainability, I integrated Cloudinary
            for image management and optimization.
          </p>

          {/* Comparison images - similar structure to first section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 w-full mb-8 sm:mb-10">
            <div className="w-full md:w-2/5">
              <img
                src="https://res.cloudinary.com/dm2ek1ift/image/upload/v1739959259/extra/ybmjzuohopxd5qkyrvcl.png"
                alt="cloud 1"
                className="w-full h-auto rounded-lg shadow-md"
              />
              <p className="mt-2 sm:mt-3 text-center text-gray-600 font-medium text-base sm:text-lg">
                Dynamic Image Transformations
              </p>
            </div>

            <div className="my-2 md:my-0">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/055/143/086/small_2x/hand-drawn-sketch-of-a-black-arrow-curving-to-the-right-symbolizing-direction-and-movement-on-a-transparent-background-png.png"
                alt="Migration arrow"
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rotate-90 md:rotate-0"
              />
            </div>

            <div className="w-full md:w-2/5">
              <img
                src="https://res.cloudinary.com/dm2ek1ift/image/upload/v1739959259/extra/sy3vlen4aw2pbavodcfd.png"
                alt="cloud 2"
                className="w-full h-auto rounded-lg shadow-md"
              />
              <p className="mt-2 sm:mt-3 text-center text-gray-600 font-medium text-base sm:text-lg">
                Cloudinary Asset Management
              </p>
            </div>
          </div>

          {/* Implementation benefits - stacked grid on mobile */}
          <div className="mt-6 sm:mt-8 md:mt-10 max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center text-gray-800">
              Implementation Benefits
            </h3>
            <div className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg shadow-sm">
              <div className="mb-6 sm:mb-8 overflow-x-auto rounded-lg">
                <SyntaxHighlighter
                  language="javascript"
                  style={dracula}
                  customStyle={{ fontSize: "0.85rem", padding: "1rem" }}
                >
                  {reusableCode}
                </SyntaxHighlighter>
              </div>

              {/* Stack on mobile, 2 columns on tablet+ */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <h4 className="font-semibold text-lg sm:text-xl mb-3 sm:mb-4 text-gray-800">
                    Performance Improvements
                  </h4>
                  <ul className="list-disc pl-5 sm:pl-6 text-gray-700 space-y-2 sm:space-y-3 text-base sm:text-lg">
                    <li>53% reduction in image file sizes</li>
                    <li>Automatic WebP format conversion</li>
                    <li>Responsive sizing for different devices</li>
                    <li>Improved Lighthouse performance score</li>
                  </ul>
                </div>
                <div className="mt-4 md:mt-0">
                  <h4 className="font-semibold text-lg sm:text-xl mb-3 sm:mb-4 text-gray-800">
                    Developer Experience
                  </h4>
                  <ul className="list-disc pl-5 sm:pl-6 text-gray-700 space-y-2 sm:space-y-3 text-base sm:text-lg">
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
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 pb-2 border-b-2 border-gray-200 text-gray-800">
          Why I Switched to Vercel (And Never Looked Back)
        </h2>

        {/* Transition Images - same responsive pattern */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 w-full mb-8 sm:mb-10 md:mb-12">
          <div className="w-full md:w-2/5">
            <img
              src="https://res.cloudinary.com/dm2ek1ift/image/upload/v1739962526/Screenshot_2025-02-19_at_4.24.55_PM_mz2rqf.png"
              alt="Netlify dashboard"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <p className="mt-2 sm:mt-3 text-center text-gray-600 font-medium text-base sm:text-lg">
              Previous: Netlify Deployment
            </p>
          </div>

          <div className="my-2 md:my-0">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/021/999/421/small_2x/hand-drawn-dashed-arrow-shape-free-png.png"
              alt="Migration arrow"
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-26 md:h-18 rotate-90 md:rotate-0"
            />
          </div>

          <div className="w-full md:w-2/5">
            <img
              src="https://res.cloudinary.com/dm2ek1ift/image/upload/v1739961597/Screenshot_2025-02-19_at_3.40.41_PM_qfivjq.png"
              alt="Vercel deployment dashboard"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <p className="mt-2 sm:mt-3 text-center text-gray-600 font-medium text-base sm:text-lg">
              Current: Vercel Deployment
            </p>
          </div>
        </div>

        {/* Comparison and Explanation */}
        <div className="mb-6 sm:mb-8 md:mb-10">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 md:mb-8 text-center text-gray-800">
            Why I Switched to Vercel
          </h3>

          {/* Stacked on mobile, 2 columns on lg+ */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md border border-gray-100">
              <h4 className="font-semibold text-lg sm:text-xl mb-3 sm:mb-4 text-red-600">
                Netlify Limitations
              </h4>
              <ul className="list-disc pl-5 sm:pl-6 text-gray-700 space-y-2 sm:space-y-3 text-base sm:text-lg">
                <li>Build times were gradually increasing as project grew</li>
                <li>
                  Preview deployments occasionally had inconsistent behavior
                </li>
                <li>Limited analytics for performance monitoring</li>
                <li>Edge function performance was not meeting requirements</li>
              </ul>
            </div>

            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md border border-gray-100">
              <h4 className="font-semibold text-lg sm:text-xl mb-3 sm:mb-4 text-green-600">
                Vercel Advantages
              </h4>
              <ul className="list-disc pl-5 sm:pl-6 text-gray-700 space-y-2 sm:space-y-3 text-base sm:text-lg">
                <li>Optimized for Next.js with faster build times</li>
                <li>
                  More reliable preview deployments with sharing capabilities
                </li>
                <li>Comprehensive analytics with Core Web Vitals tracking</li>
                <li>Superior edge function performance and global CDN</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Deployment Features */}
        <div className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg shadow-sm">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 md:mb-8 text-gray-800">
            Current Deployment Setup
          </h3>
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-blue-50 p-4 sm:p-6 rounded-lg border-l-4 border-blue-400">
              <h4 className="font-semibold text-blue-800 mb-2 sm:mb-3 text-lg sm:text-xl">
                Continuous Deployment
              </h4>
              <p className="text-blue-700 text-base sm:text-lg leading-relaxed">
                Every push to the main branch triggers an automatic build and
                deployment, ensuring the site always reflects the latest
                updates.
              </p>
            </div>

            <div className="bg-green-50 p-4 sm:p-6 rounded-lg border-l-4 border-green-400">
              <h4 className="font-semibold text-green-800 mb-2 sm:mb-3 text-lg sm:text-xl">
                Preview Deployments
              </h4>
              <p className="text-green-700 text-base sm:text-lg leading-relaxed">
                Each pull request generates a unique preview URL, allowing me to
                test changes before merging to production.
              </p>
            </div>

            <div className="bg-purple-50 p-4 sm:p-6 rounded-lg border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2 sm:mb-3 text-lg sm:text-xl">
                Performance Monitoring
              </h4>
              <p className="text-purple-700 text-base sm:text-lg leading-relaxed">
                Vercel Analytics provides insights into Core Web Vitals and user
                experience metrics, helping me identify optimization
                opportunities.
              </p>
            </div>

            <div className="bg-amber-50 p-4 sm:p-6 rounded-lg border-l-4 border-amber-400">
              <h4 className="font-semibold text-amber-800 mb-2 sm:mb-3 text-lg sm:text-xl">
                Custom Domain & HTTPS
              </h4>
              <p className="text-amber-700 text-base sm:text-lg leading-relaxed">
                Configured a custom domain with automatic SSL certificate
                renewal for a professional and secure portfolio presence.
              </p>
            </div>
          </div>
        </div>

        {/* Migration Results */}
        <div className="mt-6 sm:mt-8 md:mt-10 p-4 sm:p-6 md:p-8 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 md:mb-8 text-gray-800 text-center">
            Migration Results
          </h3>

          {/* Responsive grid - 1 column on mobile, 3 columns on md+ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="bg-white/50 p-4 rounded-lg">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-600 mb-2 sm:mb-3">
                43%
              </p>
              <p className="text-gray-700 text-base sm:text-lg">
                Faster build times
              </p>
            </div>
            <div className="bg-white/50 p-4 rounded-lg">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-600 mb-2 sm:mb-3">
                68%
              </p>
              <p className="text-gray-700 text-base sm:text-lg">
                Improved load times
              </p>
            </div>
            <div className="bg-white/50 p-4 rounded-lg">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-600 mb-2 sm:mb-3">
                99.9%
              </p>
              <p className="text-gray-700 text-base sm:text-lg">
                Uptime reliability
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 sm:mt-16 md:mt-24 pt-6 sm:pt-8 border-t border-gray-200 text-center text-gray-600 text-base sm:text-lg">
        <p>Last updated: February 2025</p>
      </footer>
    </div>
  );
};

export default PortfolioDoc;
