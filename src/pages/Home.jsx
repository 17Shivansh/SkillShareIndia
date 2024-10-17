import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Import images for the banner
import Banner1 from '../assets/Banner-1.jpg';
import Banner2 from '../assets/Banner-2.jpg';
import Banner3 from '../assets/Banner-3.jpg';
import Banner4 from '../assets/Banner-4.jpg';
import Banner5 from '../assets/Banner-5.jpg';

// Import images for upcoming events
// import imageUni1 from '../assets/image-uni-1.png';
// import imageUni2 from '../assets/image-uni.png';

// Import images for services
import destination1 from '../assets/destination1.png';
import destination2 from '../assets/destination2.png';
import destination3 from '../assets/destination3.png';
import destination4 from '../assets/destination4.png';
import destination5 from '../assets/destination5.png';
import destination6 from '../assets/destination6.png';


import img3 from '../assets/image 3.png';
import img4 from '../assets/image 4.png';
import img5 from '../assets/image 5.png';
import img6 from '../assets/image 6.png';
import img7 from '../assets/image 7.png';
import img8 from '../assets/image 8.png';
import img9 from '../assets/image 9.png';
import img10 from '../assets/image 10.png';
import img11 from '../assets/image 11.png';
import UpcomingEvents from './UpcomingEvents';

// Manually created array of images with alt text
const awards = [
  { imgSrc: img3, alt: 'Award 3' },
  { imgSrc: img4, alt: 'Award 4' },
  { imgSrc: img5, alt: 'Award 5' },
  { imgSrc: img6, alt: 'Award 6' },
  { imgSrc: img7, alt: 'Award 7' },
  { imgSrc: img8, alt: 'Award 8' },
  { imgSrc: img9, alt: 'Award 9' },
  { imgSrc: img10, alt: 'Award 10' },
  { imgSrc: img11, alt: 'Award 11' },
];

