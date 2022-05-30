import { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import CartWidget from "./CartWidget/CartWidget";
import logoPagina from "./logoPagina.jpg";
import "./Navbar.css";

function NavBar() {
  const { categoryIdParams } = useCartContext();

  // console.log(categoryIdParams === "Mega-Packs");

  // useEffect(() => {

  // }, []);

  return (
    <header className="header">
      <div className="contenedorHeader">
        <Link to="/">
          <img src={logoPagina} className="logo" alt="logo" />
        </Link>
        <nav className="navBar">
          <ul className="navBarList">
            <li className="navBarItem">
              <NavLink to="/categoria/Mini-Packs" className="navBarLink">
                <button
                  className={
                    categoryIdParams === "Mini-Packs"
                      ? "activeNav custom-btnNav btn-13"
                      : "custom-btnNav btn-13"
                  }
                >
                  Mini-Packs
                </button>
              </NavLink>
            </li>
            <li className="navBarItem">
              <NavLink to="/categoria/Mega-Packs" className="navBarLink">
                <button
                  className={
                    categoryIdParams === "Mega-Packs"
                      ? "activeNav custom-btnNav btn-13"
                      : "custom-btnNav btn-13"
                  }
                >
                  Mega-Packs
                </button>
              </NavLink>
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
