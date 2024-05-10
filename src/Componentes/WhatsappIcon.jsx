import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappIcon = ({ phoneNumber }) => {
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=YOUR_MESSAGE`, "_blank");
  };

  return (
    <div>
      <div
        className=" animate-bounce	 bg-[green] rounded-full p-2"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          cursor: "pointer",
          zIndex: "99999",
        }}
      >
        <FaWhatsapp size={40} color="white" onClick={handleClick} />
      </div>
      <div
        style={{
          position: "fixed",
          bottom: "13px",
          right: "35px",
          cursor: "pointer",
          zIndex: "99999",
          boxShadow: "1px 0px 4px 3px #4f4c4c",
        }}
        className="w-[20px]  h-1 bg-[#4f4c4c] rounded-full animate-ping "
      ></div>
    </div>
  );
};

export default WhatsappIcon;
