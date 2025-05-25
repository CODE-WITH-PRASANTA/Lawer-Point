import React, { useState } from 'react';
import './Rotation.css';

// Dummy images from local assets
import img1 from '../../assets/rotate-01.webp';
import img2 from '../../assets/rotate-02.webp';
import img3 from '../../assets/rotate-03.webp';
import img4 from '../../assets/rotate-04.webp';
import img5 from '../../assets/rotate-03.webp';
import img6 from '../../assets/rotate-01.webp';
import img7 from '../../assets/rotate-03.webp';

const Rotation = ({ speed = 12 }) => {
  const [modalImage, setModalImage] = useState(null);

  const images = [
    { url: img1, name: 'Event 1' },
    { url: img2, name: 'Event 2' },
    { url: img3, name: 'Event 3' },
    { url: img4, name: 'Event 4' },
    { url: img5, name: 'Event 5' },
    { url: img6, name: 'Event 6' },
    { url: img7, name: 'Event 6' },
  ];

  const duplicatedImages = [...images, ...images];

  const openModal = (img) => setModalImage(img);
  const closeModal = () => setModalImage(null);

  return (
    <div className="rotation-section">
      <h2 className="rotation-heading">Our Achivment & Photo Gallery</h2>

      <div className="rotation-container">
        <div className="rotation-wrapper" style={{ animationDuration: `${speed}s` }}>
          {duplicatedImages.map((image, index) => (
            <div
              className="rotation-item"
              key={index}
              onClick={() => openModal(image.url)}
            >
              <img src={image.url} alt={image.name || `rotate-${index}`} />
            </div>
          ))}
        </div>
      </div>

      {modalImage && (
        <div className="image-modal" onClick={closeModal}>
          <span className="close-icon" onClick={closeModal}>✖</span>
          <img src={modalImage} alt="enlarged" className="modal-content" />
        </div>
      )}
    </div>
  );
};

export default Rotation;
