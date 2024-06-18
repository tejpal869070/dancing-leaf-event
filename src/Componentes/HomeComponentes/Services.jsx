import "./service.css";
import bar from "../../assets/bar.png";
import { useInView } from "react-intersection-observer";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Services({ data }) {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.5 });
  const animationRef = useRef(null);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);
  return (
    <div className="py-6 container m-auto">
      <h1 className="text-center text-4xl courgette-regular">Our Services</h1>
      <div className="flex flex-wrap justify-between justify-center mb-4 w-full">
        {data &&
          data.map((item, index) => (
            <div key={index} className="w-full md:w-[48%] lg:w-[31%] mb-10" >
              <motion.div
                ref={animationRef}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isVisible ? { opacity: 1, y: 0 } : { opacity: 1, y: 50 }
                }
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="border-2  relative   p-1 rounded-lg shadow-lg h-60 overflow-hidden">
                  <img alt="servie" src={item.image} className=" h-full w-full   object-cover	" />
                  <div className="absolute   z-[999]  align-center  justify-center w-[90%] h-[90%] m-auto inset-0 p-2 text border-4"/> 
                </div>
                <p className="text-center  courgette-regular mt-2 text-2xl">{item.title}</p>
              </motion.div>
            </div>
          ))}
      </div>
    </div>
  );
}
