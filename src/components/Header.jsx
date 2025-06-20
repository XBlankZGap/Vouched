import React from "react";
import Container from './Container';
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="bg-white shadow-md w-full fixed z-50 ">
      <div className="relative py-4 flex items-center justify-between pr-8 sm:pr-7 lg:pr-20">
        <div className="font-sans absolute left-4 sm:left-6 lg:left-8 text-2xl font-bold transition-all duration-150 ease-in-out hover:scale-110">
          <Link
            to="/"
            className="no-underline flex items-center"
          >
            <span className="text-blue-700">Vouched</span>
            <span className="text-black font-extrabold">.</span>
          </Link>
        </div>

        <Container>
          <div className="flex justify-end pl-40">
            <nav className="space-x-4 md:space-x-6 text-gray-700 font-medium">
              <a href="#hero" className="hover:text-blue-600">Home</a>
              <a href="#pricing" className="hover:text-blue-600">Pricing</a>
              <a href="#services" className="hover:text-blue-600">Services</a>
              <a href="#signin" className="hover:text-blue-600">Sign In</a>
              <a href="#signup" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Sign Up
              </a>
            </nav>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;