const settings = {
  dots: true, 
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  swipe: true,
  appendDots: (dots) => (
    <div style={{ background: "white", padding: "10px" }}>
      <ul style={{ margin: "0px" }}> {dots} </ul>
    </div>
  ),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const reviews = [
  {
    name: "John Doe",
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
    review:
      "Their service exceeded my expectations. They were professional, courteous, and delivered on time.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
    review:
      "I had a great experience! They were very responsive and ensured that all my queries were answered.",
    rating: 4,
  },
  {
    name: "Sam Wilson",
    photo: "https://randomuser.me/api/portraits/men/3.jpg",
    review:
      "Fantastic service! The team was knowledgeable and went the extra mile to ensure everything was perfect.",
    rating: 5,
  },
  {
    name: "Emily Davis",
    photo: "https://randomuser.me/api/portraits/women/4.jpg",
    review:
      "I was very happy with the service provided. The staff were friendly and the process was smooth.",
    rating: 4,
  },
  {
    name: "Michael Brown",
    photo: "https://randomuser.me/api/portraits/men/5.jpg",
    review:
      "The professionalism and dedication shown by the team were truly remarkable. I highly recommend them.",
    rating: 5,
  },
  {
    name: "Laura Johnson",
    photo: "https://randomuser.me/api/portraits/women/6.jpg",
    review:
      "Wonderful experience. They really take the time to understand your needs and provide excellent solutions.",
    rating: 4,
  },
  {
    name: "David Harris",
    photo: "https://randomuser.me/api/portraits/men/7.jpg",
    review:
      "A seamless experience from start to finish. The team handled everything perfectly.",
    rating: 5,
  },
  {
    name: "Sophia Martinez",
    photo: "https://randomuser.me/api/portraits/women/8.jpg",
    review:
      "Their customer service was top-notch. I felt supported throughout the entire process.",
    rating: 5,
  },
  {
    name: "James Lee",
    photo: "https://randomuser.me/api/portraits/men/9.jpg",
    review:
      "Highly recommend! The team was professional, friendly, and very efficient in handling my requests.",
    rating: 4,
  },
];

const images = [Banner1, Banner2, Banner3, Banner4, Banner5];
const services = [
  {
    title: "SQUAA/Auditing of Schools",
    imgSrc: destination1,
    alt: "School Audit",
  },
  {
    title: "SQUAA/School Improvement",
    imgSrc: destination2,
    alt: "School Improvement",
  },
  {
    title: "SQUAA/Quality Assurance",
    imgSrc: destination3,
    alt: "Quality Assurance",
  },
  {
    title: "SQUAA/Service 4",
    imgSrc: destination4,
    alt: "Service 4",
  },
  {
    title: "SQUAA/Service 5",
    imgSrc: destination5,
    alt: "Service 5",
  },
  {
    title: "SQUAA/Service 6",
    imgSrc: destination6,
    alt: "Service 6",
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  return (
    <div>
      {/* Banner Section */}
      <div className="relative h-[440px] overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
          key={currentIndex} // Ensure unique key for Framer Motion
          initial={{ opacity: 0 }} // Start hidden
          animate={{ opacity: 1 }} // Animate to visible
          exit={{ opacity: 0 }} // Fade out on exit
          transition={{ duration: 1 }} // Duration of the transition
        />
      </div>

      {/* Upcoming Events and Contact Form Section */}
      <div className="bg-[#EBEEFB] p-4 flex flex-col md:flex-row items-stretch">
        {/* Upcoming Events Section */}
       <UpcomingEvents />

        {/* Contact Form Section */}
        <div className="w-full md:w-1/2 pl-0 md:pl-4 flex flex-col">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-green-600">Contact Us</h2>
          <div className="bg-transparent rounded-lg shadow-md p-4 flex-1">
            <form>
              <div className="mb-2">
                <label className="block text-gray-700 text-xs md:text-sm font-bold mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="bg-transparent border border-gray-300 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-xs md:text-sm font-bold mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="bg-transparent border border-gray-300 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-xs md:text-sm font-bold mb-1" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Your Phone Number"
                  className="bg-transparent border border-gray-300 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-1 rounded text-xs transition duration-300 ease-in-out"
                >
                  Send Us!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>


{/* Our Services section */}
<div className="py-10 mx-auto max-w-6xl px-6"> {/* Adjusted to max-w-6xl for more width and centered with padding on x-axis */}
  {/* Heading Section */}
  <h2 className="text-center text-3xl font-extrabold mb-8">
    <span className="text-black">Our </span>
    <span className="text-red-500">Services</span>
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"> {/* Consistent gap between all cards */}
    {services.map((service, index) => (
      <motion.div
        key={index}
        className="bg-white rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 flex flex-col items-center h-auto" 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="w-24 h-24 mb-4 flex items-center justify-center">
          <img src={service.imgSrc} alt={service.alt} className="object-contain rounded-full w-full h-full" /> {/* Fixed size for images */}
        </div>
        <h3 className="text-lg font-semibold mb-2 text-black text-center">{service.title}</h3>
        <a href="#" className="text-red-500 font-semibold text-sm mt-4"> {/* Simple Read More in red */}
          Read More →
        </a>
      </motion.div>
    ))}
  </div>
</div>



<div className="flex flex-wrap gap-8 justify-evenly py-8"> {/* Even spacing with justify-around */}
  {/* Schools Card */}
  <div className="bg-gradient-to-r from-gray-800 to-black text-white rounded-lg p-6 shadow-lg transform hover:scale-105 transition duration-300 w-64 sm:w-64 flex flex-col items-center">
    <h2 className="text-xl font-extrabold mb-2 text-white">Schools</h2>
    <p className="text-blue-400 font-bold text-3xl">2000+</p>
  </div>

  {/* Teachers Empower Card */}
  <div className="bg-gradient-to-r from-gray-800 to-black text-white rounded-lg p-6 shadow-lg transform hover:scale-105 transition duration-300 w-64 sm:w-64 flex flex-col items-center">
    <h2 className="text-xl font-extrabold mb-2 text-white">Teachers Empower</h2>
    <p className="text-blue-400 font-bold text-3xl">20,000+</p>
  </div>

  {/* Reviews Card */}
  <div className="bg-gradient-to-r from-gray-800 to-black text-white rounded-lg p-6 shadow-lg transform hover:scale-105 transition duration-300 w-64 sm:w-64 flex flex-col items-center">
    <h2 className="text-xl font-extrabold mb-2 text-white">Reviews</h2>
    <div className="flex items-center mt-3 gap-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-yellow-400 text-2xl">★</span>
      ))}
    </div>
  </div>
</div>




<div className="relative bg-gray-50 py-12"> {/* Light background added */}
  {/* Heading Section */}
  <div className="text-center mb-12">
    <h1 className="text-4xl font-bold mb-4 text-black">About SkillShare India</h1> {/* Heading in black */}
    <p className="text-gray-700 max-w-3xl mx-auto">
      Skillshare India is the leading educational consultancy for schools across India, offering professional assistance to educational stakeholders with the aim of transforming the educational structure of the country.
    </p>
    <a href="/about-us" className="inline-block mt-4 text-red-500 font-semibold transition-colors duration-300 hover:text-red-600">
      Read More →
    </a>
  </div>
</div>




<div className="bg-white py-10"> {/* Adjusted padding for better height */}
  {/* Heading */}
  <h2 className="text-center text-4xl font-extrabold mb-8">
    <span className="text-black">Awards </span>
    <span className="text-green-500">Winnings</span>
  </h2>

  {/* Award Images Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto px-4"> {/* 5 images in one row */}
    {awards.slice(0, 5).map((award, index) => ( // First five images
      <div key={index} className="flex flex-col items-center">
        <img
          src={award.imgSrc}
          alt={award.alt}
          className="w-32 h-32 object-cover shadow-lg hover:shadow-xl transition-shadow duration-300" // Square format
        />
      </div>
    ))}
  </div>

  {/* Centered Remaining Images */}
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-8"> {/* Centering the next four images */}
    {awards.slice(5).map((award, index) => ( // Remaining images
      <div key={index} className="flex flex-col items-center">
        <img
          src={award.imgSrc}
          alt={award.alt}
          className="w-32 h-32 object-cover shadow-lg hover:shadow-xl transition-shadow duration-300" // Square format
        />
      </div>
    ))}
  </div>
</div>











    </div>
  );
};

export default Home;
