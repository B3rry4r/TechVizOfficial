import React, { useState, useEffect } from 'react';
import './FullPageCarousel.scss';
import image1 from '../../Assets/image(1).jpg';
import image2 from '../../Assets/image(2).jpg';
import image3 from '../../Assets/image(3).jpg';

const FullPageCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    image2,
    image1,
    image3
];


useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the duration (in milliseconds) to adjust the sliding speed

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Images ${index + 1}`}
          className={`slide ${index === currentImage ? 'active' : ''}`}
        />
      ))}
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentImage ? 'active' : ''}`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FullPageCarousel;
