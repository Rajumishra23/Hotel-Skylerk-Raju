import { Link } from 'react-router-dom';
import Logo from '../assets/Image/Logo/Logo-hotel.png';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
        {/* Logo & Brand */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={Logo}
            alt="Hotel Skylark Logo"
            className="h-12 w-auto object-contain"
          />
          <span className="text-2xl font-bold text-gray-800">Hotel Skylark</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-gray-800 font-semibold uppercase text-sm tracking-wide">
          <Link to="/" className="hover:text-[#B38C5B] transition">Home</Link>
          <Link to="/room" className="hover:text-[#B38C5B] transition">Rooms</Link>
          <Link to="/booking" className="hover:text-[#B38C5B] transition">Booking</Link>
          <Link to="/facilities" className="hover:text-[#B38C5B] transition">Facilities</Link>
          <Link to="/gallery" className="hover:text-[#B38C5B] transition">Gallery</Link>
          <Link to="/event" className="hover:text-[#B38C5B] transition">Event Venue</Link>
          <Link
            to="/contact"
            className="bg-[#B38C5B] text-white px-6 py-2 rounded-md hover:bg-[#a27b4f] transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
