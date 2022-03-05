import React, { useState } from "react";
import ContactoCSS from "./Contacto.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Contacto() {
  const [copied, setCopied] = useState(false);
  const text = "nachojam777@gmail.com";

  return (
    <>
      <Container fluid className={ContactoCSS.contenedor}>
        <Row className={ContactoCSS.row}>
          <Col>
            <h3 className={ContactoCSS.titulo}>¡Contáctame!</h3>
            <p className={ContactoCSS.texto}>
              A través de mis redes y medios de comunicación, espero tu mensaje.
            </p>
          </Col>
        </Row>
        <Row>
          <ul className={ContactoCSS.ul}>
            <li>
              <div>
                <span className={ContactoCSS.gmail}>
                  nachojam777@gmail.com
                </span>
                {copied ? (
                  <div className={ContactoCSS.text_copied}>¡Copiado!</div>
                ) : (
                  <CopyToClipboard text={text} onCopy={() => setCopied(true)}>
                    <button className={ContactoCSS.btnCopy}>Copiar</button>
                  </CopyToClipboard>
                )}
              </div>
            </li>
            <li>
              <span className={ContactoCSS.gmail}>Mi perfil en LinkedIn</span>
              <button className={ContactoCSS.btnCopy}>
                <a
                  href="https://www.linkedin.com/in/ignaziofernandez/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Vamos!
                </a>
              </button>
            </li>
            <li>
              <span className={ContactoCSS.gmail}>Mi perfil en Sololearn</span>
              <button className={ContactoCSS.btnCopy}>
                <a
                  href="https://www.sololearn.com/profile/24508378"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver perfil
                </a>
              </button>
            </li>
            <li>
              <span className={ContactoCSS.gmail}>Todos mis repositorios en Github</span>
              <button className={ContactoCSS.btnCopy}>
                <a
                  href="https://github.com/IgnazioFausto"
                  target="_blank"
                  rel="noreferrer"
                >
                 Ir a Github
                </a>
              </button>
            </li>
          </ul>
        </Row>
      </Container>
    </>
  );
}

export default Contacto;
