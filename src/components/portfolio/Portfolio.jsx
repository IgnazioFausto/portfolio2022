import React from "react";
import PortfolioCSS from "./Portfolio.module.css";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiReact,
  SiGit,
  SiGithub,
  SiBootstrap,
  SiNodedotjs,
} from "react-icons/si";

function Portfolio() {
  return (
    <Container fluid className={PortfolioCSS.contenedor}>
      <Row className={PortfolioCSS.row}>
        <Col>
          <h3 className={PortfolioCSS.titulo}>Sobre este portfolio</h3>
          <p className={PortfolioCSS.texto}>
            La idea de esta sección es mostrar también la forma en que esta
            hecho el portfolio. Dependencias, frameworks y cambios en su
            estructura y/o funcionamiento.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>Herramientas usadas</h5>
          <SiVisualstudiocode className={PortfolioCSS.icons} />
          <SiReact className={PortfolioCSS.icons} />
          <SiGit className={PortfolioCSS.icons} />
          <SiGithub className={PortfolioCSS.icons} />
          <SiBootstrap className={PortfolioCSS.icons} />
          <SiNodedotjs className={PortfolioCSS.icons} />
        </Col>
        <Col>
          <h5>Dependencias usadas</h5>
          <ListGroup className={PortfolioCSS.grupoLista}>
            <ListGroup.Item className={PortfolioCSS.itemsLista}>
              {" "}
              "bootstrap": "^5.1.3"
            </ListGroup.Item>
            <ListGroup.Item className={PortfolioCSS.itemsLista}>
              {" "}
              "react": "^17.0.2"
            </ListGroup.Item>
            <ListGroup.Item className={PortfolioCSS.itemsLista}>
              "react-bootstrap": "^2.1.2"
            </ListGroup.Item>
            <ListGroup.Item className={PortfolioCSS.itemsLista}>
              "react-copy-to-clipboard": "^5.0.4"
            </ListGroup.Item>
            <ListGroup.Item className={PortfolioCSS.itemsLista}>
              "react-dom": "^17.0.2"
            </ListGroup.Item>
            <ListGroup.Item className={PortfolioCSS.itemsLista}>
              "react-router-dom": "^6.2.1"
            </ListGroup.Item>
            <ListGroup.Item className={PortfolioCSS.itemsLista}>
              "react-scripts": "5.0.0"
            </ListGroup.Item>
            <ListGroup.Item className={PortfolioCSS.itemsLista}>
              "web-vitals": "^2.1.4"
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
export default Portfolio;
