import cake from "../../assets/real-cake.png";
import rent from "../../assets/rents.png";
import CakePopUp from "../HomeComponentes/CakePopUp";
import { useInView } from "react-intersection-observer";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
    <div className="container  border-lg m-auto mt-6 ">
      <div className="w-full flex flex-wrap justify-between">
        <div className="w-[48%] shadow-xl px-6 py-4 bg-gray-200 rounded-lg border-4 border-white">
          <h1 className="mb-6 text-[42px]  text-[#9d1f60] rubik-font  font-[800]">
            Rental Items
          </h1>
          <p className="text-lg  rubik-font text-xl">
            Make any event unforgettable with our extensive selection of party
            rentals. From quality items to enhance your celebration, rent today
            and make your next gathering truly special!
          </p>
          <div className="mt-6">
            <Link to={"/rentals"}
              className="relative inline-block text-lg group cursor-pointer"
            >
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-[#9d1f60] rounded-lg group-hover:text-black">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#edda8c]  group-hover:-rotate-180 ease"></span>
                <span className="relative">Explore More.</span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </Link>
          </div>
          <motion.div
            ref={animationRef}
            animate={{
              scale: isVisible ? 1 : 0,
              opacity: isVisible ? 1 : 1,
            }}
            transition={{ duration: 0.8 }}
            className="  "
          >
            <img alt="cake" src={rent} className="w-[80%] m-auto " />
          </motion.div>
        </div>
        <div
          className="flex shadow-xl border-2 border-black rounded-lg  flex-col items-center justify-center justiy-between border-lg w-[48%]"
          ref={ref}
        >
          <div className="  px-6 py-4">
            <h1 className="mb-6 text-[42px]  text-[#9d1f60] rubik-font  font-[800]">
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
            className="  "
          >
            <img alt="cake" src={cake} className="w-[80%] m-auto " />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
