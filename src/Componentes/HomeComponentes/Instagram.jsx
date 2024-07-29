import React from "react";
import instagram from "../../assets/instagram.webp";
import bg1 from "../../assets/colorwave.png";

export default function Instagram() {
  return (
    <div className="px-2" style={{ backgroundImage: `url(${bg1})` }}>
      <a href="https://www.instagram.com/dancingleafevents2023/?igsh=YXNoNGw5OGlldTVp" alt="insta" target="_blank" rel="noreferrer">
        <div className="pt-28 font-sans  w-full flex flex-row justify-center items-center">
          <div className="card w-96 mx-auto bg-white  shadow-4xl hover:shadow">
            <img
              className="w-32 mx-auto rounded-full -mt-20 border-8 border-white"
              src={instagram}
              alt=""
            />
            <div className="text-center mt-2 text-3xl font-medium">
              Dancing Leaf Events
            </div>
            <div className="text-center mt-2 font-light text-sm">
              @dancingleafevents2023
            </div>
            <div className="text-center font-normal text-lg">California</div>
            <div className="px-6 text-center mt-2 font-light text-sm">
              <p>
                We ready with all the love to make the best out of your special
                days 🌟💫 Event planner | Rental Items | Catering
              </p>
            </div>
            <hr className="mt-8" />
            <div className="flex p-4">
              <div className="w-1/2 text-center">
                <span className="font-bold">1.8 k</span> Followers
              </div>
              <div className="w-0 border border-gray-300"></div>
              <div className="w-1/2 text-center">
                <span className="font-bold">2.0 k</span> Following
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
