import { motion } from 'framer-motion';
import { FaHotel, FaHandsHelping, FaMapMarkerAlt, FaSwimmingPool } from 'react-icons/fa';
import InstagramGallery from './InstagramGallery';

// Video ko public/videos folder me rakho
// Example: public/videos/whychooseus.mp4

const reasons = [
  {
    icon: <FaHotel className="text-2xl text-[#b85c38]" />,
    title: 'Elegant Event Spaces:',
    desc: 'Hotel Skylerk offers a curated selection of indoor and outdoor venues designed for every occasion—from intimate family gatherings to grand wedding celebrations. With customizable layouts, ambient lighting, and refined décor, each space transforms into a canvas for unforgettable memories.',
  },
  {
    icon: <FaHandsHelping className="text-2xl text-[#b85c38]" />,
    title: 'Signature Hospitality:',
    desc: 'At Hotel Skylerk, hospitality is not just a service—it’s a philosophy. Our dedicated team ensures every guest is welcomed with warmth and care, offering personalized attention, curated experiences, and seamless service from check-in to farewell.',
  },
  {
    icon: <FaMapMarkerAlt className="text-2xl text-[#b85c38]" />,
    title: 'Serene Yet Connected:',
    desc: 'Nestled along the National Highway, Hotel Skylerk enjoys prime accessibility while preserving a tranquil atmosphere. Surrounded by nature yet minutes from the city, it’s the perfect blend of convenience and calm for both leisure and business travelers.',
  },
  {
    icon: <FaSwimmingPool className="text-2xl text-[#b85c38]" />,
    title: 'Luxury That Lingers:',
    desc: 'From plush suites and gourmet dining to rejuvenating spa treatments and a sun-kissed poolside, Hotel Skylerk redefines indulgence. Every amenity is thoughtfully designed to elevate your stay and leave a lasting impression.',
  },
];

export default function WhyChooseUs() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#fef4ed] to-[#fff8f2] py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          
          {/* Left Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <motion.h4
              className="uppercase text-sm tracking-widest font-semibold text-[#b85c38]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Why
            </motion.h4>

            <motion.h2
              className="text-4xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-[#b85c38] via-[#e07a5f] to-[#f4a261] bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Choose Us?
            </motion.h2>

            {reasons.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.3 }}
                viewport={{ once: true }}
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 2, delay: idx * 0.2 }}
                  className="mt-1"
                >
                  {item.icon}
                </motion.div>
                <div>
                  <h3 className="font-bold text-lg text-[#b85c38]">{item.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Video */}
          <motion.div
            initial={{ opacity: 0, rotate: -2, scale: 0.95 }}
            whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#b85c38] via-transparent to-[#f4a261] opacity-20 rounded-xl z-10 group-hover:opacity-30 transition-opacity"
            />

            <motion.video
              src="/videos/bed.mp4"
              autoPlay
              loop
              muted
              controls
              className="w-full h-auto rounded-xl shadow-xl relative z-0 group-hover:scale-105 transition-transform duration-500 object-cover"
              whileHover={{ scale: 1.02 }}
            />
          </motion.div>
        </div>
      </section>

      <InstagramGallery />
    </>
  );
}
