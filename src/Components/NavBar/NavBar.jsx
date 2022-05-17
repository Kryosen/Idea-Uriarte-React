import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";
import logoPagina from "./logoPagina.jpg";
import "./Navbar.css";

function NavBar() {
  return (
    <header className="header">
      <div className="contenedorHeader">
        <Link to="/">
          <img src={logoPagina} className="logo" alt="logo" />
        </Link>
        <nav className="navBar">
          <ul className="navBarList">
            <li className="navBarItem">
              <NavLink to="/categoria/Mini-Packs">Mini-Packs</NavLink>
            </li>
            <li className="navBarItem">
              <NavLink to="/categoria/Mega-Packs">Mega-Packs</NavLink>
            </li>

            {/* <li className="navBarItem">
              <a href="">Home</a>
            </li>
            <li className="navBarItem">
              <a href="">Envios</a>
            </li>
            <li className="navBarItem">
              <a href="">Mis Envios</a>
            </li>
            <li className="navBarItem">
              <a href="">Precios</a>
            </li>
            <li className="navBarItem">
              <a href="">Contacto</a>
            </li> */}
          </ul>
        </nav>
        <CartWidget />
      </div>
    </header>
  );
}

export default NavBar;
