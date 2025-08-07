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
      className="px-4 py-10 md:px-10 bg-gradient-to-br from-[#fef4ed] to-[#fff8f2] min-h-screen"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="text-center mb-10">
        <motion.h2
          className="text-4xl font-bold  text-gray-800 mb-2"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Our_Facilities
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 mb-12"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Take advantage of our exceptional facilities. From relaxation to recreation, we have everything you need for an unforgettable stay.
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        {facilities.map((facility) => (
          <motion.div
            key={facility.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.03 }}
          >
            <motion.img
              src={facility.image}
              alt={facility.name}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            />
            <div className="p-4">
              <motion.h3
                className="text-xl font-semibold text-[#b85c38]"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {facility.name}
              </motion.h3>
              <motion.p
                className="text-gray-600 mt-2 text-sm leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {facility.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Facilities;