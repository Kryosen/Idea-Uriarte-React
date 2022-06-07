import { NavLink } from "react-router-dom";

import { useCartContext } from "../../../Context/CartContext";

function CartWidget() {
  const { cartList } = useCartContext();

  //Function that changes the number on the Cart Widget
  function productsQuantity() {
    return cartList.reduce(
      (previousValue, currentValue) => previousValue + currentValue.quantity,
      0
    );
  }

  //Allowing the Cart Widget to not have number if the CartItems is 0
  return (
    <NavLink to="/Cart" className="linkCartIcon">
      <div className="containerCartIcon">
        {productsQuantity() > 0 && (
          <h5 className="cartAmount"> {productsQuantity()}</h5>
        )}
      </div>
    </NavLink>
  );
}

export default CartWidget;
