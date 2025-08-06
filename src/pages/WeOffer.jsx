import { motion } from 'framer-motion';

import Img1 from '../assets/Image/Slider/weddings.jpeg';
import Img2 from '../assets/Image/Slider/birthday.webp';
import Img3 from '../assets/Image/Slider/parties.webp';
import Img4 from '../assets/Image/Slider/meetings.jpg';

import food1 from '../assets/Image/Slider/FoodItems/food1.jpg';
import food2 from '../assets/Image/Slider/FoodItems/food2.jpg';
import food3 from '../assets/Image/Slider/FoodItems/food3.jpg';
import food4 from '../assets/Image/Slider/FoodItems/food4.jpg';
import food5 from '../assets/Image/Slider/FoodItems/food5.jpg';
import food6 from '../assets/Image/Slider/FoodItems/food6.jpg';

import ResortHero from './ResortHero';

// All services
const services = [
  {
    title: 'Weddings & Engagements',
    desc: 'Host your dream celebration in our picturesque outdoor venues or grand halls.',
    img: Img1,
  },
  {
    title: 'Birthday',
    desc: 'Whether it’s a birthday or any special occasion, we make it memorable.',
    img: Img2,
  },
  {
    title: 'Parties & Events',
    desc: 'Celebrate with elegance in our beautifully designed party spaces.',
    img: Img3,
  },
  {
    title: 'Conferences & Meetings',
    desc: 'Professional spaces for business meetings and corporate gatherings.',
    img: Img4,
  },
  {
    title: 'Delicious Food',
    desc: 'Taste a variety of dishes made with love by our expert chefs.',
    foodImages: [food1, food2, food3, food4, food5, food6],
    isFoodSection: true,
  },
];

// Animation variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const card = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

export default function WeOffer() {
  return (
    <>
      <section className="bg-[#fff7f0] py-14 px-4 md:px-12">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-900 mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="text-[#d97706] text-2xl">What</span>
          <br />
          We Offer
        </motion.h2>

        {/* Fixed Layout Issue: Removed justify-items-center */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={card}
              className="relative rounded-xl overflow-hidden shadow-md group w-full max-w-sm mx-auto h-[300px] cursor-pointer"
            >
              {service.isFoodSection ? (
                <div className="w-full h-full grid grid-cols-2 gap-1">
                  {service.foodImages.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`food-${i}`}
                      className="w-full h-36 object-cover"
                    />
                  ))}
                </div>
              ) : (
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-60 transition duration-700 flex flex-col justify-end p-4 text-white">
                <h3 className="text-lg font-bold mb-1">{service.title}</h3>
                <p className="text-xs text-gray-200">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <ResortHero />
    </>
  );
}
