import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { useSwipeable } from 'react-swipeable';
import { useFirebase } from '../Context/firebase.jsx';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Gallery = () => {
  const { displayPhotos } = useFirebase();
  const [photosByCategory, setPhotosByCategory] = useState({});
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      const photos = await displayPhotos();
      const categorizedPhotos = photos.reduce((acc, photo) => {
        const { category } = photo;
        if (!acc[category]) acc[category] = [];
        acc[category].push(photo);
        return acc;
      }, {});
      setPhotosByCategory(categorizedPhotos);
    };

    fetchPhotos();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    initialSlide: selectedImageIndex,
    afterChange: (index) => setSelectedImageIndex(index),
  };

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setSelectedImageIndex((prev) => (prev + 1) % photosByCategory[selectedCategory].length),
    onSwipedRight: () =>
      setSelectedImageIndex((prev) =>
        (prev - 1 + photosByCategory[selectedCategory].length) % photosByCategory[selectedCategory].length
      ),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    hover: { scale: 1.05 },
  };

  return (
    <div className="container mx-auto p-8">
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-8 text-gray-800"
      >
        Our Gallery
      </motion.h1>

      {Object.keys(photosByCategory).map((category) => (
        <section key={category} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">{category}</h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {photosByCategory[category].map((photo, index) => (
              <motion.div
                key={photo.id}
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                variants={item}
                whileHover="hover"
                onClick={() => {
                  setSelectedImageIndex(index);
                  setSelectedCategory(category);
                }}
              >
                <motion.img
                  src={photo.imageUrl}
                  alt={`Gallery image ${index + 1}`}
                  className="object-cover w-full h-64"
                />
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                >
                  <span className="text-white font-semibold text-lg">
                    View Image {index + 1}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      ))}

      {selectedImageIndex !== null && selectedCategory !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => {
            setSelectedImageIndex(null);
            setSelectedCategory(null);
          }}
        >
          <div
            className="relative w-full max-w-4xl mx-auto"
            {...handlers}
            onClick={(e) => e.stopPropagation()}
          >
            <Slider {...sliderSettings}>
              {photosByCategory[selectedCategory].map((photo, index) => (
                <div key={photo.id}>
                  <img
                    src={photo.imageUrl}
                    alt={`Gallery image ${index + 1}`}
                    className="object-cover w-full h-screen md:h-auto"
                  />
                </div>
              ))}
            </Slider>

            {/* Close Button (Existing "×" button) */}
            <button
              className="absolute top-4 right-4 text-white text-2xl bg-gray-800 rounded-full p-2"
              onClick={() => {
                setSelectedImageIndex(null);
                setSelectedCategory(null);
              }}
            >
              &times;
            </button>

            {/* Close Button (New "Close" button at the bottom) */}
            <button
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-gray-700 px-4 py-2 rounded-md"
              onClick={() => {
                setSelectedImageIndex(null);
                setSelectedCategory(null);
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
