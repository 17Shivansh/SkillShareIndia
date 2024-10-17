import { motion } from 'framer-motion';
import imageUni1 from '../assets/image-uni-1.png';
import imageUni2 from '../assets/image-uni.png';

const Events = () => {
  return (
    <motion.div
      className="w-full h-auto bg-gray-50 p-6 md:p-8 lg:p-12" // Changed to a lighter gray background
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center text-blue-800">
        Upcoming Events
      </h2>

      <div className="grid gap-6 md:gap-8 lg:gap-12">
        {/* Event 1 */}
        <motion.div
          className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4 flex flex-col md:flex-row items-center md:items-start"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          whileHover={{ scale: 1.02 }}
        >
          <img
            src={imageUni1}
            alt="Western Sydney University"
            className="w-full md:w-40 h-auto rounded-md mb-4 md:mb-0 md:mr-4"
          />
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold text-blue-800 mb-2">
              Western Sydney University
            </h3>
            <table className="w-full text-gray-600 text-sm md:text-base">
              <tbody>
                <tr>
                  <td className="font-semibold">Event Date:</td>
                  <td className="text-center md:text-left">Sat 28 Sep 2024</td>
                </tr>
                <tr>
                  <td className="font-semibold">Event Time:</td>
                  <td className="text-red-600 text-center md:text-left">3:00PM - 4:00PM</td>
                </tr>
                <tr>
                  <td className="font-semibold">Venue:</td>
                  <td className="text-center md:text-left">Western Sydney University</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Event 2 */}
        <motion.div
          className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4 flex flex-col md:flex-row items-center md:items-start"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          whileHover={{ scale: 1.02 }}
        >
          <img
            src={imageUni2}
            alt="Mount Saint Vincent University"
            className="w-full md:w-40 h-auto rounded-md mb-4 md:mb-0 md:mr-4"
          />
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold text-blue-800 mb-2">
              Mount Saint Vincent University
            </h3>
            <table className="w-full text-gray-600 text-sm md:text-base">
              <tbody>
                <tr>
                  <td className="font-semibold">Event Date:</td>
                  <td className="text-center md:text-left">Thu 03 Oct 2024</td>
                </tr>
                <tr>
                  <td className="font-semibold">Event Time:</td>
                  <td className="text-red-600 text-center md:text-left">3:30PM - 4:30PM</td>
                </tr>
                <tr>
                  <td className="font-semibold">Venue:</td>
                  <td className="text-center md:text-left">Mount Saint Vincent University</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Events;
