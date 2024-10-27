import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AuditingImage from '../assets/Auditing-removebg-preview.png';
import CapacityBuildingImage from '../assets/file.png';
import RecruitmentImage from '../assets/recruitment.png';
import OlympiadsImage from '../assets/olympiads-removebg-preview.png';
import AwarenessImage from '../assets/Free-Awareness.png';
import CounselingImage from '../assets/consultant-removebg-preview.png';
import StudyAbroadImage from '../assets/study-abroad-removebg-preview.png';
import PlaySchoolImage from '../assets/file (1).png';
import MarineImage from '../assets/Marine.png';
import StemWorkshopsImage from '../assets/stem-based-workshops-removebg-preview.png';

const servicesData = [
  {
    title: "SQUAA / Auditing of Schools",
    description: (
      <>
        According to CBSE, SQUAA refers to a voluntary method of quality assurance, mostly achieved through interventional and participative processes carried out by peer assessors on behalf of an agency or board. It is both a process and a status.
        <ul className="list-disc list-inside mt-2">
          <li>Help to constitute the school Assessment Committee</li>
          <li>Orient the Principal, management, and committee</li>
          <li>Audit and improve weak areas with existing practices</li>
        </ul>
      </>
    ),
    image: AuditingImage,
  },
  {
    title: "Capacity Building Programs",
    description: (
      <>
        Skillshare India doesn’t believe in the one-size-fits-all policy and thus conducts custom-designed workshops/training for various national and international schools on myriad topics in line with the needs assessment of the school teachers and students.
      </>
    ),
    image: CapacityBuildingImage,
  },
  {
    title: "Recruitment / Job Hiring",
    description: (
      <>
        We know that teachers are the soul of educational institutions and non-academic employees are the arms. Skillshare works to get the best-in-class employees for every department to ensure the sustainable growth of the business.
      </>
    ),
    image: RecruitmentImage,
  },
  {
    title: "International Olympiads",
    description: (
      <>
        SkillShare focuses on regular Olympiads at local, national, and international levels. To instill a competitive spirit and extend their wings, students are trained and motivated to participate in such events.
      </>
    ),
    image: OlympiadsImage,
  },
  {
    title: "Free Awareness / Enrichment Programs",
    description: (
      <>
        Skillshare organizes various Awareness and Enrichment programs on:
        <ul className="list-disc list-inside mt-2">
          <li>Menstrual Hygiene</li>
          <li>Mother’s Health Care</li>
          <li>Women Empowerment</li>
          <li>Swachhata Cleanliness</li>
          <li>Safe Touch – Unsafe Touch</li>
          <li>Educational Counseling</li>
          <li>Digital Literacy Programs</li>
          <li>Engagement with Parents</li>
          <li>Oral Hygiene Awareness Camp</li>
        </ul>
      </>
    ),
    image: AwarenessImage,
  },
  {
    title: "Counseling / Career Guidance",
    description: (
      <>
        Skillshare helps to improve relationships, build confidence, overcome peer pressure, and cope with stress, anxiety, and depression. It empowers individuals by changing perspectives and equipping them with skill sets to become better versions of themselves. We provide facilities for aptitude tests and psychometric assessments as well.
      </>
    ),
    image: CounselingImage,
  },
  {
    title: "Study Abroad",
    description: (
      <>
        We guide, mentor, and handhold students with global possibilities by broadening their scope and widening their dreams through global education and study abroad opportunities.
      </>
    ),
    image: StudyAbroadImage,
  },
  {
    title: "Play Schools Franchise",
    description: (
      <>
        Our Play School Franchise model proves to be more successful than proprietorship, as it comes with benefits of short installation time and lower costs. It's easier to get financing for a franchise than for a sole business, and it includes initial training and a blueprint for success.
      </>
    ),
    image: PlaySchoolImage,
  },
  {
    title: "Marine Engineering (India/UK)",
    description: (
      <>
        We offer a full residential course of 2 years, with the first year in India and the second in the UK. Students can enjoy promising career prospects and become Marine Engineering Officers at a young age.
      </>
    ),
    image: MarineImage,
  },
  {
    title: "STEM-based Workshops",
    description: (
      <>
        <ul className="list-disc list-inside mt-2">
          <li>We provide a full day of engaging hands-on STEM learning.</li>
          <li>Explore relevant Science, Engineering, or pedagogical themes.</li>
          <li>Develop science, engineering, and innovation process skills.</li>
        </ul>
      </>
    ),
    image: StemWorkshopsImage,
  },
];


   

const Services = () => {

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
          const element = document.getElementById(hash.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-teal-50 to-purple-50">
    <h2 className="text-5xl font-extrabold text-center text-teal-800 mb-12">Our Services</h2>
    <div className="max-w-7xl mx-auto px-6 space-y-20">
      {servicesData.map((service, index) => (
        <motion.div
         id={`service-${index}`} key={index} // Unique ID for each service
          className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} space-y-4 lg:space-y-0 lg:space-x-8`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <div className="flex-1">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-auto max-h-72 object-contain rounded-2xl shadow-md transition-transform transform hover:scale-105"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-3xl font-semibold text-teal-800 mb-2">{service.title}</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">{service.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
  );
};

export default Services;
