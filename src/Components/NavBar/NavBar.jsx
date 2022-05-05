import CartWidget from "./CartWidget/CartWidget.jsx";
import logoPagina from "./logoPagina.jpg";
import "./NavBar.css";

function NavBar() {
  return (
    <header className="header">
      <div className="contenedorHeader">
        <img src={logoPagina} className="logo" alt="logo" />
        <nav className="navBar">
          <ul className="navBarList">
            <li className="navBarItem">
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
            </li>
          </ul>
        </nav>
        <CartWidget />
      </div>
    </header>
  );
}

export default NavBar;
