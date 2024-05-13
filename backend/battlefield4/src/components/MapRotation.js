import React, { useState } from 'react';
import '../styles/MapRotation.css';
import map1 from '../assets/map1.png';
import map2 from '../assets/map2.png';
import map3 from '../assets/map3.png';
import map4 from '../assets/map4.png';
import map5 from '../assets/map5.png';

const MapRotation = () => {
  const [images, setImages] = useState([
    map1,map2,
    map3,map5,
    map4,map4,
    map5,map3,
    map1,map2,
    map2,map4,
    map5,map3,
    map1,map2,
    // ... Add 14 more image paths
  ]);

  const handleHover = (index, moveUp) => {
    const updatedImages = [...images];
    updatedImages[index] = moveUp ? images[index] + '?hover' : images[index].split('?')[0];
    setImages(updatedImages);
  };

  const desc = [
    "DAWNBREAKER",
    "PROPAGANDA",
    "OPERATION LOCKER",
    "LANCANG DAM",
    "SIEGE OF SHANGHAI",
    "GOLMUD RAILWAY",
    "DAWNBREAKER",
    "PROPAGANDA",
    "OPERATION LOCKER",
    "LANCANG DAM",
    "SIEGE OF SHANGHAI",
    "GOLMUD RAILWAY",
    "DAWNBREAKER",
    "PROPAGANDA",
    "OPERATION LOCKER",
    "LANCANG DAM",
    "SIEGE OF SHANGHAI",
    "GOLMUD RAILWAY",
    "PROPAGANDA"
  ];

  return (
    <div>MAP ROTATION
    <div className="image-grid">
      {images.map((image, index) => (
        <div key={index} className="image-card">
          <img
            src={image}
            alt={`${index + 1}`}
            onMouseEnter={() => handleHover(index, true)}
            onMouseLeave={() => handleHover(index, false)}
          />
          <div className="image-text">
            <span>CONQUEST LARGE <br/> {desc[index]}</span>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default MapRotation;
