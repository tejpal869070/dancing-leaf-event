import "./App.css";
import Footer from "./Componentes/Footer";
import Header2 from "./Componentes/Header2";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import WhatsappIcon from "./Componentes/WhatsappIcon";
import bg1 from "./assets/flowerbg.png"

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Home = lazy(() => import("./Pages/Home"));
const ServicePage = lazy(() => import("./Pages/Services"));
const About = lazy(() => import("./Pages/About"));
const Contact = lazy(() => import("./Pages/Contact"));
const Gallery = lazy(() => import("./Pages/Gallery"));
const Packages = lazy(() => import("./Pages/Packages"));
const Rentals = lazy(() => import("./Pages/Rentals"));

function App() {
  return (
    <div >
      <BrowserRouter>
        <Header2 />
        <ScrollToTop />
        <WhatsappIcon />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/rentals" element={<Rentals />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
