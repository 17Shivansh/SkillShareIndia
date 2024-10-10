import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/gallery", label: "Gallery" },
    { to: "/events", label: "Events" },
    { to: "/reviews", label: "Reviews" },
    { to: "/social", label: "Social Media" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="bg-[#E0F7FA] shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/src/assets/images/Skill-share-india-logo.png"
            alt="SkillShareIndia Logo"
            className="h-12 w-auto mr-3 md:h-10 md:mr-2 lg:h-16 lg:mr-4" // Responsive sizing
          />
        </div>

        {/* Nav Links for larger screens */}
        <div className="hidden md:flex space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-gray-800 font-semibold transition duration-300 hover:text-blue-500 text-sm md:text-base lg:text-lg" // Responsive font sizes
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hamburger Menu for mobile */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-2`}>
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="block px-4 py-2 text-gray-800 font-semibold hover:bg-blue-100 transition duration-300 text-sm" // Smaller text for mobile
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
