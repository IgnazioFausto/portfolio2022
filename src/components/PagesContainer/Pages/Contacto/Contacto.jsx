import { SiLinkedin, SiGithub, SiFacebook, SiGmail, SiSololearn } from "react-icons/si";
import { FaDownload } from "react-icons/fa";


function Contacto() {
  return (
    <>
      <div className="contenedor">
        <h3 className="title">¡Contáctame!</h3>
        <p className="paragraph">
          A través de mis redes y medios de comunicación, <br />
          <b>espero tu mensaje.</b>
        </p>
        <div className="contenedor-botones">
          <a href="https://www.linkedin.com/in/ignaziofernandez/" target="_blank" className="button-rrss"><SiLinkedin/></a>
          <a href="https://github.com/IgnazioFausto" target="_blank" className="button-rrss"><SiGithub/></a>
          <a href="https://www.facebook.com/nacho.whitekross" target="_blank" className="button-rrss"><SiFacebook/></a>
          <a href="https://www.sololearn.com/profile/24508378" target="_blank" className="button-rrss"><SiSololearn/></a>
        </div>
      </div>
      <div className="contenedor">
        <div className="button">
          <a target='_blank'  rel="noopener noreferrer" href="src/img/CV-Junio-22-Ignacio-Fernandez.pdf" download>Descarga mi CV <FaDownload/></a>
        </div>
      </div>
    </>
  );
}

export default Contacto;
