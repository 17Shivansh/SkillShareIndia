import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Main Heading with Framer Motion */}
        <motion.h1
          className="text-4xl font-bold text-green-600 mb-6 text-center"
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
            className="text-lg mb-4"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            Skillshare India is the leading educational consultancy for schools
            across India. The sole objective of its establishment is to offer
            all kinds of professional assistance to all educational
            stakeholders.
          </motion.p>
          <motion.p
            className="text-lg mb-4"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            Education plays a crucial role in shaping the future of our country
            i.e. students and teachers, where teachers are the architects of
            this transformation. We recognize the importance of equipping
            educators with the knowledge, tools, and resources they need to
            inspire and empower the coming generation.
          </motion.p>
          <motion.p
            className="text-lg mb-4"
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
            className="bg-white shadow-lg rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700">
              Mercury is the closest planet to the Sun and the smallest one in
              the Solar System — it's only a bit larger than the Moon.
            </p>
          </motion.div>

          {/* Vision Section */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white shadow-lg rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-pink-500 mb-4">
              Our Vision
            </h2>
            <p className="text-lg text-gray-700">
              Venus has a beautiful name and is the second planet from the Sun.
              It's hot and has a poisonous atmosphere.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
