import React from "react";
import SobreMi from "./components/PagesContainer/Pages/SobreMi/SobreMi";
import Roadmap from "./components/PagesContainer/Pages/Roadmap/Roadmap";
import Skills from "./components/PagesContainer/Skills/Skills";
import Contacto from "./components/PagesContainer/Pages/Contacto/Contacto";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import "./sass/main.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/sobremi" element={<SobreMi />} />
          <Route path='/roadmap' element={<Roadmap />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<SobreMi />} />
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
