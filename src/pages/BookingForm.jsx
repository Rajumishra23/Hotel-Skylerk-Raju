import React from "react";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
// import Cards from "./pages/Cards";
// import { hotelData } from "./pages/data";

const App = () => {
  const [filteredData, setFilteredData] = useState(hotelData);

  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();

    const newData = hotelData.filter((hotel) =>
      hotel.name.toLowerCase().includes(searchValue)
    );
    setFilteredData(newData);
  };

  return (
    <>
      <div className="w-full bg-white shadow-md h-20 flex justify-between items-center px-8">
        <h1 className="text-3xl font-bold">🏨 HotelBook</h1>
        <div className="flex items-center gap-2 border px-4 py-2 rounded-full">
          <input
            onChange={handleSearch}
            type="text"
            placeholder="Search Hotels"
            className="outline-none"
          />
          <IoSearch />
        </div>
      </div>

      <div className="px-10 py-4">
        <h2 className="text-xl font-semibold">Top Hotels</h2>
        <p className="text-gray-500 text-sm">
          Search your favourite hotels and enjoy your vacation.
        </p>

        {/* Hotels */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((hotel) => (
            <Cards
              key={hotel.id}
              name={hotel.name}
              location={hotel.location}
              price={hotel.price}
              image={hotel.image}
              rating={hotel.rating}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
