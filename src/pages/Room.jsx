import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img from './../assets/Hotel-Image/img-beding.jpg';
import Hotel_img_2 from '../assets/Hotel-Image/Hotel_img-2.jpg';
import Hotel_img_3 from '../assets/Hotel-Image/Hotel_img-3.jpg';

const features = [
  { name: "Luxurious Rooms", icon: "🛏️" },
  { name: "24/7 Room Service", icon: "🍽️" },
  { name: "High-Speed Wi-Fi", icon: "📶" },
  { name: "Swimming Pool", icon: "🏊" },
  { name: "Fine Dining Restaurant", icon: "🍴" },
  { name: "Fitness Center", icon: "🏋️" },
  { name: "Spa & Wellness", icon: "🧘" },
  { name: "Airport Shuttle", icon: "✈️" },
];

export default function Room() {
  return (
    <div className="px-4 sm:px-8 lg:px-16 py-8 text-center bg-gray-50 overflow-hidden">
      {/* Heading with Gradient Color */}
      <motion.h2
        className="text-4xl font-bold  text-gray-800 mb-2"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our_Rooms
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-center text-gray-600 mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Welcome to Hotel Skylerk — where comfort meets elegance. Our rooms are thoughtfully designed to offer a peaceful retreat with modern amenities and warm hospitality. Whether you're visiting for leisure or business, we ensure a relaxing and memorable stay.
      </motion.p>

      {/* Hero Image */}
      <motion.div
        className="relative mb-12"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src={img}
          alt="Hotel View"
          className="w-full h-[60vh] sm:h-[75vh] object-cover rounded-lg shadow-xl"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>
      </motion.div>

      {/* Two Room Images */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[Hotel_img_2, Hotel_img_3].map((image, i) => (
            <motion.div
              key={i}
              className="relative rounded-lg overflow-hidden shadow-lg group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={image}
                alt={`Room ${i + 1}`}
                className="w-full h-[350px] object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">
                  {i === 0 ? 'Deluxe Room' : 'Executive Room'}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-16">
        <motion.h2
          className="text-3xl font-bold mb-8 uppercase tracking-wide bg-gradient-to-r from-[#b85c38] via-[#e07a5f] to-[#f4a261] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why Choose Hotel Skylerk
        </motion.h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="mySwiper"
        >
          {features.map((feature, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition h-48 flex flex-col items-center justify-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-4xl mb-4">{feature.icon}</span>
                <h3 className="text-md font-semibold bg-gradient-to-r from-[#b85c38] via-[#e07a5f] to-[#f4a261] bg-clip-text text-transparent">
                  {feature.name}
                </h3>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
