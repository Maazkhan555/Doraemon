import React from "react";
import { FaYoutube, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import DoraemonImg from "../../assets/dora.png"; // optional small logo

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-white py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* ================= FOOTER LOGO / INFO ================= */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <img src={DoraemonImg} alt="Doraemon Logo" className="w-16 h-16" />
          <h2 className="text-2xl font-bold">Doraemon World</h2>
          <p className="text-gray-200 max-w-xs text-center md:text-left">
            Explore the magical world of Doraemon. Gadgets, adventures, and fun await fans of all ages!
          </p>
        </div>

        {/* ================= QUICK LINKS ================= */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <a href="#hero" className="hover:text-yellow-300 transition-colors">Home</a>
          <a href="#story" className="hover:text-yellow-300 transition-colors">Story</a>
          <a href="#gadgets" className="hover:text-yellow-300 transition-colors">Gadgets</a>
          <a href="#reviews" className="hover:text-yellow-300 transition-colors">Reviews</a>
        </div>

        {/* ================= SOCIAL ICONS ================= */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors">
              <FaYoutube size={24} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors">
              <FaFacebookF size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="mt-12 border-t border-white/20 pt-6 text-center text-gray-200 text-sm">
        &copy; {new Date().getFullYear()} Doraemon World. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
