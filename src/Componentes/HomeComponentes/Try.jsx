import { useInView } from 'react-intersection-observer';
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion';

export default function Try() {
    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({ threshold: 0.5 });
    const animationRef = useRef(null);
  
    useEffect(() => {
      if (inView) {
        setIsVisible(true);
      }
    }, [inView]);
  
    return (
      <div ref={ref} className="h-screen flex items-center justify-center">
        <motion.div
          ref={animationRef}
          animate={{ scale: isVisible ? 1 : 0, opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="w-32 h-32 bg-blue-500 rounded-full"
        />
      </div>
    );
}
