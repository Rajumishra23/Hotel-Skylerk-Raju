import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Images
import hotelimg from '../assets/Image/Slider/hotelimg.png'; // ✅ correct path

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeUpVariant = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easing } },
};

const About = () => (
  <section className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      {/* Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-10"
        variants={fadeUpVariant}
        initial="initial"
        animate="animate"
      >
        Extraordinary Getaways Rooted in <span className="text-yellow-600">Heritage, Luxury</span> and Culinary Artistry
      </motion.h2>

      {/* Paragraphs */}
      <div className="space-y-6 text-gray-700 leading-relaxed">
        {[
          "Skylark Hotels & Resorts is an independent collection of luxury boutique hotels and resorts, currently managing close to 100 keys across three distinct properties in India. Our hotels are not just places to stay—they are destinations in themselves, where culture, nature and modernity converge.",
          "Experience the charm of Skylark Hotels & Resorts, where the timeless beauty of the “Asoka Tree,” also known as the sorrow-less tree, resonates through our collection of intimate luxury boutique hotels. Each property embodies the resilience and elegance of this symbol, offering guests an unparalleled blend of comfort, history, and modern luxury.",
          "With a legacy of delivering unique experiences that celebrate the essence of heritage and luxury, Skylark Hotels & Resorts is poised to redefine the art of boutique hospitality in the years to come."
        ].map((text, i) => (
          <motion.p
            key={i}
            variants={fadeUpVariant}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 + i * 0.1 }}
          >
            {text}
          </motion.p>
        ))}

        {/* Lucknow Section */}
        <motion.h3
          className="text-2xl font-semibold text-gray-900 mt-8"
          variants={fadeUpVariant}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.5 }}
        >
          Skylark Hotel Delhi: A Heritage of Elegance
        </motion.h3>
        <motion.p
          variants={fadeUpVariant}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.6 }}
        >
          In Lucknow, Skylark Hotel echoes the city's historic charm and hospitality. This 1936 heritage building, also known as the “white jewel,“ stands as a testament to regal charm and luxury. Inspired by the Nawabi era, our property offers an elegant retreat, inviting guests to immerse themselves in the region's rich cultural tapestry.
        </motion.p>

        <motion.div
          className="my-6 rounded overflow-hidden shadow-lg"
          variants={fadeUpVariant}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.7 }}
        >
          {false ? (
            <video
              src="/videos/Lucknow.mp4"
              autoPlay
              loop
              muted
              controls
              className="w-full object-cover rounded"
            />
          ) : (
            <img
              src={hotelimg}
              alt="Skylark Hotel Lucknow Heritage"
              className="w-full object-cover rounded"
            />
          )}
        </motion.div>

        <motion.p
          variants={fadeUpVariant}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.75 }}
        >
          Indulge in the culinary splendour of Awadhi, European and Asian cuisines. From succulent kebabs to fragrant biryanis, Asian & Italian specials, our skilled culinary team ensures a memorable gastronomic experience. Perfectly located in the heart of Lucknow, the hotel is renowned for its opulent architecture and lush gardens, making it ideal for both serene and grand celebrations.
        </motion.p>

        {/* Corbett Section */}
        <motion.h3
          className="text-2xl font-semibold text-gray-900 mt-8"
          variants={fadeUpVariant}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.8 }}
        >
          Skylark Resort & Spa Corbett: Where Wilderness Meets Sustainable Luxury
        </motion.h3>
        <motion.p
          variants={fadeUpVariant}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.9 }}
        >
          Winner of “Iconic Luxury Resort – Jim Corbett 2025” and “Uttarakhand’s Leading Boutique Hotel – 2025,” this jungle retreat is just a comfortable 6-hour drive from Delhi NCR. Nestled in the serene wilderness of Corbett, it invites guests to reconnect with nature's abundant offerings.
        </motion.p>
        <motion.p
          variants={fadeUpVariant}
          initial="initial"
          animate="animate"
          transition={{ delay: 1 }}
        >
          The resort offers luxurious rooms and suites with captivating views of gardens, forests, and mountains. Embodying sustainable luxury and eco–tourism, we provide immersive experiences through responsible practices. From jungle safaris to curated activities, every moment here connects you with nature.
        </motion.p>

        <motion.div
          className="my-6 rounded overflow-hidden shadow-lg"
          variants={fadeUpVariant}
          initial="initial"
          animate="animate"
          transition={{ delay: 1.1 }}
        >
          {true ? (
            <video
              src="/videos/hotelandar.mp4"
              autoPlay
              loop
              muted
              controls
              className="w-full object-cover rounded"
            />
          ) : (
            <img
              src="Corbett.png"
              alt="Skylark Resort & Spa Corbett"
              className="w-full object-cover rounded"
            />
          )}
        </motion.div>

        {/* Hotels in New Delhi */}
        <motion.h3
          className="text-2xl font-semibold text-gray-900 mt-8"
          variants={fadeUpVariant}
          initial="initial"
          animate="animate"
          transition={{ delay: 1.2 }}
        >
          Hotels in New Delhi – Crafted Hospitality by Skylark Hotels & Resorts
        </motion.h3>
        <motion.p
          variants={fadeUpVariant}
          initial="initial"
          animate="animate"
          transition={{ delay: 1.3 }}
        >
          Our collection in Delhi, Jim Corbett & Goa offers curated intimate hospitality and events, each reflecting our brand's commitment to exceptional immersive guest experiences. By 2026, we aim to double our portfolio, offering exclusive leisure destinations across South Asia.
        </motion.p>

        <motion.div
          className="my-6 rounded overflow-hidden shadow-lg"
          variants={fadeUpVariant}
          initial="initial"
          animate="animate"
          transition={{ delay: 1.4 }}
        >
          {true ? (
            <video
              src="/videos/frontvideo.mp4"
              autoPlay
              loop
              muted
              controls
              className="w-full object-cover rounded"
            />
          ) : (
            <img
              src=""
              alt="Skylark Hotels in New Delhi"
              className="w-full object-cover rounded"
            />
          )}
        </motion.div>
      </div>

      {/* Button */}
      <div className="text-center mt-10">
        <Link to="/about">
          <motion.button
            className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-full hover:bg-yellow-600 transition-colors duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5, ease: easing }}
          >
            Know More
          </motion.button>
        </Link>
      </div>
    </div>
  </section>
);

export default About;
