import React from "react";
import PortfolioCSS from "./Portfolio.module.scss";
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
  var obj = [
    {
      "react": "^17.0.2",
      "react-bootstrap": "^2.1.2",
      "react-copy-to-clipboard": "^5.0.4",
      "react-dom": "^17.0.2",
      "react-icons": "^4.3.1",
      "react-router-dom": "^6.2.1",
      "react-scripts": "5.0.0",
      "sass": "^1.49.9",
      "web-vitals": "^2.1.4",
    },
  ];
  obj = JSON.stringify(obj);
  obj = obj.slice(2, -2);
  obj = obj.split(",");

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
      <div className={PortfolioCSS.rowToolsDeps}>
        <Col className={PortfolioCSS.tools}>
          <h5 className={PortfolioCSS.titles}>Herramientas usadas</h5>
          <SiVisualstudiocode className={PortfolioCSS.icons} />
          <SiReact className={PortfolioCSS.icons} />
          <SiGit className={PortfolioCSS.icons} />
          <SiGithub className={PortfolioCSS.icons} />
          <SiBootstrap className={PortfolioCSS.icons} />
          <SiNodedotjs className={PortfolioCSS.icons} />
        </Col>
        <Col className={PortfolioCSS.deps}>
          <h5 className={PortfolioCSS.titles}>Dependencias usadas</h5>
          <ListGroup className={PortfolioCSS.grupoLista}>
            { obj.map((deps) =>
            <ListGroup.Item className={PortfolioCSS.itemsLista}>
              {deps}
            </ListGroup.Item>
            )}
          </ListGroup>
        </Col>
      </div>
    </Container>
  );
}
export default Portfolio;
