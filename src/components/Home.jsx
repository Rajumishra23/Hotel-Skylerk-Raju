import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import WeOffer from '../pages/WeOffer';
import About from '../components/About';
import { Link } from 'react-router-dom';
import hotelimg from '../assets/Image/Slider/hotelimg.png';

const sliderImages = [
  hotelimg,
  require('../assets/Image/Slider/Image2.jpg'),
  require('../assets/Image/Slider/Image3.jpeg'),
  require('../assets/Image/Slider/Image4.jpg'),
  require('../assets/Image/Slider/Image5.jpg'),
  require('../assets/Image/Slider/Image7.avif'),
];

function WelcomeSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="overflow-hidden"
        >
          <img
            src={hotelimg}
            alt="Welcome"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome to <span className="text-yellow-500">Hotel Skylark</span>
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Experience the perfect blend of comfort, luxury, and world-class hospitality.
            Our beautifully designed rooms, top-notch amenities, and exceptional services
            ensure an unforgettable stay for our guests.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-yellow-500 text-white font-medium rounded-full hover:bg-yellow-600 transition-all duration-300"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero Slider */}
      <header className="relative h-[75vh] overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          effect="fade"
          className="w-full h-full"
        >
          {sliderImages.map((image, idx) => (
            <SwiperSlide key={idx}>
              <motion.img
                src={image}
                alt={`Slide ${idx + 1}`}
                className="w-full h-full object-cover"
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
              />
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white px-4 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <motion.h1
                  className="text-2xl sm:text-2xl md:text-4xl font-bold mb-3 text-center tracking-wide"
                  initial={{ y: -40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  Welcome to <span className="text-yellow-400">Skylark Hotel</span>
                </motion.h1>

                <motion.p
                  className="text-sm sm:text-base md:text-lg text-center max-w-xl"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  Luxury Stay • Unmatched Comfort • World-Class Hospitality
                </motion.p>

                <Link to="/booking">
                  <motion.button
                    className="mt-5 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium rounded-full shadow-md transition-all duration-300 hover:scale-105"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    Book Now
                  </motion.button>
                </Link>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </header>

      <WelcomeSection />
      <div className="py-8">
        <About />
      </div>
      <div className="py-8">
        <WeOffer />
      </div>
    </>
  );
}
