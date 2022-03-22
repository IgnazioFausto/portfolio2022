import React from "react";
import WorksCSS from "./Works.module.scss";
import { Carousel, Col, Container, Row, Badge } from "react-bootstrap";
import TeknoImg from "../../../../img/gif teknotech.gif";
import HuertitaImg from "../../../../img/Mi Huertapp.gif";
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
import { TiTick, TiTime} from "react-icons/ti"

function Nosotros() {
  return (
    <>
      {" "}
      <div className={WorksCSS.contenedor}>
        <h3 className={WorksCSS.titulo}>Proyectos realizados</h3>

        <Carousel variant="light">
          <Carousel.Item>
            <img className={WorksCSS.img} src={TeknoImg} alt="First slide" />
            <Carousel.Caption className={WorksCSS.items}>
              <h5 className={WorksCSS.tituloItem}>Teknotech</h5>
              <p className={WorksCSS.textoItem}>
                Proyecto para empresa de salud
              </p>
              <button className={WorksCSS.btnCopy}>
                <a
                  href="https://github.com/IgnazioFausto/teknotech2022"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver repositorio
                </a>
              </button>
              <button className={WorksCSS.btnCopy}>
                <a
                  href="https://ignaziofausto.github.io/teknotech2022/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver sitio
                </a>
              </button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={WorksCSS.img}
              src={HuertitaImg}
              alt="Second slide"
            />
            <Carousel.Caption className={WorksCSS.items}>
              <h5 className={WorksCSS.tituloItem}>Mi Huertapp</h5>
              <p className={WorksCSS.textoItem}>
                Proyecto E-commerce en React, con BBDD en Firebase.
              </p>
              <button className={WorksCSS.btnCopy}>
                <a
                  href="https://github.com/IgnazioFausto/mi-huertapp-deploy-vercel"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver repositorio
                </a>
              </button>
              <button className={WorksCSS.btnCopy}>
                <a
                  href="https://mi-huertapp-deploy-vercel-egff01yth-ignaziofausto.vercel.app/home"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver sitio
                </a>
              </button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <Container fluid className={WorksCSS.contenedorPequeño}>
        <Row>
          <Col className={WorksCSS.row}>
            <button className={WorksCSS.btnRepos}>
              <a
                href="https://github.com/IgnazioFausto?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Ver repositorios
              </a>{" "}
              <SiGithub className={WorksCSS.icon} />
            </button>
          </Col>
        </Row>
      </Container>
      <div className={WorksCSS.contenedorPequeño}>
        <Row className={WorksCSS.row}>
          <Col>
            <h2 className={WorksCSS.skillsTitles}>Aprendido <TiTick/> </h2>
            <h2>
              {" "}
              <Badge className={WorksCSS.badge} pill bg="" text="">
                (en constante práctica y mejora){" "}
              </Badge>
            </h2>
            <SiVisualstudiocode className={WorksCSS.icons} />
            <SiHtml5 className={WorksCSS.icons} />
            <SiCss3 className={WorksCSS.icons} />
            <SiSass className={WorksCSS.icons} />
            <SiBootstrap className={WorksCSS.icons} />
            <SiJavascript className={WorksCSS.icons} />
            <SiJquery className={WorksCSS.icons} />
            <SiJson className={WorksCSS.icons} />
            <SiGit className={WorksCSS.icons} />
            <SiGithub className={WorksCSS.icons} />
            <SiReact className={WorksCSS.icons} />
          </Col>
        </Row>
      </div>
      <div className={WorksCSS.contenedorPequeño}>
        <Row className={WorksCSS.row}>
          <h2 className={WorksCSS.skillsTitles}>Aprendiendo <TiTime/> </h2>
          <Col>
            <SiNodedotjs className={WorksCSS.icons} />
            <SiNpm className={WorksCSS.icons} />
            <SiGooglecolab className={WorksCSS.icons} />
            <SiFirebase className={WorksCSS.icons} />
            <SiReactrouter className={WorksCSS.icons} />
            <SiPython className={WorksCSS.icons} />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Nosotros;
