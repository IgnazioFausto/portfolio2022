import React from "react";
import work_huertita from "../../../../img/Mi Huertapp.gif";
import work_tekno from "../../../../img/gif teknotech.gif";

function Works() {
  return (
    <div className="contenedor">
      <h3 className="title">Works</h3>
      <p className="paragraph">Los proyectos/trabajos que realice:</p>
      <div className="contenedor">
        <div className="contenedor-works">
          <img src={work_huertita} className="work-img" />
          <p className="paragraph-work">
          <p className="title-work">Mi Huertapp</p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            dolorem dolor unde eos assumenda dignissimos, maxime suscipit
            placeat dolores consequatur. Quisquam, quisquam.
          </p>
        </div>
        <div className="contenedor-works">
          <img src={work_tekno} className="work-img" />
          <p className="paragraph-work">
          <p className="title-work">Web empresarial</p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            dolorem dolor unde eos assumenda dignissimos, maxime suscipit
            placeat dolores consequatur. Quisquam, quisquam.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Works;
