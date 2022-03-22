import React, { useState } from "react";
import { Nav, Navbar, Badge } from "react-bootstrap";
import NavbarCSS from "./NavbarCSS.module.scss";
import { NavLink } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";

function NavBar() {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <Navbar className={NavbarCSS.navbar}>
      <NavLink to="/inicio" className={NavbarCSS.brand}>
        Ignacio Dev
      </NavLink>
      <TiThMenu
        onClick={() => setShowMenu(!showMenu)}
        className={showMenu === true ? NavbarCSS.menuIconOpen : NavbarCSS.menuIcon}
      />
      <Nav
        className={
          showMenu === true ? NavbarCSS.grupoListaOpen : NavbarCSS.grupoLista
        }
      >
        <NavLink
          to="/inicio"
          className={(navData) =>
            navData.isActive ? NavbarCSS.activeLink : NavbarCSS.navLink
          }
          onClick={() => setShowMenu(false)}
        >
          Inicio
        </NavLink>
        <NavLink
          to="/works"
          className={(navData) =>
            navData.isActive ? NavbarCSS.activeLink : NavbarCSS.navLink
          }
          onClick={() => setShowMenu(false)}
        >
          Trabajos/Proyectos
        </NavLink>
        <NavLink
          to="/contacto"
          className={(navData) =>
            navData.isActive ? NavbarCSS.activeLink : NavbarCSS.navLink
          }
          onClick={() => setShowMenu(false)}
        >
          Contacto
        </NavLink>
        <NavLink
          to="/portfolio"
          className={(navData) =>
            navData.isActive ? NavbarCSS.activeLink : NavbarCSS.navLink
          }
          onClick={() => setShowMenu(false)}
        >
          Este portfolio{" "}
          <Badge className={NavbarCSS.badge} pill bg="" text="">
            {" "}
            (en desarrollo){" "}
          </Badge>
        </NavLink>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
