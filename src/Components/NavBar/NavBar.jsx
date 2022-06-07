import { Link } from "react-router-dom";

import { useCartContext } from "../../Context/CartContext";
import ButtonNavbar from "../ButtonNavbar/ButtonNavbar";
import CartWidget from "./CartWidget/CartWidget";
import pageLogo from "./logoPagina.jpg";
import { categories } from "../Constants/Categories";

import "./Navbar.css";

function NavBar() {
  const { categoryIdParams } = useCartContext();

  return (
    <header className="header">
      <div className="headerContainer">
        <Link to="/">
          <img src={pageLogo} className="logo" alt="logo" />
        </Link>
        <nav className="navBar">
          <ul className="navBarList">
            {/*Mapping buttons so we don't repeat the same system to make each button*/}
            {categories.map((category) => {
              return (
                <ButtonNavbar
                  toLocation={`/categoria/${category.link}`}
                  categoryIdParams={categoryIdParams}
                  buttonCategory={category.link}
                  buttonName={category.friendlyName}
                />
              );
            })}
          </ul>
        </nav>
        <CartWidget />
      </div>
    </header>
  );
}

export default NavBar;
