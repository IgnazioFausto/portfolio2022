import React from "react";
import {
  SiVisualstudiocode,
  SiReact,
  SiGit,
  SiGithub,
  SiBootstrap,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiJquery,
  SiFirebase,
  SiGooglecolab,
  SiNpm,
  SiSass,
  SiJson,
  SiReactrouter,
  SiDjango,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

function Nosotros() {
  return (
    <>
      {" "}
      <div className="contenedor">
        <h3 className="title">Tecnologías que manejo</h3>
        <p className="paragraph">Dominadas</p>
        <div className="contenedor-iconos">
          <SiVisualstudiocode className="icono" />
          <SiHtml5 className="icono" />
          <SiCss3 className="icono" />
          <SiSass className="icono" />
          <SiBootstrap className="icono" />
          <SiJavascript className="icono" />
          <SiJquery className="icono" />
          <SiJson className="icono" />
          <SiGit className="icono" />
          <SiGithub className="icono" />
          <SiReact className="icono" />
          <SiNpm className="icono" />
          <SiGooglecolab className="icono" />
          <SiReactrouter className="icono" />
        </div>
        <p className="paragraph">Aprendiendo</p>
        <div className="contenedor-iconos">
          <SiNodedotjs className="icono" />
          <SiFirebase className="icono" />
          <SiPython className="icono" />
          <SiDjango className="icono" />
          <SiMongodb className="icono" />
          <SiExpress className="icono" />
        </div>
        <h3 className="title">Stack al que apunto</h3>
        <p className="paragraph">MERN</p>
        <p className="paragraph">MongoDB - Express - React - Node</p>

      </div>
    </>
  );
}

export default Nosotros;
