import cake from "../../assets/cake.png";
import gif1 from "../../assets/gif2.gif";
import CakePopUp from "../HomeComponentes/CakePopUp";
import { useInView } from "react-intersection-observer";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Cake() {
  const [isOpen, setIsOpen] = useState(false);

  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.5 });
  const animationRef = useRef(null);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const openPopup = () => {
    console.log("object");
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };
  return (
    <div
      className="container border-lg m-auto mt-6 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-orange-900 via-amber-100 to-orange-900"
      style={{
        // backgroundImage: `url(${gif1})`,
        // backgroundPosition: "center",
        // backgroundColor: "#fff8daf2",
      }}
    >
      <div
        className="flex flex-wrap items-center justify-center justiy-between border-lg"
        // style={{ border: "6px solid #e5687075" }}
        ref={ref}
      >
        <div className="w-[98%] lg:w-[45%] px-6">
          <h1 className="mb-6 text-[42px]  text-[#9d1f60] courgette-regular font-[800]">
            Customized Cake
          </h1>
          <p className="text-lg  rubik-font text-xl">
            Indulge in the sweetest treat with our made-to-order custom cakes!
            From intricate designs to mouthwatering flavors, each cake is
            crafted to perfection, just for you.
          </p>

          <div className="mt-6">
            <div
              onClick={openPopup}
              className="relative inline-block text-lg group cursor-pointer"
            >
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-[#9d1f60] rounded-lg group-hover:text-black">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#edda8c]  group-hover:-rotate-180 ease"></span>
                <span className="relative">Order Now.</span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </div>
          </div>

          {isOpen && <CakePopUp onClose={closePopup} />}
        </div>
        <motion.div
          ref={animationRef}
          animate={{
            scale: isVisible ? 1 : 0,
            opacity: isVisible ? 1 : 1,
          }}
          transition={{ duration: 0.8 }}
          className="w-[98%] lg:w-[45%] "
        >
          <img alt="cake" src={cake} className="w-[80%] m-auto " />
        </motion.div>
      </div>
    </div>
  );
}
