import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full pt-16 pb-8 mt-10 overflow-hidden bg-black">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* About */}
        <div className="bg-gray-900/70 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">
            ANJANA<span className="text-pink-400">.</span>
          </h2>

          <p className="text-gray-300">
            Classical Bharatanatyam dancer & Computer Engineering student passionate about
            web development and creative design.
          </p>
        </div>

        {/* Quick Links */}
        <div className="bg-gray-900/70 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-purple-400">Quick Links</h3>

          <ul className="space-y-2 text-gray-300">
            <li><a href="#home" className="hover:text-pink-400">Home</a></li>
            <li><a href="#about" className="hover:text-pink-400">About</a></li>
            <li><a href="#skills" className="hover:text-pink-400">Skills</a></li>
            <li><a href="#projects" className="hover:text-pink-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-pink-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="bg-gray-900/70 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-purple-400">Contact</h3>

          <p className="text-gray-300">📧 anjana@example.com</p>
          <p className="text-gray-300">📞 +91 7736225227</p>

          <div className="flex gap-4 mt-4 text-purple-300 font-medium">
            <a href="#" className="hover:text-pink-400">Instagram</a>
            <a href="#" className="hover:text-pink-400">LinkedIn</a>
            <a href="#" className="hover:text-pink-400">GitHub</a>
          </div>
        </div>

      </div>

      {/* Bottom line */}
      <div className="relative text-center text-gray-400 mt-10 text-sm border-t border-white/10 pt-6">
        © {new Date().getFullYear()} ANJANA. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;