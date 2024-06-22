import { useInView } from "react-intersection-observer";
import React, { useEffect, useRef, useState } from "react";
import img1 from "../../assets/cakebg2.jpg";
import img2 from "../../assets/categing.jpg";
import img3 from "../../assets/rent13.jpg";
import booth from "../../assets/booth.jpg";

export default function Cake() {
  return (
    <div className="container  border-lg m-auto mt-20 ">
      <div>
        <div className="flex flex-wrap mt-10 shadow-lg">
          <div className="w-full lg:w-1/3 relative">
            <img alt="imgg" src={img1} className="w-full" />
            <p className="absolute top-10 left-0 right-0 w-full   text-center text-3xl courgette-regular">
              Made-to-order <br /> custom cakes
            </p>
          </div>
          <div className="w-full lg:w-1/3 relative">
            <img alt="imgg" src={img2} className="w-full" />
            <p className="absolute top-10 left-0 right-0 w-full   text-center text-3xl courgette-regular">
              Catering <br /> items.
            </p>
          </div>
          <div
            className="w-full lg:w-1/3 relative  "
            style={{
              backgroundImage: `linear-gradient(to left, rgba(255,255,255,0.8) 30%, rgba(255,255,255,0) 100%)`,
            }}
          >
            <img alt="imgg" src={img3} className="w-full" />

            <p className="absolute  top-10 left-0 right-0 w-full   text-center text-3xl courgette-regular">
              A wide range <br /> of rental items.
            </p>
          </div>
        </div>

        <div className="container m-auto pt-20  px-4 lg:px-0">
          <div className="flex  flex-wrap justify-between ">
            <div className="w-full lg:w-[40%]">
              <img alt="slider" src={booth} />
            </div>



            
            <div className="w-full lg:w-[50%]">
              <h2 className=" rubik-font  text-4xl mt-6">
                Capture Memories with Our Premier Photo & Videobooth Experience
              </h2>
              <p className="mt-6 text-xl">
                we specialize in transforming any event into an unforgettable
                occasion with our state-of-the-art photobooths. Whether you're
                planning a wedding, birthday party, corporate event, or any
                special gathering, our sleek and modern photobooths are designed
                to capture the essence of fun and celebration.
              </p>
              <p className="mt-6 text-xl">
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
