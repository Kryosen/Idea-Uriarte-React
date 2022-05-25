import { NavLink } from "react-router-dom";
import { useCartContext } from "../../../Context/CartContext";

function CartWidget() {
  const { cartList } = useCartContext();

  function cantidadDeProductos() {
    return cartList.reduce(
      (previousValue, currentValue) => previousValue + currentValue.cantidad,
      0
    );
  }

  return (
    <NavLink to="/Cart" className="linkCartIcon">
      <div className="containerCartIcon">
        {cantidadDeProductos() ? (
          <h5 className="cartAmount"> {cantidadDeProductos()}</h5>
        ) : (
          <></>
        )}
        {/* <img src={CartIcon} className="CartIcon" alt="CartIcon" /> */}
      </div>
    </NavLink>
  );
}

export default CartWidget;
