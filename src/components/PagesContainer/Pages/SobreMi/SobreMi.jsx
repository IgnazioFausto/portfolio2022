import React from "react";
import SobreMiCSS from "./SobreMi.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import imgPerfil from "../../../../img/nachoperfilcv.png";

function Inicio() {
  return (
    <>
      <Container fluid className={SobreMiCSS.contenedor}>
        <Row className={SobreMiCSS.row}>
          <h3 className={SobreMiCSS.titulo}>Sobre mi</h3>
          <Col>
            <img src={imgPerfil} alt="account" className={SobreMiCSS.img} />
            <p className={SobreMiCSS.texto}>
              ¡Hola! Mi nombre es Ignacio Fernández, soy argentino y actualmente
              estoy viviendo en España.
            </p>
            <p className={SobreMiCSS.texto}>
              {" "}
              Desde principios de 2021, comencé a formarme en HTML, CSS, SASS,
              Boostrap, JavaScript, Jquery, React JS, entre otras cosas
              pertinentes.
            </p>
            <p className={SobreMiCSS.texto}>
              En este momento, estoy formandome en React Native en Python (con
              el cual me he sentido muy cómodo).
            </p>
            <br />
            <p className={SobreMiCSS.texto}>
              Espero te agrade mi portfolio, el cual está en constante mejora y
              actualización.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Inicio;
