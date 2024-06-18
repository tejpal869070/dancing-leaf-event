import React, { useEffect, useState } from "react";
import img1 from "../../assets/banner4.webp";
import video from "../../assets/video-2.mp4";
import bg2 from "../../assets/preload.jpg";

// import banner2 from "../../assets/bg-4-min.jpg";
// import banner1 from "../../assets/bg-5.jpg";
import banner1 from "../../assets/photos/wedding-1846114_1920.jpg";
import banner2 from "../../assets/photos/beach-1854076_1920.jpg"
import banner3 from "../../assets/wedding.jpg";

const images = [
  { src: banner1, text: "Text 1" },
  { src: banner2, text: "Text 2" },
  { src: banner3, text: "Text 3" },
  // Add more image URLs here
];

export default function Hero1() {
  const [isLoading, setLoading] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change the interval to 4000 milliseconds for 4 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-[100vw] h-[85vh] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 flex items-center justify-center"
          style={{ transition: "opacity 3s ease" }}
        >
          <img
            src={image.src}
            alt="img"
            className={`absolute inset-0 transform w-full h-full transition duration-1000 ${
              index === currentImageIndex
                ? "scale-110 opacity-100"
                : "scale-90 opacity-0"
            }`}
            style={{
              objectFit: "cover",
              filter: "brightness(0.7)",
            }}
          />

          <p
            key={index}
            className="courgette-regular text-center leading-[80px] text-[#e46a72]  text-6xl font-bold z-10 opacity-100"
            style={{ textShadow: "2px 2px 8px white" }}
          >
            Turn Your Dream Event <br/> into a Reality
          </p>
        </div>
      ))}
    </div>
  );
}
