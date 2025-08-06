import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import image1 from "../assets/Image/Slider/Room1.jpg"; // Replace with your actual image paths
import image2 from "../assets/Image/Slider/Room2.jpg";
import image3 from "../assets/Image/Slider/Room3.jpg";
import image4 from "../assets/Image/Slider/Room4.jpg";
import image5 from "../assets/Image/Slider/Room5.jpg";

const images = [image1, image2, image3, image4, image5];

export default function InstagramGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-white py-12 px-4 text-center">
      <h4 className="text-sm text-gray-500 tracking-widest uppercase mb-2">Our Instagram</h4>
      <h2 className="text-3xl font-bold mb-10">Hotel Skylark</h2>

      <div className="flex space-x-4 overflow-x-auto px-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative w-64 h-64 flex-shrink-0 rounded-lg overflow-hidden cursor-pointer group"
            onClick={() => setSelectedImage(img)}
          >
            <img src={img} alt={`gallery-${index}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <FaInstagram className="text-white text-4xl" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg relative max-w-3xl w-full">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <img src={selectedImage} alt="Selected" className="w-full h-auto rounded-md" />
            <a
              href="https://www.instagram.com/Hotel_Skylark"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-pink-600 hover:underline"
            >
              <FaInstagram /> View on Instagram
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
