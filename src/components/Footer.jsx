import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full pt-16 pb-8 mt-10 overflow-hidden">

      {/* 🌈 Background Gradient (same style as your contact page) */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100"></div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300 opacity-30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300 opacity-30 blur-3xl rounded-full"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* About */}
        <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-purple-700">
            ANJANA<span className="text-pink-500">.</span>
          </h2>

          <p className="text-gray-700">
            Classical Bharatanatyam dancer & Computer Engineering student passionate about
            web development and creative design.
          </p>
        </div>

        {/* Quick Links */}
        <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-purple-700">Quick Links</h3>

          <ul className="space-y-2 text-gray-700">
            <li><a href="#home" className="hover:text-pink-600">Home</a></li>
            <li><a href="#about" className="hover:text-pink-600">About</a></li>
            <li><a href="#skills" className="hover:text-pink-600">Skills</a></li>
            <li><a href="#projects" className="hover:text-pink-600">Projects</a></li>
            <li><a href="#contact" className="hover:text-pink-600">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-purple-700">Contact</h3>

          <p className="text-gray-700">📧 anjana@example.com</p>
          <p className="text-gray-700">📞 +91 7736225227</p>

          <div className="flex gap-4 mt-4 text-purple-700 font-medium">
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
          </div>
        </div>

      </div>

      {/* Bottom line */}
      <div className="relative text-center text-gray-600 mt-10 text-sm border-t border-white/50 pt-6">
        © {new Date().getFullYear()} ANJANA. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;