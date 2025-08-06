// HotelRoomModal.jsx
import React, { useState } from "react";


const HotelRoomModal = ({ hotel, onClose }) => {
  const [roomType, setRoomType] = useState("");

  const handleBooking = () => {
    if (roomType) {
     let price = "";
if (roomType === "Single Room") price = 1000;
else if (roomType === "Double Room") price = 2000;
else if (roomType === "Suite") price = 5000;

alert(`Booking confirmed for ${hotel.name} - ${roomType} at ₹${price}`);

      onClose();
    } else {
      alert("Please select a room type.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-lg font-bold"
        >
          ✕
        </button>
        <h2 className="text-xl font-semibold mb-4">{hotel.name}</h2>
        <p className="mb-2">{hotel.description}</p>
        <p className="mb-4">Location: {hotel.location}</p>
        <div className="mb-4">
          <label className="block mb-2 font-medium">Choose a room type:</label>
          <select
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="">Select Room</option>
            <option value="Single Room">Single Room - ₹1000</option>
            <option value="Double Room">Double Room - ₹2000</option>
            <option value="Suite">Suite - ₹5000</option>
          </select>
        </div>
        <button
          onClick={handleBooking}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default HotelRoomModal;
