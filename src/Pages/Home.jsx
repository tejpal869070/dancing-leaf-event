import React from "react";
import Hero1 from "../Componentes/HomeComponentes/Hero1";
import Section1 from "../Componentes/HomeComponentes/Section1";
import Services from "../Componentes/HomeComponentes/Services";
import Video from "../Componentes/HomeComponentes/Video";
import Cake from "../Componentes/HomeComponentes/Cake";
import Gallery from "../Componentes/HomeComponentes/Gallery";

export default function Home() {
  return (
    <div>
      <Hero1 />
      <Section1 />
      <Services />
      <Cake />
      <Gallery />
      <Video />
    </div>
  );
}
