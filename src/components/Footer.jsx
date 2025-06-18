import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 md:flex justify-between">
        <div>
          <h4 className="text-xl font-bold mb-2">Subscribe for updates</h4>
          <input
            type="email"
            placeholder="Your email"
            className="px-4 py-2 rounded-md text-black w-full md:w-auto"
          />
        </div>
        <div className="mt-6 md:mt-0">
          <div className="flex gap-4 mb-4">
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
          <p className="text-sm">&copy; 2025 Product Validator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
