import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Slider from 'react-slick';

// Import images for the banner
import Banner1 from '../assets/Banner-1.jpg';
import Banner2 from '../assets/Banner-2.jpg';
import Banner3 from '../assets/Banner-3.jpg';
import Banner4 from '../assets/Banner-4.jpg';
import Banner5 from '../assets/Banner-5.jpg';

// Import images for upcoming events
import imageUni1 from '../assets/image-uni-1.png';
import imageUni2 from '../assets/image-uni.png';

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
    link: "/services#squaa" // Add a link for the specific service
  },
  {
    title: "Capacity Building Programs",
    imgSrc: destination2,
    alt: "School Improvement",
    link: "/services#capacity-building" // Add a link for the specific service
  },
  {
    title: "Recruitment/Job Hiring",
    imgSrc: destination3,
    alt: "Quality Assurance",
    link: "/services#recruitment" // Add a link for the specific service
  },
  {
    title: "International Olympiads",
    imgSrc: destination4,
    alt: "Service 4",
    link: "/services#international-olympiads" // Add a link for the specific service
  },
  {
    title: "Study Abroad",
    imgSrc: destination5,
    alt: "Service 5",
    link: "/services#study-abroad" // Add a link for the specific service
  },
  {
    title: "Others",
    imgSrc: destination6,
    alt: "Service 6",
    link: "/services#others" // Add a link for the specific service
  },
];


const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Banner image slide logic
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Cycle through banner images
    }, 5000); // Change slide every 5 seconds

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

      {/* Upcoming Events Section */}
      <UpcomingEvents />

      {/* Our Services section */}
<div className="py-10 mx-auto max-w-6xl px-6">
  <h2 className="text-center text-3xl font-extrabold mb-8">
    <span className="text-blue-800">Our </span> {/* Changed to a deep blue color */}
    <span className="text-green-500">Services</span> {/* Changed to a vibrant green color */}
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {services.map((service, index) => (
      <motion.div
        key={index}
        className="bg-white rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-blue-50 flex flex-col items-center h-auto" // Changed hover background color
        whileHover={{ scale: 1.05, rotate: 2 }} // Slight rotation effect on hover
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }} // Smooth transition for hover effects
      >
        <div className="w-24 h-24 mb-4 flex items-center justify-center">
          <img src={service.imgSrc} alt={service.alt} className="object-contain rounded-full w-full h-full" />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-blue-800 text-center">{service.title}</h3> {/* Changed title color */}
        <Link to={service.link} className="text-green-500 font-semibold text-sm mt-4 hover:underline"> {/* Changed link color */}
          Read More →
        </Link>
      </motion.div>
    ))}
  </div>
</div>


        {/* Awards Section */}
        <div className="py-10 mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-extrabold mb-8">
          <span className="text-black">Our </span>
          <span className="text-red-500">Awards</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              className="flex justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={award.imgSrc} alt={award.alt} className="h-24 w-24 object-contain" />
            </motion.div>
          ))}
        </div>
      </div>




   
      <div className="max-w-screen-lg mx-auto my-10 px-4">
  <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
    What Our Clients Say
  </h2>
  <Slider {...settings}>
    {reviews.map((review, index) => (
      <motion.div
        key={index}
        className="p-4"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between text-center h-[400px] mx-auto transition-transform transform hover:scale-105">
          <motion.img
            src={review.photo}
            alt={review.name}
            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-200"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.p
            className="text-lg text-gray-700 mb-4 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            "{review.review}"
          </motion.p>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {review.name}
          </h3>
          <div className="text-yellow-500 text-xl">
            {"★".repeat(review.rating)}
            {"☆".repeat(5 - review.rating)}
          </div>
        </div>
      </motion.div>
    ))}
  </Slider>
</div>






    </div>
  );
};

export default Home;
