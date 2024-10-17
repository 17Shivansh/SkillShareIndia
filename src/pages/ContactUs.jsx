import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'; 
import mail from '../assets/image 1.png';
import phone from '../assets/image 2.png';
import location from '../assets/image 12.png';

// Export as an object
export const images = {
  mail,
  phone,
  location,

};

const ContactUs = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [resultMessage, setResultMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(true); // State to track success or error

  const validateForm = (formData) => {
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');

    if (!name || !email || !phone || !message) {
      return 'All fields are required.';
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address.';
    }

    // Phone number validation (digits only)
    const phoneRegex = /^\d{10}$/; // Change this regex according to your requirements
    if (!phoneRegex.test(phone)) {
      return 'Please enter a valid phone number (10 digits).';
    }

    return null; // No errors
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResultMessage('Sending...');

    const formData = new FormData(event.target);
    
    // Validate the form
    const validationError = validateForm(formData);
    if (validationError) {
      setIsSuccess(false); // Set error state
      setResultMessage(
        <span className="flex items-center text-red-600">
          <AiOutlineCloseCircle className="text-3xl mr-2" />
          {validationError}
        </span>
      );
      setModalVisible(true); // Show the modal
      return; // Stop the submission
    }

    formData.append('access_key', '83b15728-9570-40c5-b57d-aa80f6b3308b'); // Replace with your actual access key

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true); // Set success state
        setResultMessage(
          <span className="flex items-center text-green-600">
            <AiOutlineCheckCircle className="text-3xl mr-2" />
            Your form has been submitted. Our team will contact you soon!
          </span>
        );
        setModalVisible(true); // Show the modal
        event.target.reset();
      } else {
        throw new Error(data.message); // Trigger error handling
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setIsSuccess(false); // Set error state
      setResultMessage(
        <span className="flex items-center text-red-600">
          <AiOutlineCloseCircle className="text-3xl mr-2" />
          There was a problem submitting the form. Please try again.
        </span>
      );
      setModalVisible(true); // Show the modal
    }
  };

  const closeModal = () => {
    setModalVisible(false); // Close the modal
  };

  return (
    <div className="w-full min-h-screen bg-[#E0F7FA] flex items-center justify-center p-4 sm:p-6">
      <motion.div
        className="max-w-6xl w-full bg-white shadow-lg rounded-[20px] p-6 mx-auto"
        style={{ border: '1px solid #ddd' }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#212121] mb-4 sm:mb-6">
          Contact Us
        </h2>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Side: Contact Form */}
          <form
            onSubmit={onSubmit}
            className="w-full md:w-1/2 transition-transform duration-500 transform hover:scale-105"
          >
            {/* Form Fields */}
            <div className="mb-4 sm:mb-5">
              <label className="block text-[#444444] text-sm font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="shadow appearance-none border border-[#BB86FC] rounded-lg w-full py-2 px-3 text-[#212121] leading-tight focus:outline-none focus:ring-2 focus:ring-[#6200EA]"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4 sm:mb-5">
              <label className="block text-[#444444] text-sm font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="shadow appearance-none border border-[#BB86FC] rounded-lg w-full py-2 px-3 text-[#212121] leading-tight focus:outline-none focus:ring-2 focus:ring-[#6200EA]"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4 sm:mb-5">
              <label className="block text-[#444444] text-sm font-semibold mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                className="shadow appearance-none border border-[#BB86FC] rounded-lg w-full py-2 px-3 text-[#212121] leading-tight focus:outline-none focus:ring-2 focus:ring-[#6200EA]"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="mb-4 sm:mb-5">
              <label className="block text-[#444444] text-sm font-semibold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                required
                rows="3"
                className="shadow appearance-none border border-[#BB86FC] rounded-lg w-full py-2 px-3 text-[#212121] leading-tight focus:outline-none focus:ring-2 focus:ring-[#6200EA]"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#6200EA] hover:bg-[#3700B3] text-white font-bold py-2 px-4 rounded-lg w-full transition duration-300 ease-in-out transform hover:scale-105"
            >
              Submit Form
            </button>
          </form>



          {/* Right Side: Contact Details */}
          <div className="md:w-1/2 flex flex-col justify-between">
            {/* Contact Details Card */}
            <div className="bg-[#F3E5F5] shadow-lg rounded-lg p-6 mb-4">
              <h3 className="text-lg font-semibold text-[#212121] mb-4">Contact Details</h3>

              {/* Email */}
              <motion.div
                className="flex items-center cursor-pointer mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={() => window.open('mailto:contact@skillshareindia.com')}
              >
                <img
                  src={images.mail}
                  alt="Mail Logo"
                  className="w-6 h-6 mr-4"
                />
                <span className="text-sm sm:text-base">skillshareindia00@gmail.com</span>
              </motion.div>

              {/* Phone */}
              <motion.div
                className="flex items-center cursor-pointer mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={() => window.open('tel:+918700630842')}
              >
                <img
                  src={images.phone}
                  alt="Phone Logo"
                  className="w-6 h-6 mr-4"
                />
                <span className="text-sm sm:text-base">+918700630842</span>
              </motion.div>

          {/* Address */}
<motion.div
  className="flex items-start cursor-pointer mb-4"
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.3 }}
  onClick={() =>
    window.open('https://maps.google.com?q=Skillshare+India,+723+Tower+C,+Seventh+Floor,+Logix+Cyberpark,+sector+62,+Noida,+201-301', '_blank')
  }
>
  <img
    src={images.location}
    alt="Address Logo"
    className="w-6 h-6 mr-4"
  />
  <span className="text-sm sm:text-base">Skillshare India, 723 Tower C, Seventh Floor, Logix Cyberpark, sector 62, Noida, 201-301</span>
</motion.div>

            </div>

            {/* Map Section */}
            <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
  <iframe
    title="Location Map"
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d241317.04451129443!2d77.20622973430656!3d28.535517460487408!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c1bc1234e56a7%3A0x24d456f1fd49bcfd!2sSkillshare%20India%2C%20723%20Tower%20C%2C%20Seventh%20Floor%2C%20Logix%20Cyberpark%2C%20Sector%2062%2C%20Noida%2C%20201-301!5e0!3m2!1sen!2sus!4v1625648239655!5m2!1sen!2sus"
    width="100%"
    height="100%"
    style={{ border: '0' }}
    allowFullScreen=""
    loading="lazy"
  ></iframe>
</div>

          </div>
        </div>

        {/* Modal for Result Message */}
        {modalVisible && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 w-80"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <h3 className="text-lg font-semibold mb-4">Message</h3>
              {resultMessage}
              <button
                className="mt-4 bg-[#6200EA] hover:bg-[#3700B3] text-white font-bold py-2 px-4 rounded-lg w-full"
                onClick={closeModal}
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ContactUs;
