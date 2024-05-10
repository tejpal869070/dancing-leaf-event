import React from "react";
import gif5 from "../assets/gif5.gif"

export default function LoadingPage() {
  return (
    <div className="relative">
      <div className="absolute top-0 h-screen w-[100vw] flex items-center justify-center">
        <img alt="loaf" src={gif5} className="w-full h-full"/>
      </div>
    </div>
  );
}
