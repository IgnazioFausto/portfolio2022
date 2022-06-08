import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar className='navbar'>
      <Nav>
        <NavLink
          to="/inicio"
          className={(navData) =>
            navData.isActive ? 'active-link' : 'non-active-link'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/works"
          className={(navData) =>
            navData.isActive ? 'active-link' : 'non-active-link'
          }
        >
          Trabajos/Proyectos
        </NavLink>
        <NavLink
          to="/contacto"
          className={(navData) =>
            navData.isActive ? 'active-link' : 'non-active-link'
          }
        >
          Contacto
        </NavLink>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
