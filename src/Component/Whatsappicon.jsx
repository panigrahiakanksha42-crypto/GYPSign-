import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6';
import './Whatsappicon.css';

const Whatsappicon = () => {
  return (
    <a 
      href="https://wa.me/919347292371" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-float"
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default Whatsappicon;
