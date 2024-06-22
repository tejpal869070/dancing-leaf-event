import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ServiceDropdown({ serviceName }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const serviceTypes = [
    { key: "private", label: "Private" },
    { key: "corporate", label: "Corporate" },
    { key: "wedding", label: "Wedding" },
  ];

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".relative.inline-block")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className="relative flex justify-around w-full  mt-6 bg-[#ced3ff3d] py-4 ">
      {serviceTypes.map((service) => (
        <Link
          key={service.key}
          className={`${
            serviceName === service.key ? "bg-[#e4676f] text-white" : "bg-white text-black hover:bg-[#e58b9159]"
          } py-3 w-60 hover:shadow-lg  text-center text-xl font-semibold  border-2 border-[#e4676f] rounded-lg`}
          to={{ pathname: "/services", search: `?service=${service.key}` }}
        >
          {service.label}
        </Link>
      ))}
    </div>
  );
}
