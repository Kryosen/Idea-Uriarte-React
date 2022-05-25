import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  function addToCart(item) {
    if (cartContainsItem(item)) {
      cartList[
        cartList.findIndex((producto) => producto.id === item.id)
      ].cantidad += item.cantidad;
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

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        emptyCart,
        removeItemCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
