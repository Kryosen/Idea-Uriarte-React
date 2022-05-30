import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [categoryIdParams, setCategoryIdParams] = useState("");

  function addToCart(item) {
    if (cartContainsItem(item)) {
      const cartCopy = [...cartList];
      cartCopy[
        cartCopy.findIndex((producto) => producto.id === item.id)
      ].cantidad += item.cantidad;
      setCartList(cartCopy);
    } else {
      setCartList([...cartList, item]);
    }
  }

  function cartContainsItem(item) {
    return cartList.some((producto) => producto.id === item.id);
  }

  function removeItemCart(id) {
    const newCart = cartList.filter((prod) => prod.id !== id);

    setCartList(newCart);
  }

  function emptyCart() {
    setCartList([]);
  }

  function updateCantidadDisponible() {
    setcantidadDisponible();
  }

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        emptyCart,
        removeItemCart,
        categoryIdParams,
        setCategoryIdParams,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
