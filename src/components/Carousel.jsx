import React, { useState } from 'react';

const images = [
  'https://via.placeholder.com/400',
  'https://via.placeholder.com/400',
  'https://via.placeholder.com/400',
  'https://via.placeholder.com/400'
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    return (
      <div className="carousel">
        <button onClick={prevSlide}>Prev</button>
        <img src={images[currentIndex]} alt="carousel-slide" />
        <button onClick={nextSlide}>Next</button>
      </div>
    );
  };
  
  export default Carousel;