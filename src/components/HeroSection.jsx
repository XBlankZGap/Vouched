import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 to-white h-screen flex flex-col justify-center items-center text-center pt-20">
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
    </section>
  );
};

export default HeroSection;
