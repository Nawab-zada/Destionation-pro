import React from 'react';
import whatsapp from '../assets/whatsapp-img.jpeg'; // Adjust the path if needed
import './HomePageT.css'; // Import CSS for styling if needed

const WhatsAppButton = () => {
  return (
    <div className="whatsapp-button">
      <a
        href="https://wa.me/923456301298"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={whatsapp} alt="WhatsApp" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
