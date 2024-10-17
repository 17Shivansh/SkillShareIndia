import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { useSwipeable } from 'react-swipeable';
import Gallery1 from '../assets/Gallery-1.jpg';
import Gallery2 from '../assets/Gallery-2.jpg';
import Gallery3 from '../assets/Gallery-3.jpg';
import Gallery4 from '../assets/Gallery-4.jpg';
import Gallery5 from '../assets/Gallery-5.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [Gallery1, Gallery2, Gallery3, Gallery4, Gallery5];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null); // Track clicked image index

  // Slick slider settings for responsiveness
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    initialSlide: selectedIndex,
    afterChange: (index) => setSelectedIndex(index),
    responsive: [
      {
        breakpoint: 768, // Mobile
        settings: {
          arrows: false,
        },
      },
    ],
  };

  // Swipeable functionality for mobile gestures
  const handlers = useSwipeable({
    onSwipedLeft: () => setSelectedIndex((prev) => (prev + 1) % images.length),
    onSwipedRight: () =>
      setSelectedIndex((prev) => (prev - 1 + images.length) % images.length),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    hover: { scale: 1.05 },
  };

  return (
    <div className="container mx-auto p-8">
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-8 text-gray-800"
      >
        Our Gallery
      </motion.h1>

      {/* Main gallery grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            variants={item}
            whileHover="hover"
            onClick={() => setSelectedIndex(index)} // Open slideshow on image click
          >
            <motion.img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="object-cover w-full h-64"
            />
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
            >
              <span className="text-white font-semibold text-lg">
                View Image {index + 1}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Slideshow modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedIndex(null)} // Close modal on background click
        >
          <div
            className="relative w-full max-w-4xl mx-auto"
            {...handlers} // Add swipeable handlers
            onClick={(e) => e.stopPropagation()} // Prevent modal close on image click
          >
            <Slider {...sliderSettings}>
              {images.map((src, index) => (
                <div key={index}>
                  <img
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    className="object-cover w-full h-screen md:h-auto"
                  />
                </div>
              ))}
            </Slider>

            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-2xl bg-gray-800 rounded-full p-2"
              onClick={() => setSelectedIndex(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
