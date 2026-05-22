import React from "react";

const Footer = () => {
  return (
    <footer  className="min-h-screen w-full flex flex-col md:flex-row bg-gray-900 overflow-hidden">

      {/* 🌌 Dark Gray Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-black"></div>

      {/* ✨ Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gray-600 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gray-500 opacity-20 blur-3xl rounded-full"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* About */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-gray-700/40">
          <h2 className="text-2xl font-bold mb-4 text-gray-200">
            ANJANA<span className="text-red-400">.</span>
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Classical Bharatanatyam dancer & Computer Engineering
            student passionate about web development and creative design.
          </p>
        </div>

        {/* Quick Links */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-gray-700/40">
          <h3 className="text-xl font-semibold mb-4 text-gray-200">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li>
              <a href="#home" className="hover:text-red-400 transition">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-red-400 transition">
                About
              </a>
            </li>

            <li>
              <a href="#skills" className="hover:text-red-400 transition">
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" className="hover:text-red-400 transition">
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-red-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-gray-700/40">
          <h3 className="text-xl font-semibold mb-4 text-gray-200">
            Contact
          </h3>

          <p className="text-gray-300 mb-2">
            📧 anjana@example.com
          </p>

          <p className="text-gray-300 mb-4">
            📞 +91 7736225227
          </p>

          {/* Social Links */}
          <div className="flex gap-5 mt-4">
            <a href="#" className="hover:text-red-400 transition">
              Instagram
            </a>

            <a href="#" className="hover:text-red-400 transition">
              LinkedIn
            </a>

            <a href="#" className="hover:text-red-400 transition">
              GitHub
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="relative text-center text-gray-400 mt-12 text-sm border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} ANJANA. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;