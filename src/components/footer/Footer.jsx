import FooterCSS from "./Footer.module.css";
import { Container } from "react-bootstrap";
import { GiChicken } from "react-icons/gi";

function Footer() {
  return (
    <>
      <Container fluid className={FooterCSS.container}>
        <p>
          Hecho por <GiChicken className={FooterCSS.icon} /> en 2022
        </p>
        
      </Container>
    </>
  );
}

export default Footer;
