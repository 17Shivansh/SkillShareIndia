import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/Skill-share-india-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState); // Toggle the menu state
  };

  // Close the menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close the menu when navigating to a new page
  useEffect(() => {
    setIsOpen(false);  
  }, [location]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about-us", label: "About Us" },
    { to: "/gallery", label: "Gallery" },
    { to: "/events", label: "Events" },
    { to: "/reviews", label: "Reviews" },
    { to: "/social", label: "Social Media" },
    { to: "/contact-us", label: "Contact Us" },
  ];

  const currentPath = location.pathname;

  return (
    <nav className="bg-gradient-to-r from-[#D0E8F2] to-[#FFFFFF] shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={logo}
            alt="SkillShareIndia Logo"
            className="h-12 w-auto mr-3 md:h-10 md:mr-2 lg:h-16 lg:mr-4"
            loading="lazy"
          />
        </motion.div>

        {/* Desktop navigation */}
        <motion.div
          className="hidden md:flex space-x-6 lg:space-x-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-[#002F6C] font-semibold transition duration-300 hover:text-[#F9A825] text-sm md:text-base lg:text-lg ${currentPath === link.to ? 'text-[#F9A825]' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </motion.div>

        {/* Hamburger menu for mobile */}
        <button
          onClick={toggleMenu}
          aria-expanded={isOpen}
          className="md:hidden focus:outline-none relative z-50"
        >
          <div className="flex flex-col justify-center items-center space-y-1">
            {/* Hamburger bars */}
            <span className={`block w-6 h-0.5 bg-[#002F6C] transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#002F6C] transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-0.5 bg-[#002F6C] transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile navigation menu */}
      <motion.div
        ref={navRef}
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-2 bg-[#D0E8F2] rounded-lg shadow-lg relative`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.5 }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="block px-4 py-3 text-[#002F6C] font-semibold hover:bg-[#F9A825] transition duration-300 text-base"
            onClick={() => setIsOpen(false)}  // Close menu after clicking a link
          >
            {link.label}
          </Link>
        ))}
      </motion.div>
    </nav>
  );
};

export default Navbar;
