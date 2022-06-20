import { BiTask } from "react-icons/bi";

function Roadmap() {
  return (
    <div className="contenedor">
      <h3 className="title">Roadmap</h3>
      <p className="paragraph"
      >Conocé mi mapa de aprendizaje hasta ahora.</p>
      <div className="contenedor-map">
        <div className="map">
          <p className="skill">HTML</p>
          <div className="flecha"></div>
          <div className="flecha"></div>
          <p className="skill">CSS</p>
          <div className="flecha"></div>
          <div className="flecha"></div>
          <p className="skill">Git/Github</p>
          <div className="flecha"></div>
          <div className="flecha"></div>
          <p className="skill">Bootstrap 5.0</p>
          <div className="flecha"></div>
          <div className="flecha"></div>
          <p className="skill">JavaScript</p>
          <div className="flecha"></div>
          <div className="flecha"></div>
        </div>
        <div className="map">
          <p className="skill">JQuery</p>
          <div className="flecha"></div>
          <div className="flecha"></div>
          <p className="skill">SASS</p>
          <div className="flecha"></div>
          <div className="flecha"></div>
          <p className="skill">React JS</p>
          <div className="flecha"></div>
          <div className="flecha"></div>
          <p className="skill">Python</p>
          <div className="flecha"></div>
          <div className="flecha"></div>
          <p className="skill">Django</p>
          <div className="flecha"></div>
          <div className="flecha"></div>
        </div>
        <div className="map">
          <p className="skill">React Native</p>
          <div className="flecha"></div>
          <div className="flecha"></div>
          <div className="flecha"></div>
        </div>
      </div>
      <div className="contenedor">
        <p className="title">¿Qué puedo hacer?</p>
        <div className="flecha"></div>
        <p className="paragraph">En qué puedo colaborar:</p>
        <div className="flecha"></div>
        <div className="colab">
          <p className="li-element">
            <BiTask className="icono-lista" />
            Maquetado de sitios web
          </p>
          <p className="li-element">
            <BiTask className="icono-lista" />
            Revisión de SEO
          </p>
          <p className="li-element">
            <BiTask className="icono-lista" />
            Estilado con CSS y SASS
          </p>
          <p className="li-element">
            <BiTask className="icono-lista" />
            Diseño responsive
          </p>
          <p className="li-element">
            <BiTask className="icono-lista" />
            Desarrollo de aplicaciones web
          </p>
          <p className="li-element">
            <BiTask className="icono-lista" />
            Diseño de componentes reutilizables (React)
          </p>
          <p className="li-element">
            <BiTask className="icono-lista" />
            Manejo de paquetes de Node.js
          </p>
          <p className="li-element">
            <BiTask className="icono-lista" />
            Integración de APIS
          </p>
          <p className="li-element">
            <BiTask className="icono-lista" />
            Trabajo en equipo con Git & Github
          </p>
        </div>
        <div className="flecha"></div>
        <div className="flecha"></div>
      </div>
      <div className="contenedor">
        <p className="paragraph">Como pienso seguir mi Roadmap:</p>
        <div className="map">
          <div className="flecha"></div>
          <div className="flecha"></div>
          <div className="flecha"></div>
          <p className="skill">Mongo DB</p>
          <p className="skill">Express.js</p>
          <p className="skill">Node.js</p>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
