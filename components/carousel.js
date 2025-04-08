
import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    image: '/homepagecarousel/carousel1.jpg',
    title: 'Welcome to Our Website',
    description: 'Discover amazing flowers here.',
  },
  {
    id: 2,
    image: '/homepagecarousel/carousel2.jpg',
    title: 'Quality You Can Trust',
    description: 'We provide the best and fresh products.',
  },
  {
    id: 3,
    image: '/homepagecarousel/carousel3.jpg',
    title: 'Join Us Today',
    description: 'Be part of a great living space',
  },
  {
    id: 4,
    image: '/homepagecarousel/carousel4.jpg',
    title: '',
    description: '',
  },
];

const HomePageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Slide Image */}
      <img
        src={slides[currentIndex].image}
        alt={slides[currentIndex].title}
        className="absolute w-full h-full object-cover transition-opacity duration-1000"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-start px-10 md:px-20 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {slides[currentIndex].title}
        </h1>
        <p className="text-lg md:text-2xl max-w-xl">{slides[currentIndex].description}</p>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full text-xl"
      >
        ‹
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full text-xl"
      >
        ›
      </button>
    </div>
  );
};

export default HomePageCarousel;
