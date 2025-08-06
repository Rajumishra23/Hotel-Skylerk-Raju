// HotelCard.jsx
import React from 'react';

export default function HotelCard({ hotel, onBook }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition-all">
      <img src={hotel.image} alt={hotel.name} className="w-full md:w-1/2 h-48 object-cover rounded-br-2xl rounded-tl-2xl" />
      <div className="p-4 flex-1">
        <h3 className="text-xl font-bold">{hotel.name}</h3>
        <p className="text-gray-600">{hotel.description}</p>
        <p>{hotel.location}</p>
        <p className="text-lg font-semibold">₹{hotel.price}/night</p>
        <p className="text-yellow-500">{'★'.repeat(Math.floor(hotel.rating))} ({hotel.rating})</p>
        <button
          onClick={() => onBook(hotel)}
          className="mt-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
