import React from "react";
import imgPerfil from "../../../../img/nachoperfilcv.jpg";

function Inicio() {
  return (
    <>
      <div className="contenedor">
        <h3 className="title">Sobre mi</h3>
        <img src={imgPerfil} alt="account" className="img-profile" />
        <p className="paragraph">
          ¡Hola! Mi nombre es Ignacio Fernandez, soy argentino, tengo 26 años y
          soy estudiante de programacion. Actualmente estoy viviendo España.
          Podes ver mi <a href="#">roadmap</a>, mis <a href="#">skills</a> o
          conocer un poco de mi <a href="#">mundo personal.</a>
          <br />
            {" "}
            Mis metas son:  <b> convertirme en desarrollador FullStack
          </b>{" "}
          y, algun dia, poder dedicarme a enseniar dentro de este mundo.
          <br /> Glad to meet you!
        </p>
      </div>
    </>
  );
}

export default Inicio;
