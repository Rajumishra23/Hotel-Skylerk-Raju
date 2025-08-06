// HotelBookingPage.jsx
import React, { useState } from 'react';
import BookingForm from './BookingForm';
import HotelCard from './HotelCard'; // also needed if using HotelCard
import SearchFilter from "./SearchFilter"


import image1 from "../assets/Image/Slider/Room1.jpg";
import image2 from "../assets/Image/Slider/Room2.jpg";
import image3 from "../assets/Image/Slider/Room3.jpg";
import image4 from "../assets/Image/Slider/Room4.jpg";
import image5 from "../assets/Image/Slider/Room5.jpg";
import image6 from "../assets/Image/Slider/Room6.jpg";
import image7 from "../assets/Image/Slider/Room7.jpg";
import image8 from "../assets/Image/Slider/Room8.jpg";
import image9 from "../assets/Image/Slider/Room9.jpg";
import image10 from "../assets/Image/Slider/Room10.jpg";
import image11 from "../assets/Image/Slider/Room11.jpg";
import image12 from "../assets/Image/Slider/Room12.webp";

const initialHotels = [
  {
    id: 1,
    name: 'Ocean View Resort',
    location: 'Miami',
    price: 12450, 
    rating: 4.5,
    image: image1,
    roomTypes: ['Standard', 'Deluxe', 'Suite'],
    description: 'Wake up to the sound of waves and enjoy stunning ocean views in sunny Miami.',
  },
  {
    id: 2,
    name: 'Mountain Retreat',
    location: 'Aspen',
    price: 16600,
    rating: 4.8,
    image: image2,
    roomTypes: ['Standard', 'Premium', 'Cabin'],
    description: 'Nestled in the snowy peaks of Aspen, perfect for ski lovers and nature seekers.',
  },
  {
    id: 3,
    name: 'City Haven Hotel',
    location: 'New York',
    price: 14940,
    rating: 4.2,
    image: image3,
    roomTypes: ['Single', 'Double', 'Penthouse'],
    description: 'Modern comfort in the heart of New York City with skyline views and top amenities.',
  },
  {
    id: 4,
    name: 'Desert Mirage Inn',
    location: 'Phoenix',
    price: 10790,
    rating: 4.1,
    image: image4,
    roomTypes: ['Standard', 'Family Suite'],
    description: 'A warm desert escape with stylish rooms and great southwestern cuisine.',
  },
  {
    id: 5,
    name: 'Beach Paradise Hotel',
    location: 'Goa',
    price: 14110,
    rating: 4.6,
    image: image5,
    roomTypes: ['Standard', 'Deluxe', 'Sea View'],
    description: 'Just steps from the beach, experience Goa’s vibrant sunsets and seafood delights.',
  },
  {
    id: 6,
    name: 'Lakefront Lodge',
    location: 'Nainital',
    price: 11620,
    rating: 4.3,
    image: image6,
    roomTypes: ['Standard', 'Balcony View'],
    description: 'Serenity by the lake—ideal for peaceful stays and romantic getaways.',
  },
  {
    id: 7,
    name: 'Royal Palace Hotel',
    location: 'Jaipur',
    price: 18260,
    rating: 4.7,
    image: image7,
    roomTypes: ['Heritage', 'Suite', 'Maharaja'],
    description: 'Live like royalty in this heritage-style hotel rich in culture and tradition.',
  },
  {
    id: 8,
    name: 'Downtown Comfort Inn',
    location: 'Chicago',
    price: 13280,
    rating: 4.0,
    image: image8,
    roomTypes: ['Single', 'Double'],
    description: 'Cozy and convenient, right in downtown Chicago for business or leisure.',
  },
  {
    id: 9,
    name: 'Green Valley Resort',
    location: 'Manali',
    price: 12035,
    rating: 4.4,
    image: image9,
    roomTypes: ['Standard', 'Cottage', 'Suite'],
    description: 'Breathe in the fresh Himalayan air surrounded by lush green valleys.',
  },
  {
    id: 10,
    name: 'Skyline Hotel',
    location: 'Dubai',
    price: 20750,
    rating: 4.9,
    image: image10,
    roomTypes: ['Luxury', 'Executive', 'Sky Suite'],
    description: 'Experience luxury high above Dubai with panoramic skyline views.',
  },
  {
    id: 11,
    name: 'Sunset Boulevard Hotel',
    location: 'Los Angeles',
    price: 17490,
    rating: 4.5,
    image: image11,
    roomTypes: ['Standard', 'Hollywood Suite'],
    description: 'Stay where stars shine bright, minutes from Hollywood’s famous attractions.',
  },
  {
    id: 12,
    name: 'Forest Hill Retreat',
    location: 'Coorg',
    price: 12900,
    rating: 4.2,
    image: image12,
    roomTypes: ['Cottage', 'Tree House', 'Luxury Suite'],
    description: 'A peaceful jungle stay with nature walks, fresh air, and total relaxation.',
  },
];

export default function HotelBookingPage() {
  const [filteredHotels, setFilteredHotels] = useState(initialHotels);
  const [selectedHotel, setSelectedHotel] = useState(null);

  const handleSearch = ({ location, priceRange }) => {
    const results = initialHotels.filter(
      (hotel) =>
        hotel.location.toLowerCase().includes(location.toLowerCase()) &&
        hotel.price <= priceRange
    );
    setFilteredHotels(results);
  };

  const handleClear = () => {
    setFilteredHotels(initialHotels);
  };

  const handleBook = (hotel) => {
    setSelectedHotel(hotel);
  };

  const handleCloseBooking = () => {
    setSelectedHotel(null);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <SearchFilter onSearch={handleSearch} onClear={handleClear} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {filteredHotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} onBook={handleBook} />
        ))}
      </div>
      {selectedHotel && (
        <BookingForm hotel={selectedHotel} onClose={handleCloseBooking} />
      )}
    </div>
  );
}
