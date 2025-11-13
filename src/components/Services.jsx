import React from "react";

const Services = () => {
  return (
    <div className="max-w-[1420px] m-auto undefined">
      {/* First div */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-pink-500 mb-4 flex items-center justify-center gap-2">
          My Services
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Here are the frontend services I provide to build modern web
          experiences.
        </p>
      </div>

      {/* Second div */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div className="p-6 bg-[#181818] rounded-2xl shadow-lg transition-all duration-300 ease-out hover:shadow-[0_0_25px_#ec4899] hover:bg-linear-to-br hover:from-pink-500/10 hover:to-transparent">
          <div className="text-4xl mb-4 text-pink-500 inline-block cursor-pointer"></div>
          <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
          <p className="text-gray-400 text-sm md:text-base">
            Building responsive, dynamic, and user-friendly interfaces using
            React and modern JavaScript.
          </p>
        </div>
        <div className="p-6 bg-[#181818] rounded-2xl shadow-lg transition-all duration-300 ease-out hover:shadow-[0_0_25px_#3b82f6] hover:bg-linear-to-br hover:from-pink-500/10 hover:to-transparent">
          <div className="text-4xl mb-4 text-pink-500 inline-block cursor-pointer"></div>
          <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
          <p className="text-gray-400 text-sm md:text-base">
            Crafting visually appealing and user-friendly layouts with smooth
            animations and clean design.
          </p>
        </div>
        <div className="p-6 bg-[#181818] rounded-2xl shadow-lg transition-all duration-300 ease-out hover:shadow-[0_0_25px_#06b6d4] hover:bg-linear-to-br hover:from-pink-500/10 hover:to-transparent">
          <div className="text-4xl mb-4 text-pink-500 inline-block cursor-pointer"></div>
          <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
          <p className="text-gray-400 text-sm md:text-base">
            Ensuring seamless user experience across desktops, tablets, and
            mobile devices.
          </p>
        </div>
        <div className="p-6 bg-[#181818] rounded-2xl shadow-lg transition-all duration-300 ease-out hover:shadow-[0_0_25px_#22c55e] hover:bg-linear-to-br hover:from-pink-500/10 hover:to-transparent">
          <div className="text-4xl mb-4 text-pink-500 inline-block cursor-pointer"></div>
          <h3 className="text-xl font-semibold mb-2">
            Performance Optimization
          </h3>
          <p className="text-gray-400 text-sm md:text-base">
            Optimizing web apps for speed, SEO, and better Core Web Vitals to
            ensure top performance.
          </p>
        </div>
        <div className="p-6 bg-[#181818] rounded-2xl shadow-lg transition-all duration-300 ease-out hover:shadow-[0_0_25px_#f97316] hover:bg-linear-to-br hover:from-pink-500/10 hover:to-transparent">
          <div className="text-4xl mb-4 text-pink-500 inline-block cursor-pointer"></div>
          <h3 className="text-xl font-semibold mb-2">API Integration</h3>
          <p className="text-gray-400 text-sm md:text-base">
            Connecting applications with RESTful APIs and GraphQL for smooth
            data flow and scalability.
          </p>
        </div>
        <div className="p-6 bg-[#181818] rounded-2xl shadow-lg transition-all duration-300 ease-out hover:shadow-[0_0_25px_#a855f7] hover:bg-linear-to-br hover:from-pink-500/10 hover:to-transparent">
          <div className="text-4xl mb-4 text-pink-500 inline-block cursor-pointer"></div>
          <h3 className="text-xl font-semibold mb-2">Version Control</h3>
          <p className="text-gray-400 text-sm md:text-base">
            Managing projects with Git & GitHub for collaboration, tracking
            changes, and teamwork efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
