import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from '../assets/Image/Logo/Logo-hotel.png';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Logo & Social Icons */}
        <div className="flex flex-col items-center text-center mb-10">
          <img src={Logo} className="h-20 mb-4" alt="Hotel Skylark Logo" />
          <h2 className="text-2xl font-semibold text-gold">Hotel<span className="block text-base font-light">Skylark</span></h2>
          <div className="flex gap-6 mt-4">
            <a href="#" className="text-white hover:text-gold"><FaFacebookF /></a>
            <a href="#" className="text-white hover:text-gold"><FaInstagram /></a>
            <a href="#" className="text-white hover:text-gold"><FaTwitter /></a>
            <a href="#" className="text-white hover:text-gold"><FaYoutube /></a>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 text-center md:text-left gap-8 text-sm">
          {/* Call Us */}
          <div>
            <h3 className="text-gold font-semibold text-lg mb-2">Call Us</h3>
            <p>+91 8307777772</p>
          </div>

          {/* Email */}
          <div>
            <h3 className="text-gold font-semibold text-lg mb-2">Email Us</h3>
            <a href="mailto:rajukumar@gmail.com" className="hover:underline">
              HotelSkylerk@gmail.com
            </a>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-gold font-semibold text-lg mb-2">Reach Us</h3>
            <p>NH-09 - service Road</p>
            <p>Garhmukhteshwar, Distt. Hapur, UP. </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-700" />

        {/* Bottom Section */}
        <div className="text-center text-sm md:flex md:justify-between md:items-center">
          {/* Footer Links */}
          <div className="flex justify-center gap-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-gold">Terms and Conditions</a>
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Refund Policy</a>
          </div>

          {/* Copyright */}
          <div className="text-gray-400">
            <p>© {new Date().getFullYear()} - </p>
            <p className="text-xs">Powered by: <span className="text-white font-semibold">BigDesign Software Technologies</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
