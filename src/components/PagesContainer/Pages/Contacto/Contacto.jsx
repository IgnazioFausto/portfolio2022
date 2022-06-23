import { SiLinkedin, SiGit, SiFacebook, SiGmail, SiSololearn } from "react-icons/si";


function Contacto() {
  return (
    <>
      <div className="contenedor">
        <h3 className="title">¡Contáctame!</h3>
        <p className="paragraph">
          A través de mis redes y medios de comunicación, <br />{" "}
          <b>espero tu mensaje.</b>
        </p>
        <div className="contenedor-botones">
          
          <a href="#" className="button-rrss"><SiLinkedin/></a>
          <a href="#" className="button-rrss"><SiGit/> </a>
          <a href="#" className="button-rrss"><SiFacebook/> </a>
          <a href="#" className="button-rrss"><SiGmail/> </a>
          <a href="#" className="button-rrss"><SiSololearn/> </a>
          
        </div>
      </div>
      <div className="contenedor">
        <div className="button">
          <a href="public/CV-Junio-22-Ignacio-Fernandez.pdf" download='CV Junio 22 Ignacio Fernandez' >Descarga mi CV</a>
        </div>
      </div>
    </>
  );
}

export default Contacto;
