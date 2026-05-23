import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 border-b flex items-center ${
        scrolled
          ? "bg-black/90 border-gray-800 shadow-2xl backdrop-blur-xl h-20"
          : "bg-black/70 border-transparent backdrop-blur-md h-24"
      }`}
    >
      <div className="max-w-6xl w-full mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 z-[10000]">
          <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>

          <span className="text-2xl font-black text-white tracking-wide">
            ANJANA<span className="text-red-500">.</span>
          </span>
        </a>

  
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-red-400 font-semibold relative group transition duration-300"
            >
              {link.name}

              {/* Underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white text-3xl focus:outline-none z-[10000]"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed left-0 w-full bg-black/95 border-b border-gray-800 backdrop-blur-2xl md:hidden transition-all duration-300 z-[9998] ${
          scrolled ? "top-20" : "top-24"
        } ${
          isMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-6 space-y-5 shadow-2xl">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-300 hover:text-red-400 font-semibold border-b border-gray-800 pb-3 transition duration-300"
            >
              {link.name}
            </a>
          ))}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;