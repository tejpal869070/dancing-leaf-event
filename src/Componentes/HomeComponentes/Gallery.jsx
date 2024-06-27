import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInView } from "react-intersection-observer";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import banner1 from "../../assets/officialbanner.jpeg";
import { GalleryData } from "../../Data/GalleryData";
import { Link } from "react-router-dom";

function Gallery() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 100,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 100,
    cssEase: "linear",
    rtl: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.5 });
  const animationRef = useRef(null);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);
  return (
    <div className="py-16 lg:pt-12" ref={ref}>
      <p className="text-4xl font-bold text-[#9d1f60] text-center mb-1">
        Portfolio
      </p>
      <div className="h-[4px] rounded-full w-[60px] m-auto bg-black mb-6"></div>

      <div className="columns-1 gap-5 container m-auto sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
        {GalleryData &&
          GalleryData.map((item, index) => (
            <img alt="img1" src={item.image} className="rounded-[30px]" />
          ))}
      </div>

      <div className="py-10 text-center">
        <p className="text-[48px] font-[500] text-[#414141] font-[initial] text-center">
          Planning An Upcoming Event?
        </p>
        <p className="text-[18px] text-[#222222] font-[initial] text-center font-[500]">
          Contact us now and we will plan the event for you
        </p>
        <Link className=" mt-6 inline-block bg-[#e59945] rounded-[10px] text-[18px] min-w-[180px] px-[13px] py-[10px] text-center" to={"/contact"}>Contact Now.</Link>
      </div>

      <div className="container m-auto border-4 rounded-lg border-gray-500 mt-10 shadow-lg">
        <img alt="banner" src={banner1} />
      </div>
    </div>
  );
}

export default Gallery;
