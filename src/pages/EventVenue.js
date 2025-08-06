import React from 'react';
import { motion } from 'framer-motion';
import Grandballeroom from './../assets/Videos/Grandballeroom.mp4';

const venues = [
  {
    id: 1,
    name: 'Grand Ballroom',
    description: 'Our elegant Grand Ballroom is perfect...',
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
      className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-center text-gray-800 mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Event Venues
        </motion.h1>
        <motion.p
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover our versatile event spaces designed to make your special occasions unforgettable, from grand celebrations to professional gatherings.
        </motion.p>
        <div className="space-y-12">
          {venues.map((venue, index) => (
            <motion.div
              key={venue.id}
              className={`flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
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
              <div className="md:w-1/2 p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">{venue.name}</h2>
                <p className="text-gray-600">{venue.description}</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
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
