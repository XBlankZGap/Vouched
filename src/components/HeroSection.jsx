import React from "react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="pt-20 pb-12 bg-gradient-to-r from-blue-100 to-white h-screen flex flex-col justify-center items-center text-center"
    >
      {/* Background Blur Effects */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-300 rounded-full blur-3xl opacity-20 z-0"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-300 rounded-full blur-2xl opacity-30 z-0"></div>

      {/* Content on top of blur */}
      <div className="relative z-10 max-w-2xl px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          Validate Before You Sell
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Know the demand, competition & profit before launching any product.
        </p>
        <input
          type="text"
          placeholder="Enter product name or URL..."
          className="w-full max-w-md px-4 py-3 border rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
    </section>
  );
};

export default HeroSection;
