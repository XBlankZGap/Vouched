import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-10 mt-16">
      <div className="w-full max-w-none px-4 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Subscribe section */}
        <div className="w-full md:w-1/2">
          <h4 className="text-xl font-bold mb-2">Subscribe for updates</h4>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-md text-black w-full"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>

        {/* Links section */}
        <div className="w-full md:w-1/2 text-center md:text-right">
          <div className="flex justify-center md:justify-end gap-4 mb-4">
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
