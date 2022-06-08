import React from "react";
import Footer from "./components/footer/Footer";
import SobreMi from "./components/PagesContainer/Pages/SobreMi/SobreMi";
import Works from "./components/PagesContainer/Pages/Works/Works";
import Contacto from "./components/PagesContainer/Pages/Contacto/Contacto";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Portfolio from "./components/portfolio/Portfolio";
import './sass/main.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/sobremi" element={<SobreMi />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<SobreMi />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
