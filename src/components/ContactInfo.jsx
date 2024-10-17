import React from 'react';
import mailImage from '../assets/image 1.png';
import phoneImage from '../assets/image 2.png';
import timingImage from '../assets/image.png';

const ContactInfo = () => {
  return (
    <>
      {/* Desktop View: Full Contact Information */}
      <div className="hidden md:flex justify-between items-center bg-[#47559D] p-2 text-white">
        <div className="flex gap-6 items-center">
          <div className="flex items-center gap-2">
            <img src={mailImage} alt="Email icon" className="h-4 w-4" />
            <p className="text-sm font-bold">Skillshareindia00@gmail.com</p>
          </div>

          <div className="flex items-center gap-2">
            <img src={phoneImage} alt="Phone icon" className="h-4 w-4" />
            <p className="text-sm font-bold">969696xxxx</p>
          </div>

          <div className="flex items-center gap-2">
            <img src={timingImage} alt="Timing icon" className="h-4 w-4" />
            <p className="text-sm font-bold">Mon - Sat: 10 AM - 6 PM</p>
          </div>
        </div>
      </div>

      {/* Mobile View: Sticky Right-side Bar with Enhanced Icons */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center bg-[#47559D] rounded-lg shadow-lg p-2 md:hidden z-50">
        {/* Email Icon */}
        <div className="w-[40px] h-[40px] bg-[#4B6EBA] flex justify-center items-center rounded-full mb-2 transition-transform duration-300 hover:scale-105">
          <img src={mailImage} alt="Email icon" className="w-1/2 h-1/2 object-contain" />
        </div>

        {/* Phone Icon */}
        <div className="relative w-[40px] h-[40px] bg-[#4B6EBA] flex justify-center items-center rounded-full mb-2 transition-transform duration-300 hover:scale-105">
          <img src={phoneImage} alt="Phone icon" className="w-1/2 h-1/2 object-contain" />
          <span className="absolute inset-0 bg-transparent hover:bg-[#4B6EBA]/50 transition-all duration-300" />
        </div>

        {/* Timing Icon */}
        <div className="w-[40px] h-[40px] bg-[#4B6EBA] flex justify-center items-center rounded-full mb-2 transition-transform duration-300 hover:scale-105">
          <img src={timingImage} alt="Timing icon" className="w-1/2 h-1/2 object-contain" />
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
