import { useInView } from "react-intersection-observer";
import React, { useEffect, useRef, useState } from "react";
import img1 from "../../assets/cakebg2.jpg";
import img2 from "../../assets/categing.jpg";
import img3 from "../../assets/rent13.jpg";
import booth from "../../assets/photobooth2.jpg";
import { Link } from "react-router-dom";

const images = [
  { src: img1, text: "Made-to-order custom cakes" },
  { src: img2, text: "Catering Options." },
  { src: img3, text: "A wide range of rental items." },
];

export default function Cake() {
  return (
    <div className="container border-lg m-auto ">
      <div className="px-4">
        <div className="flex flex-wrap mt-10 shadow-lg">
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full mb-2 md:w-1/2 lg:w-1/3 relative cursor-pointer group overflow-hidden"
            >
              <img
                alt="imgg"
                src={image.src}
                className="w-full transition-transform duration-300 transform group-hover:scale-105"
              />
              <p className="absolute top-10  left-0 right-0 w-[50%] m-auto text-center text-3xl courgette-regular">
                {image.text}
              </p>
              <div className="absolute bottom-0 w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="bg-white rounded-t-full h-20 flex justify-center items-center">
                  {index === 0 ? (
                    <p
                      className="text-xl font-semibold text-[#e4686fss] hover:bg-[#8BEFEC] px-2 py-3 rounded-lg"
                      onClick={() =>
                        window.open(
                          `https://wa.me/+16693508979?text=Hello, I want a customised cake for my...`,
                          "_blank"
                        )
                      }
                    >
                      Contact For Order
                    </p>
                  ) : index === 1 ? (
                    <p
                      className="text-xl font-semibold text-[#e4686fss] hover:bg-[#f2a63f] px-2 py-3 rounded-lg"
                      onClick={() =>
                        window.open(
                          `https://wa.me/+16693508979?text=Hello, I want catering items for my...`,
                          "_blank"
                        )
                      }
                    >
                      Get More Details
                    </p>
                  ) : index === 2 ? (
                    <Link
                      className="text-xl font-semibold text-[#e4686fss] hover:bg-[#94E573] px-2 py-3 rounded-lg"
                      to={"/rentals"}
                    >
                      View More
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container m-auto pt-20  px-4  ">
        <div className="flex  flex-wrap-reverse justify-between ">
          <div className="w-full lg:w-[40%]">
            <img alt="slider" src={booth} />
          </div>

          <div className="w-full lg:w-[50%]">
            <h2 className=" rubik-font  text-4xl mt-6">
              Capture Memories with Our Premier{" "}
              <span className="text-[#e4686f] font-semibold">
                Photo & Videobooth
              </span>{" "}
              Experience
            </h2>
            <div className="w-full lg:w-[90%]">
              <p className="mt-6 text-xl text-justify">
                we specialize in transforming any event into an unforgettable
                occasion with our state-of-the-art photobooths. Whether you're
                planning a wedding, birthday party, corporate event, or any
                special gathering, our sleek and modern photobooths are designed
                to capture the essence of fun and celebration.
              </p>
              <p className="mt-6 text-xl text-justify">
                With customizable backdrops, themed props, and a user-friendly
                interface, our photobooths are not just a rental—they're an
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
