import React, { useState } from 'react';
import mailImage from '../assets/image 1.png';
import phoneImage from '../assets/image 2.png';
import timingImage from '../assets/image.png';

const ContactInfo = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Toggle the visibility of the popup
  const handleTimingClick = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  // Close the popup
  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <>
      {/* Desktop View: Full Contact Information */}
      <div className="hidden md:flex justify-between items-center bg-[#47559D] p-2 text-white">
        <div className="flex gap-6 items-center">
          <div className="flex items-center gap-2">
            <img src={mailImage} alt="Email icon" className="h-4 w-4" />
            <a href="mailto:Skillshareindia00@gmail.com" className="text-sm font-bold">Skillshareindia00@gmail.com</a>
          </div>

          <div className="flex items-center gap-2">
            <img src={phoneImage} alt="Phone icon" className="h-4 w-4" />
            <a href="tel:969696xxxx" className="text-sm font-bold">969696xxxx</a>
          </div>

          <div className="flex items-center gap-2">
            <img 
              src={timingImage} 
              alt="Timing icon" 
              className="h-4 w-4 cursor-pointer" 
              onClick={handleTimingClick} 
            />
            <p className="text-sm font-bold">Mon - Sat: 10 AM - 6 PM</p>
          </div>
        </div>
      </div>

      {/* Mobile View: Sticky Right-side Bar with Enhanced Icons */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center bg-[#47559D] rounded-lg shadow-lg p-2 md:hidden z-50">
        {/* Email Icon */}
        <div className="flex items-center justify-center w-[50px] h-[50px] bg-[#4B6EBA] rounded-full mb-2 transition-transform duration-300 hover:scale-105">
          <a href="mailto:Skillshareindia00@gmail.com" className="flex justify-center items-center h-full w-full">
            <img src={mailImage} alt="Email icon" className="w-3/5 h-3/5 object-contain" />
          </a>
        </div>

        {/* Phone Icon */}
        <div className="flex items-center justify-center w-[50px] h-[50px] bg-[#4B6EBA] rounded-full mb-2 transition-transform duration-300 hover:scale-105">
          <a href="tel:969696xxxx" className="flex justify-center items-center h-full w-full">
            <img src={phoneImage} alt="Phone icon" className="w-3/5 h-3/5 object-contain" />
          </a>
        </div>

        {/* Timing Icon */}
        <div className="relative flex items-center justify-center w-[50px] h-[50px] bg-[#4B6EBA] rounded-full mb-2 transition-transform duration-300 hover:scale-105">
          <img 
            src={timingImage} 
            alt="Timing icon" 
            className="w-3/5 h-3/5 object-contain cursor-pointer" 
            onClick={handleTimingClick} 
          />
        </div>
      </div>

      {/* Popup for Timing */}
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div 
            className="bg-white text-black rounded-lg p-4 cursor-default animate__animated animate__fadeIn"
            onClick={(e) => e.stopPropagation()} // Prevent the popup from closing when clicked inside
          >
            <p className="text-center">Mon - Sat: 10 AM - 6 PM</p>
          </div>
        </div>
      )}

      {/* Include animate.css for animations */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
    </>
  );
};

export default ContactInfo;
