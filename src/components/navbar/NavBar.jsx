import { Nav, Navbar, Badge } from "react-bootstrap";
import NavbarCSS from "./NavbarCSS.module.scss";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar className={NavbarCSS.navbar}>
      <NavLink to="/inicio" className={NavbarCSS.brand}>
        Ignacio Dev
      </NavLink>
      <Nav>
        <NavLink
          to="/inicio"
          className={(navData) => navData.isActive ? NavbarCSS.activeLink : NavbarCSS.navLink }>
          Inicio
        </NavLink>
        <NavLink
          to="/works"
          className={(navData) => navData.isActive ? NavbarCSS.activeLink : NavbarCSS.navLink }>
          Trabajos/Proyectos
        </NavLink>
        <NavLink
          to="/contacto"
          className={(navData) =>
            navData.isActive ? NavbarCSS.activeLink : NavbarCSS.navLink
          }
        >
          Contacto
        </NavLink>
        <NavLink
          to="/portfolio"
          className={(navData) =>
            navData.isActive ? NavbarCSS.activeLink : NavbarCSS.navLink
          }
        >
          Este portfolio  <Badge className={NavbarCSS.badge} pill bg="" text="">  (en desarrollo) </Badge>
        </NavLink>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
