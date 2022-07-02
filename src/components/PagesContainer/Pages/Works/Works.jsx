import React from "react";
import work_huertita from "../../../../img/Mi Huertapp.gif";
import work_tekno from "../../../../img/gif teknotech.gif";

function Works() {
  return (
    <div className="contenedor">
      <h3 className="title">Desarrollos</h3>
      <p className="paragraph">Los proyectos/trabajos que realice:</p>
      <div className="contenedor">
        <div className="contenedor-works">
          <img src={work_huertita} className="work-img" />
          <p className="paragraph-work">
          <p className="title-work">Mi Huertapp</p>
            E-commerce realizado con React, SASS, Firebase y Bootstrap 5.0. Deployado en Vercel.
          <div className="button" style={{'text-align': 'center'}}> <a href="https://mi-huertapp-deploy-vercel.vercel.app/home" target='_blank'>Ver sitio </a> </div>
          </p>
        </div>
        <div className="contenedor-works">
          <img src={work_tekno} className="work-img" />
          <p className="paragraph-work">  
          <p className="title-work">Web empresarial</p>
            Sitio web desarrollado en equipo conformado por: Product Manager, UX/UI Designer y otros desarrolladores.
          <div className="button" style={{'text-align': 'center'}}> <a href="https://ignaziofausto.github.io/teknotech2022/" target='_blank'>Ver sitio</a></div>

          </p>
        </div>
      </div>
      <div className="paragraph">y sumando...</div>
      <div className="flecha"></div>
      <div className="flecha"></div>
      <div className="flecha"></div>

    </div>
  );
}

export default Works;
