import React from "react";
import video from "../../assets/video3.mp4"
import video2 from "../../assets/video4.mp4"

export default function Video() {
  return (
    <div>
      <video
        className="hidden lg:block "
        autoPlay
        muted
        loop
      >
        {/* Add your video source */}
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video
        className="block lg:hidden "
        autoPlay
        muted
        loop
        
      >
        {/* Add your video source */}
        <source src={video2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
