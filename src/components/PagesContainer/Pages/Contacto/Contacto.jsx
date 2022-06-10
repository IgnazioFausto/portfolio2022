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
          <div className="button">
            <a href="#">LinkedIn</a>
          </div>
          <div className="button">
            <a href="#">Github</a>
          </div>
          <div className="button">
            <a href="#">Facebook</a>
          </div>
          <div className="button">
            <a href="#">SoloLearn</a>
          </div>
          <div className="button">
            <a href="#">Gmail</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacto;
