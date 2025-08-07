import React from 'react';
import { motion } from 'framer-motion';
import Grandballeroom from './../assets/Videos/Grandballeroom.mp4';

const venues = [
  {
    id: 1,
    name: 'Grand Ballroom',
    description: 'Our elegant Grand Ballroom is perfect for lavish weddings, corporate galas, and large-scale celebrations with up to 500 guests.',
    image: Grandballeroom,
    isVideo: true,
  },
  {
    id: 2,
    name: 'Conference Room',
    description:
      'Host productive meetings and seminars in our modern conference room, equipped with advanced AV technology and seating for up to 100 attendees.',
    image:
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Outdoor Garden',
    description:
      'Celebrate under the stars in our beautifully landscaped garden, ideal for outdoor weddings, receptions, and cocktail parties with up to 200 guests.',
    image:
      'https://st.hzcdn.com/simgs/pictures/landscapes/bluestone-naperville-kd-landscape-img~a3e1b5740b5cd483_14-6278-1-f69bb59.jpg',
  },
];

const EventVenue = () => {
  return (
    <motion.section
      className="min-h-screen bg-gradient-to-br from-[#fef4ed] to-[#fff8f2] py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h1
          className="text-4xl font-bold text-center text-gray-800 mb-2"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Event Venues
        </motion.h1>

        {/* Gradient Underline */}
        <motion.div
          className="w-24 h-[3px] bg-gradient-to-r from-[#f4a261] via-[#e07a5f] to-[#b85c38] rounded-full mx-auto mb-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          style={{ transformOrigin: 'left' }}
        />

        {/* Description */}
        <motion.p
          className="text-center text-gray-700 mb-12 max-w-2xl mx-auto"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Discover our versatile event spaces designed to make your special occasions unforgettable, from grand celebrations to professional gatherings.
        </motion.p>

        {/* Venue Cards */}
        <div className="space-y-12">
          {venues.map((venue, index) => (
            <motion.div
              key={venue.id}
              className={`flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Media */}
              <div className="md:w-1/2">
                {venue.isVideo ? (
                  <video
                    src={venue.image}
                    controls
                    autoPlay
                    muted
                    loop
                    className="w-full h-64 md:h-96 object-cover"
                  />
                ) : (
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-64 md:h-96 object-cover"
                  />
                )}
              </div>

              {/* Content */}
              <div className="md:w-1/2 p-6">
                <h2 className="text-2xl font-semibold text-[#b85c38] mb-3">{venue.name}</h2>
                <p className="text-gray-700">{venue.description}</p>
                <button className="mt-4 bg-[#b85c38] text-white px-4 py-2 rounded-md hover:bg-[#a14a2c] transition-colors duration-300">
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default EventVenue;