import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/Image/Logo/wifi.webp';
import img2 from '../assets/Image/Logo/pool.jpg';
import img3 from '../assets/Image/Logo/spa.jpg';
import img4 from '../assets/Image/Logo/gyme.jpg';
import img5 from '../assets/Image/Logo/Restaurant.jpg';
import img6 from '../assets/Image/Logo/Parking.jpg';

const facilities = [
  {
    id: 1,
    name: "Free Wi-Fi",
    image: img1,
    description: "Stay connected with our high-speed wireless internet available throughout the hotel."
  },
  {
    id: 2,
    name: "Swimming Pool",
    image: img2,
    description: "Relax and refresh in our luxurious outdoor swimming pool."
  },
  {
    id: 3,
    name: "Spa & Wellness",
    image: img3,
    description: "Enjoy rejuvenating spa therapies to unwind after a long day."
  },
  {
    id: 4,
    name: "Fitness Center",
    image: img4,
    description: "Keep up with your workout routine in our well-equipped gym."
  },
  {
    id: 5,
    name: "In-House Restaurant",
    image: img5,
    description: "Taste a variety of local and international dishes in our fine dining restaurant."
  },
  {
    id: 6,
    name: "Valet Parking",
    image: img6,
    description: "Enjoy the convenience of secure and free valet parking."
  }
];

const Facilities = () => {
  return (
    <motion.section
      className="px-4 py-10 md:px-10 bg-gray-100 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-10">
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-2"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Our Facilities
        </motion.h2>
        <motion.p
          className="text-gray-600"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Everything you need to make your stay comfortable and memorable.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {facilities.map((facility, index) => (
          <motion.div
            key={facility.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={facility.image}
              alt={facility.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{facility.name}</h3>
              <p className="text-gray-600 mt-2">{facility.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Facilities;