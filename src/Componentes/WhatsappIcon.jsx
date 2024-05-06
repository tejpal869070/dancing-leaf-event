import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappIcon = ({ phoneNumber }) => {
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=YOUR_MESSAGE`, '_blank');
  };

  return (
    <div className='bg-[green] rounded-full p-2' style={{ position: 'fixed', bottom: '20px', right: '20px', cursor: 'pointer', zIndex:"99999" }}>
      <FaWhatsapp size={40} color="white" onClick={handleClick} />
    </div>
  );
};

export default WhatsappIcon;
