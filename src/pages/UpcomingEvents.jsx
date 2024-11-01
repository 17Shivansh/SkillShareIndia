import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useFirebase } from '../Context/firebase'; // Ensure path is correct

const UpcomingEvents = () => {
  const { getEvents } = useFirebase();
  const [events, setEvents] = useState([]);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsInfo = await getEvents();
        const eventsData = eventsInfo.docs.map((doc) => {
          const data = doc.data();
          // console.log(data.city)
          return {
            id: doc.id,
            title: data.venue,
            city: data.city,
            date: `${data.eventDate}, ${data.startTime}`, // Format date and time
            image: data.venuePicURL, // Assuming imageURL is a field in your Firestore data
          };
        });
        setEvents(eventsData);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [getEvents]);

  useEffect(() => {
    if (events.length > 1) {
      const interval = setInterval(() => {
        setCurrentEventIndex((prevIndex) => (prevIndex + 1) % events.length);
      }, 4000); // Change every 4 seconds

      return () => clearInterval(interval);
    }
  }, [events.length]);

  if (loading) {
    return <p className="text-center mt-8">Loading upcoming events...</p>;
  }

  return (
    <div className="w-full flex flex-col items-center mb-6 bg-gradient-to-r from-purple-200 to-blue-200 p-4 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Upcoming Events</h2>
      
      <div className="relative w-full md:w-3/4 overflow-hidden" style={{ height: '240px' }}>
        <AnimatePresence>
          {events.length > 0 && (
            <motion.div
              key={events[currentEventIndex].id}
              className="absolute w-full flex items-center p-4 bg-white rounded-lg shadow-md"
              initial={{ x: '100%', opacity: 0 }} // Start off from the right
              animate={{ x: 0, opacity: 1 }}   // Move to the center
              exit={{ x: '-100%', opacity: 0 }} // Exit to the left
              transition={{ duration: 0.8, ease: "easeInOut" }}
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
              <div className="flex flex-col justify-center w-2/3 p-3 ml-4">
                <h3 className="text-xl font-semibold mb-1 text-gray-800 truncate">
                  {events[currentEventIndex].title},{events[currentEventIndex].city}
                </h3>
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
          )}
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
