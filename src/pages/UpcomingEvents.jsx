import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink for navigation
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

  const eventsToShow = 2; // Number of events to show at a time

  const nextEvents = () => {
    setCurrentEventIndex((prevIndex) => {
      return (prevIndex + eventsToShow) % events.length; // Cycle through events
    });
  };

  useEffect(() => {
    const interval = setInterval(nextEvents, 5000); // Slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full md:w-1/2 pr-0 md:pr-4 flex flex-col mb-6 md:mb-0 ml-2">
      <h2 className="text-xl md:text-2xl font-bold mb-4">Upcoming Events</h2>
      <div className="relative overflow-hidden h-80">
        <div
          className="grid grid-cols-1 gap-4 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateY(-${(currentEventIndex * 100) / eventsToShow}%)`, // Slide the appropriate percentage
          }}
        >
          {/* Map over the events and show only two events at a time */}
          {events
            .slice(currentEventIndex, currentEventIndex + eventsToShow)
            .map((event) => (
              <div key={event.id} className="flex p-4 bg-transparent">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-20 h-20 md:w-1/4 md:h-auto rounded-md mr-4"
                />
                <div className="flex flex-col justify-between w-3/4">
                  <h3 className="text-lg md:text-xl font-bold mb-1">{event.title}</h3>
                  <p className="text-red-500 mb-1 text-sm">{event.date}</p>
                  <div className="flex justify-center">
                    {/* NavLink to redirect to Events section */}
                    <NavLink
                      to="/events" // Change this to the route of your Events section
                      className="bg-white hover:bg-green-700 text-black font-bold py-1 px-2 rounded-full text-xs transition duration-300 ease-in-out"
                    >
                      View Details
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
