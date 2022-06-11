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
} from "react-icons/si";

function Nosotros() {
  return (
    <>
      {" "}
      <div className="contenedor">
        <h3 className="title">Tecnologias que manejo</h3>
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
        </div>
        <p className="paragraph">Aprendiendo</p>
        <div className="contenedor-iconos">
          <SiGithub className="icono" />
          <SiReact className="icono" />
          <SiNodedotjs className="icono" />
          <SiNpm className="icono" />
          <SiGooglecolab className="icono" />
          <SiFirebase className="icono" />
          <SiReactrouter className="icono" />
          <SiPython className="icono" />
        </div>
      </div>
    </>
  );
}

export default Nosotros;
