import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import imageUni1 from '../assets/image-uni-1.png';
import imageUni2 from '../assets/image-uni.png';
import imageUni3 from '../assets/image-uni-1.png';
import imageUni4 from '../assets/image-uni.png';

const UpcomingEvents = () => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  const events = [
    {
      id: 1,
      title: 'School Name, Delhi',
      date: 'Sat 28 Sep 2024, 3:00PM To 4:00PM',
      image: imageUni1,
    },
    {
      id: 2,
      title: 'School Name, Delhi',
      date: 'Thu 03 Oct 2024, 3:30PM To 4:30PM',
      image: imageUni2,
    },
    {
      id: 3,
      title: 'School Name, Delhi2222222',
      date: 'Tue 08 Oct 2024, 4:00PM To 5:00PM',
      image: imageUni3,
    },
    {
      id: 4,
      title: 'School Name, Delhi',
      date: 'Fri 12 Oct 2024, 2:00PM To 3:00PM',
      image: imageUni4,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEventIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 8000); // Change every 8 seconds

    return () => clearInterval(interval);
  }, [events.length]);

  return (
    <div className="w-full flex flex-col items-center mb-6 bg-gradient-to-r from-purple-200 to-blue-200 p-4 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Upcoming Events</h2>
      
      <div className="relative w-full md:w-3/4 overflow-hidden justify-center items-center flex rounded-md" style={{ height: '240px' }}>
        <AnimatePresence>
          <motion.div
            key={events[currentEventIndex].id}
            className="absolute w-full flex items-center p-4 bg-white rounded-lg shadow-md"
            initial={{ x: '100%', opacity: 0 }} // Start off from the right
            animate={{ x: 0, opacity: 1 }}   // Move to the center
            exit={{ x: '-100%', opacity: 0 }} // Exit to the left
            transition={{ 
              duration: 0.8, // Smooth transition
              ease: "easeInOut" // Easing function for smooth effect
            }}
          >
            {/* Image on the Left */}
            <div className="w-1/3 flex justify-center items-center p-3">
              <img
                src={events[currentEventIndex].image}
                alt={events[currentEventIndex].title}
                className="w-full h-auto object-cover rounded-md border border-gray-300 shadow-sm"
              />
            </div>
            
            {/* Content on the Right */}
            <div className="flex flex-col justify-center w-2/3 p-3 ml-4"> {/* Added ml-4 for left margin */}
              <h3 className="text-xl font-semibold mb-1 text-gray-800 truncate">
                {events[currentEventIndex].title}
              </h3>
              {/* Date in Red */}
              <p className="text-red-600 mb-1 text-base truncate">
                {events[currentEventIndex].date}
              </p>
              <NavLink
                to="/events"
                className="text-white bg-blue-600 hover:bg-blue-500 font-semibold py-2 px-4 border border-blue-600 rounded-full transition duration-300"
                style={{ width: 'max-content' }}
              >
                View Details
              </NavLink>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots for manual event selection */}
      <div className="flex justify-center space-x-2 mt-4">
        {events.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentEventIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition duration-300 ${index === currentEventIndex ? 'bg-blue-600' : 'bg-gray-400'}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
