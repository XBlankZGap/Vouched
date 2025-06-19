import React from "react";
import Container from './Container';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-gray-800 text-white py-20 mt-20">
      <div className="w-full px-4 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 max-w-screen-2xl mx-auto">
     
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

        <div className="w-full md:w-1/2 text-center md:text-right">
          <div className="flex justify-center md:justify-end gap-4 mb-2">
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>

          <div className="flex justify-center md:justify-end gap-4 mb-2">
            <a href="#"><Facebook size={20} className="hover:text-blue-500" /></a>
            <a href="#"><Twitter size={20} className="hover:text-blue-400" /></a>
            <a href="#"><Instagram size={20} className="hover:text-pink-400" /></a>
            <a href="#"><Linkedin size={20} className="hover:text-blue-600" /></a>
          </div>

          <p className="text-sm">&copy; 2025 Vouched. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
