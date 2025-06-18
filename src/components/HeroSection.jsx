import React from "react";
import heroImage from "../assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-100 to-white min-h-screen flex items-center justify-center relative"
    >
      {/* Background Blur Effects */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-300 rounded-full blur-3xl opacity-20 z-0"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-300 rounded-full blur-2xl opacity-30 z-0"></div>

      {/* Content Card */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 w-full max-w-[1400px] mx-auto bg-white/30 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-2xl">
        
        {/* Text Area */}
        <div className="text-center md:text-left flex-1">
          <h2 className="font-sans text-4xl md:text-6xl font-bold mb-4 text-gray-800">
            Validate Before You Sell
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Know the demand, competition & profit before launching any product.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto md:mx-0">
            <input
              type="text"
              placeholder="Enter product name or URL..."
              className="flex-grow px-4 py-3 border rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="shrink-0 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
              Analyze
            </button>
          </div>
        </div>

        {/* Image Area */}
        <div className="hidden md:block flex-1">
          <img
            src={heroImage}
            alt="Product validation illustration"
            className="w-full max-w-[450px] mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
