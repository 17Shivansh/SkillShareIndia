import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useFirebase } from '../Context/firebase'; // Adjust path if needed

const Events = () => {
  const { getEvents } = useFirebase();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsInfo = await getEvents();
        const eventsData = eventsInfo.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            name: data.venue,
            date: data.eventDate,
            city: data.city,
            time: data.startTime,
            venue: data.venue,
            imageURL: data.venuePicURL, // Assuming this field holds the image URL for the event
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

  if (loading) {
    return <p className="text-center mt-8">Loading events...</p>;
  }

  return (
    <motion.div
      className="w-full h-auto bg-gray-50 p-6 md:p-8 lg:p-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center text-blue-800">
        Upcoming Events
      </h2>

      <div className="grid gap-6 md:gap-8 lg:gap-12">
        {events.length > 0 ? (
          events.map((event) => (
            <motion.div
              key={event.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4 flex flex-col md:flex-row items-center md:items-start"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={event.imageURL}
                alt={event.name}
                className="w-full md:w-40 h-auto rounded-md mb-4 md:mb-0 md:mr-4"
              />
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-lg md:text-xl font-bold text-blue-800 mb-2">
                  {event.name}, {event.city}
                </h3>
                <table className="w-full text-gray-600 text-sm md:text-base">
                  <tbody>
                    <tr>
                      <td className="font-semibold">Event Date:</td>
                      <td className="text-center md:text-left">{event.date}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold">Event Time:</td>
                      <td className="text-red-600 text-center md:text-left">{event.time}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold">Venue:</td>
                      <td className="text-center md:text-left">{event.venue}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-600 mt-8">No events available</p>
        )}
      </div>
    </motion.div>
  );
};

export default Events;
