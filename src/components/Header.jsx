import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">ProductValidator</h1>
        <nav className="space-x-6 text-gray-700 font-medium">
          <a href="#pricing" className="hover:text-blue-600">Pricing</a>
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#signin" className="hover:text-blue-600">Sign In</a>
          <a href="#signup" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Sign Up</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
