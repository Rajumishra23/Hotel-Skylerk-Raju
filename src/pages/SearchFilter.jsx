// SearchFilter.jsx
import React, { useState } from 'react';

export default function SearchFilter({ onSearch, onClear }) {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const [priceRange, setPriceRange] = useState(500);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    if (checkIn && checkOut && new Date(checkOut) <= new Date(checkIn)) {
      alert('Check-out date must be after check-in date');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      onSearch({ location, checkIn, checkOut, guests, priceRange });
      setIsLoading(false);
    }, 500);
  };

  const handleClear = () => {
    setLocation('');
    setCheckIn('');
    setCheckOut('');
    setGuests(1);
    setPriceRange(500);
    onClear();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Find Your Perfect Stay</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="Location"
          className="p-3 border rounded-lg"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input type="date" className="p-3 border rounded-lg" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
        <input type="date" className="p-3 border rounded-lg" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
        <input
          type="number"
          placeholder="Guests"
          min="1"
          className="p-3 border rounded-lg"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium">
  Price Range: ₹{priceRange}
</label>

        <input
          type="range"
          min="5000"
          max="50000"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="w-full"
        />
      </div>
      <div className="mt-4 flex space-x-4">
        <button
          onClick={handleSearch}
          disabled={isLoading}
          className={`px-6 py-2 bg-blue-600 text-white rounded-lg ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
        >
          {isLoading ? 'Searching...' : 'Search'}
        </button>
        <button onClick={handleClear} className="px-6 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400">
          Clear
        </button>
      </div>
    </div>
  );
}
