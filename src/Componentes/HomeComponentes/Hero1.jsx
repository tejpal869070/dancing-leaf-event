import React, { useState, useEffect } from "react";
import img1 from "../../assets/banner4.webp";
import video from "../../assets/video-2.mp4";
import bg2 from "../../assets/preload.jpg";

import banner1 from "../../assets/homebanner/banner2.jpeg";
import banner2 from "../../assets/homebanner/banner1.jpeg";

const images = [banner1, banner2];

export default function Hero1() {
  const [currentImage, setCurrentImage] = useState(0);
  const [nextImage, setNextImage] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNextImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCurrentImage(nextImage);
    }, 10);
    return () => clearTimeout(timerId);
  }, [nextImage]);

  return (
    <div>
      <div className="h-[90vh] block lg:hidden w-full overflow-hidden relative">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 transform ${
              index === currentImage
                ? "opacity-1 scale-110"
                : "opacity-0 scale-100"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "opacity 3s ease, transform 2s ease",
            }}
          ></div>
        ))}

        <div className="absolute bg-[#7f858559] top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white text-3xl font-bold ">
          <p
            className="rubik-font text-center font-outline-2 font-bold text-5xl lg:text-6xl leading-[55px]"
            style={{ filter: "drop-shadow(2px 4px 6px black)", textAlign:"left", marginLeft:"15px" }}
          >
            <span className="font-semibold">Turn Your </span>
            <span className="text-[#e4686f] font-semibold">
              Dream  Event into
            </span>{" "}
            a Reality
            <br />
          </p>
          <p className="rubik-font mt-4 text-2xl text-left ml-[15px]" >
            Here unforgettable events come to life. With a passion for precision{" "}
            
            and creativity, we specialize in crafting seamless experiences{" "}
            <br />
            tailored to your vision. <br />
          </p>
        </div>
      </div>

      <div className="h-[90vh] hidden lg:block w-full overflow-hidden relative">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 transform ${
              index === currentImage
                ? "opacity-1 scale-110"
                : "opacity-0 scale-100"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "opacity 3s ease, transform 2s ease",
            }}
          ></div>
        ))}

        <div className="absolute bg-[#7f858559] top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white text-3xl font-bold ">
          <p
            className="rubik-font text-center font-outline-2 font-bold text-5xl lg:text-6xl leading-[55px]"
            style={{ filter: "drop-shadow(2px 4px 6px black)" }}
          >
            <span className="font-semibold">Turn Your </span>
            <span className="text-[#e4686f] font-semibold">
              Dream <br /> Event into
            </span>{" "}
            a Reality
            <br />
          </p>
          <p className="rubik-font mt-4 text-2xl text-center">
            Here unforgettable events come to life. With a passion for precision{" "}
            <br />
            and creativity, we specialize in crafting seamless experiences{" "}
            <br />
            tailored to your vision. <br />
          </p>
        </div>
      </div>
    </div>
  );
}
