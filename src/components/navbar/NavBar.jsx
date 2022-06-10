import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className='navbar'>
      <div className='navigation'>
        <NavLink
          to="/inicio"
          className={(navData) =>
            navData.isActive ? 'active-link' : 'non-active-link'
          }
        >
          Sobre mi
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
      </div>
    </div>
  );
}

export default NavBar;
