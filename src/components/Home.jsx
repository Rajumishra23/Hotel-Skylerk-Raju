import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import WeOffer from '../pages/WeOffer';
import { Link } from 'react-router-dom';

const sliderImages = [
  require('../assets/Image/Slider/Image1.avif'),
  require('./../assets/Image/Slider/Image2.jpg'),
  require('./../assets/Image/Slider/Image3.jpeg'),
  require('./../assets/Image/Slider/Image4.jpg'),
  require('./../assets/Image/Slider/Image5.jpg'),
  require('./../assets/Image/Slider/Image7.avif'),
];

export default function Home() {
  return (
    <>
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
              <img
                src={image}
                alt={`Slide ${idx + 1}`}
                className="w-full h-full object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
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
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  Luxury Stay • Unmatched Comfort • World-Class Hospitality
                </motion.p>

                <Link to="/booking">
                  <motion.button
                    className="mt-5 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium rounded-full shadow-md transition-all duration-300 hover:scale-105"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    Book Now
                  </motion.button>
                </Link>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </header>

      <div className="py-8">
        <WeOffer />
      </div>
    </>
  );
}
