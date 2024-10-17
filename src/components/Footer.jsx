import React from 'react';
import { motion } from 'framer-motion';
import mail from '../assets/image 1.png';
import phone from '../assets/image 2.png';
import location from '../assets/image 12.png';
import logo from '../assets/Skill-share-india-logo.png';



// Export as an object
export const images = {
  mail,
  phone,
  location,
  logo,
};
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#D0E8F2] to-[#FFFFFF] py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between px-4">
        
        {/* Left Side - Logo */}
        <motion.div
          className="flex items-center mb-6 md:mb-0 justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <img 
            src={images.logo} 
            alt="SkillShare India Logo" 
            className="w-[180px] h-auto object-contain md:w-[265px] md:h-[100px]" 
          />
        </motion.div>

        {/* Right Side - Contact Details */}
        <motion.div
          className="flex flex-col space-y-4 text-center md:text-left text-base sm:text-lg font-bold w-full md:w-auto items-center md:items-start"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.2 }}
        >
          {/* Email */}
          <motion.div 
            className="flex items-center justify-center md:justify-start"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <img src={images.mail} alt="Mail Logo" className="w-6 h-6 mr-2" />
            <span className="text-[#002F6C] text-sm sm:text-base">contact@skillshareindia.com</span>
          </motion.div>

          {/* Phone */}
          <motion.div 
            className="flex items-center justify-center md:justify-start"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <img src={images.phone} alt="Phone Logo" className="w-6 h-6 mr-2" />
            <span className="text-[#002F6C] text-sm sm:text-base">+91 12345 67890</span>
          </motion.div>

          {/* Address */}
          <motion.div 
            className="flex items-start justify-center md:justify-start"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <img src={images.location} alt="Address Logo" className="w-6 h-6 mr-2" />
            <span className="break-words max-w-xs text-[#002F6C] text-sm sm:text-base text-center md:text-left">
              123, SkillShare Street, New Delhi, India
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Copyright Section */}
      <motion.div
        className="container mx-auto text-center mt-6 border-t border-gray-300 pt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.4 }}
      >
        <p className="text-xs sm:text-sm text-gray-500">© 2024 SkillShare India. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
