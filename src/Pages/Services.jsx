import React from "react";
import Banner from "../Componentes/ServiceComponentes/Banner";
import Service1 from "../Componentes/ServiceComponentes/Service1";
// import bg10 from "../assets/bg-10.jpg";
import bg10 from "../assets/bg-valvet.jpg";
import corner from "../assets/corner-flower.png";

import { Link } from "react-router-dom";

export default function ServicePage() {
  return (
    <div>
      <Banner />
      <Service1 />
       
    </div>
  );
}
