import home from '../components/Home';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img from './../assets/Hotel-Image/img-beding.jpg';
import Hotel_img_2 from '../assets/Hotel-Image/Hotel_img-2.jpg';
import Hotel_img_3 from '../assets/Hotel-Image/Hotel_img-3.jpg';
import Hotel_img_4 from '../assets/Hotel-Image/Hotel_img-4.jpg';
import Hotel_img_5 from '../assets/Hotel-Image/Hotel_img-5.jpg';
import Hotel_img_6 from '../assets/Hotel-Image/Hotel_img-6.jpg';
import Hotel_img_7 from '../assets/Hotel-Image/Hotel_img-7.jpg';
import Hotel_img_8 from '../assets/Hotel-Image/Hotel_img-8.jpg';
import Hotel_img_9 from '../assets/Hotel-Image/Hotel_img-9.jpg';
import Hotel_img_10 from '../assets/Hotel-Image/Hotel_img-10.jpg';
import Hotel_img_11 from '../assets/Hotel-Image/Hotel_img-11.jpg';
import Hotel_img_12 from '../assets/Hotel-Image/Hotel_img-12.jpg';
import Hotel_img_13 from '../assets/Hotel-Image/Hotel_img-13.jpg';
import Hotel_img_14 from '../assets/Hotel-Image/Hotel_img-14.jpg';
import Hotel_img_15 from '../assets/Hotel-Image/Hotel_img-15.jpg';
import Hotel_img_16 from '../assets/Hotel-Image/Hotel_img-16.jpg';
import Hotel_img_17 from '../assets/Hotel-Image/Hotel_img-17.jpg';
import Hotel_img_18 from '../assets/Hotel-Image/Hotel_img-18.jpg';
import Hotel_img_19 from '../assets/Hotel-Image/Hotel_img-19.jpg';
import Hotel_img_20 from '../assets/Hotel-Image/Hotel_img-20.jpg';
import Hotel_img_21 from '../assets/Hotel-Image/Hotel_img-21.jpg';

export default function Room() {
  const galleryImages = [
    Hotel_img_2, Hotel_img_3, Hotel_img_4, Hotel_img_5, Hotel_img_6,
    Hotel_img_7, Hotel_img_8, Hotel_img_9, Hotel_img_10, Hotel_img_11,
    Hotel_img_12, Hotel_img_13, Hotel_img_14, Hotel_img_15, Hotel_img_16,
    Hotel_img_17, Hotel_img_18, Hotel_img_19, Hotel_img_20, Hotel_img_21,
  ];

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

  return (
    <>
      
      <div className="px-4 sm:px-8 lg:px-16 py-8 text-center bg-gray-50">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Enjoy Your Stay</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Experience unparalleled comfort and luxury in the heart of the city. Book your room today!
        </p>
        <div className="relative mb-12">
          <img
            src={img}
            alt="Hotel View"
            className="w-full h-[60vh] sm:h-[75vh] object-cover rounded-lg shadow-xl"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>
        </div>

        {/* Hotel Gallery Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">Hotel Galaxy Gallery</h2>
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="mb-4 break-inside-avoid group relative overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={img}
                  alt={`Hotel Image ${index + 2}`}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Details
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Slider Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">Why Choose Us</h2>
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
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition h-48 flex flex-col items-center justify-center text-center">
                  <span className="text-4xl mb-4">{feature.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-800">{feature.name}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </>
  );
}