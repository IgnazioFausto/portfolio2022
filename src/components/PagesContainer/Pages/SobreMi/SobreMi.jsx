import React from "react";
import SobreMiCSS from "./SobreMi.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import imgPerfil from "../../../../img/nachoperfilcv.png";


function Inicio() {
  return (
    <>
      <Container className={SobreMiCSS.contenedor}>
        <Row className={SobreMiCSS.row}>
          <h3 className={SobreMiCSS.titulo}>Sobre mi</h3>
          <Col>
            <img src={imgPerfil} alt="account" className={SobreMiCSS.img} />
            <p className={SobreMiCSS.texto}>
              ¡Hola! Mi nombre es Ignacio Fernández, soy argentino y tengo 26
              años. Actualmente estoy viviendo España. <br />
              <b> Mi meta es convertirme en desarrollador FullStack.</b>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Inicio;


