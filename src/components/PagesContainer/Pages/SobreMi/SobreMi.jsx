import React from "react";
import SobreMiCSS from "./SobreMi.module.css";
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
              ¡Hola! Mi nombre es Ignacio Fernández, soy argentino y tengo 26
              años. Actualmente estoy viviendo en Argentina y pronto me mudare a
              España para residir.
              <b> Mi meta es convertirme en desarrollador Full Stack</b> y para
              eso, desde principios de 2021, comencé a formarme en HTML, CSS,
              SASS, Boostrap, JavaScript, Jquery, React JS, entre otras cosas
              pertinentes. En este momento, estoy formandome en React Native en
              Python (con el cual me he sentido muy cómodo).
            </p>
            <p className={SobreMiCSS.texto}>
              Sinceramente, nunca pensé dedicarme a una profesion como ésta,
              pero ahora que transito el camino -y en cada paso- siento que
              planear, desarrollar e idear soluciones digitales
              <i> es, sin dudas, lo mío.</i>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Inicio;
