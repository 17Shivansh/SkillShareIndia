import React from 'react';
import bannerImage from '../assets/brainstorm-meeting.jpg'; // Replace with the actual path to your image

const Banner = () => {
  return (
    <section
      className="flex items-center justify-center h-screen bg-blue-500 text-white p-4 relative overflow-hidden"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Fixed background for a smooth look
      }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
        style={{
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0))', // Dark overlay for contrast
        }}
      ></div>
      
      <div className="max-w-2xl text-center z-10 relative">
        <h1 className="text-5xl font-extrabold text-yellow-400 mb-6">Skillshare India</h1>
        <p className="text-xl font-semibold mb-8 text-gray-100">
          Experience the difference with world-class learning and creative opportunities.
        </p>
        <a
          href="#get-started"
          className="inline-block px-6 py-3 text-lg bg-white text-blue-500 font-semibold rounded-lg transition-all duration-300 hover:bg-blue-500 hover:text-white"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Banner;
