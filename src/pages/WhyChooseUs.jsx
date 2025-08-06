import roomImage from '../assets/Image/Slider/serve img11.jpg';
import { FaHotel, FaHandsHelping, FaMapMarkerAlt, FaSwimmingPool } from 'react-icons/fa';
import InstagramGallery from './InstagramGallery';
const reasons = [
  {
    icon: <FaHotel className="text-2xl text-[#b85c38]" />,
    title: 'Versatile Venues:',
    desc: 'From intimate gatherings to grand celebrations, our spaces are as flexible as your imagination.',
  },
  {
    icon: <FaHandsHelping className="text-2xl text-[#b85c38]" />,
    title: 'Unmatched Hospitality:',
    desc: 'Our dedicated team ensures every detail is taken care of, so you can focus on enjoying your time.',
  },
  {
    icon: <FaMapMarkerAlt className="text-2xl text-[#b85c38]" />,
    title: 'Prime Location:',
    desc: 'Conveniently located on the National Highway, Shubhanjali offers easy accessibility for travelers while providing a serene retreat.',
  },
  {
    icon: <FaSwimmingPool className="text-2xl text-[#b85c38]" />,
    title: 'Luxurious Amenities:',
    desc: 'Indulge in our premium accommodations, gourmet dining, and recreational facilities.',
  },
];

export default function WhyChooseUs() {
  return (
          <>
    <section className="bg-[#fef4ed] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-6 animate-fade-in-left">
          <h4 className="uppercase text-sm tracking-widest font-semibold text-gray-700">Why</h4>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Choose Us?</h2>
          {reasons.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="mt-1">{item.icon}</div>
              <div>
                <h3 className="font-bold text-lg text-brown-800">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 animate-fade-in-right">
          <img
            src={roomImage}
            alt="Shomany Resort Room"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
          <InstagramGallery />
    </>
  );
}
