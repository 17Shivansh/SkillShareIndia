import React from "react";
import { motion } from "framer-motion";


const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-200 py-12"> {/* Grey body background */}
      <div className="container mx-auto px-4">
        {/* Main Heading with Framer Motion */}
        <motion.h1
          className="text-4xl font-bold text-blue-700 mb-6 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to SkillShare India
        </motion.h1>

        {/* Introductory Paragraphs */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          <motion.p
            className="text-lg mb-4 text-gray-700"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            Skillshare India is the leading educational consultancy for schools
            across India. The sole objective of its establishment is to offer
            all kinds of professional assistance to all educational
            stakeholders.
          </motion.p>
          <motion.p
            className="text-lg mb-4 text-gray-700"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            Education plays a crucial role in shaping the future of our country
            i.e. students and teachers, where teachers are the architects of
            this transformation. We recognize the importance of equipping
            educators with the knowledge, tools, and resources they need to
            inspire and empower the coming generation.
          </motion.p>
          <motion.p
            className="text-lg mb-4 text-gray-700"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            At Skillshare India, we are committed to making a meaningful and
            lasting impact on the Educational Structure of India. We firmly
            believe that education is a foundation of progress and development,
            and we express our dedication towards it.
          </motion.p>
        </motion.div>

        {/* Mission and Vision Grid with Framer Motion */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.6,
                ease: "easeInOut",
              },
            },
          }}
        >
          {/* Mission Section */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-white shadow-lg rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg">
              Mercury is the closest planet to the Sun and the smallest one in
              the Solar System — it's only a bit larger than the Moon.
            </p>
          </motion.div>

          {/* Vision Section */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white shadow-lg rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg">
              Venus has a beautiful name and is the second planet from the Sun.
              It's hot and has a poisonous atmosphere.
            </p>
          </motion.div>
        </motion.div>

        {/* Founder Section */}
        <section className="bg-gradient-to-r from-pink-100 via-indigo-100 to-teal-100 py-20 mt-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 text-center">
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black mb-4 md:mb-6"
            >
              Meet Our Founder
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text- max-w-2xl md:max-w-3xl mx-auto mb-8 md:mb-12"
            >
              A visionary leader committed to driving excellence and fostering innovation in education.
            </motion.p>

            <div className="relative w-full flex flex-col items-center justify-center px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16">
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-500 w-full max-w-[96%] sm:max-w-[95%] md:max-w-[90%] lg:max-w-[85%] xl:max-w-[80%] h-auto lg:h-[400px] rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center transform hover:scale-105 transition-transform duration-300"
  >
    {/* Animated Circle Image */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="flex items-center justify-center w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden bg-gray-300 mx-auto mt-6 md:mt-0 md:ml-12 md:mr-8 border-4 border-white"
    >
      <img
        // src={FounderImage}
        alt="Founder"
        className="w-full h-full object-cover"
      />
    </motion.div>

    {/* Content Section */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="p-6 sm:p-8 md:p-10 lg:p-12 w-full md:w-1/2 text-left text-white"
    >
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-yellow-100 mb-4">
        Ms. Monika Kapoor
      </h3>
      <p className="text-base sm:text-lg md:text-xl text-yellow-200 mb-4">
        <span className="font-semibold text-black">CEO & Visionary</span> -the Founder and CEO of the company and Former joint Director of CBSE believes in hand-holding and sharing her expertise in Accreditation (SQAA)
, training, career counselling and bringing innovative solutions to schools. </p>
      <p className="text-gray-300 italic text-base sm:text-lg">
        “Empowering educators and learners is the pathway to a brighter future.”
      </p>
    </motion.div>
  </motion.div>
</div>


          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
