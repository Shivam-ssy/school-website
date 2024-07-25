import React, { useState } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/school.jpg',
    '/playerground.jpg',
    '/department.jpg'
  ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      <div 
        className="flex transition-transform duration-500 opacity-85"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div 
            key={index} 
            className="w-full h-full flex-shrink-0"
            style={{ backgroundImage: `url(${image})` }}
          >
            <img src={image} alt={`Slide ${index}`} className="w-full h-full object-contain " />
          </div>
        ))}
      </div>
      <button
              onClick={nextSlide} 
 
        className="absolute z-50 bottom-2 left-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
      >
         &#10095;
      </button>
      <button 
              onClick={prevSlide} 

        className="absolute z-50 bottom-2 right-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
      >
       &#10094;
      </button>
    </div>
  );
};

export default Carousel;
