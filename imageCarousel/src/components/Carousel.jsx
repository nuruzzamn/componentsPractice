// src/Carousel.js
import React, { useState } from "react";

const images = [
  "https://via.placeholder.com/600x400/ff7f7f/333333?text=Image+1",
  "https://via.placeholder.com/600x400/77aaff/333333?text=Image+2",
  "https://via.placeholder.com/600x400/77ffaa/333333?text=Image+3",
  "https://via.placeholder.com/600x400/ffbb33/333333?text=Image+4",
];

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-[600px] max-w-2xl mx-auto mt-8 overflow-hidden rounded-lg shadow-lg">
      {/* Carousel Inner */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(${-currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="w-full object-cover"
          />
        ))}
      </div>

      {/* Prev and Next Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        &#10094;
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        &#10095;
      </button>
    </div>
  );
};
