import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ServiceDropdown({ serviceName }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

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
    <div className="relative inline-block">
      <button
        onClick={handleClick}
        className="bg-gray-500 flex gap-4 align-center items-center hover:bg-black text-white font-bold py-2 px-4 rounded"
      >
        {serviceName} <FaChevronDown />
      </button>
      {isOpen && (
        <ul
          className={`absolute w-full top-0 right-0 mt-10 w-48 bg-white rounded shadow-md ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transition: "opacity 0.2s ease-in-out",
          }}
        >
          {/* Add your dropdown items here */}
          <Link to={{ pathname: "/services", search: "?service=private" }}>
            <li className="py-2 px-4 hover:bg-gray-100">Private</li>
          </Link>
          <Link to={{ pathname: "/services", search: "?service=corporate" }}>
            <li className="py-2 px-4 hover:bg-gray-100">Corporate</li>
          </Link>
          <Link to={{ pathname: "/services", search: "?service=wedding" }}>
            <li className="py-2 px-4 hover:bg-gray-100">Wedding</li>
          </Link>
        </ul>
      )}
    </div>
  );
}
