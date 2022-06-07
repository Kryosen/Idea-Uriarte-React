import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [categoryIdParams, setCategoryIdParams] = useState("");
  const [purchaseTicket, setPurchaseTicket] = useState("");

  //Function that add items to Cart depending on the item and the amounts
  function addToCart(item) {
    if (cartContainsItem(item)) {
      const cartCopy = [...cartList];
      cartCopy[
        cartCopy.findIndex((product) => product.id === item.id)
      ].quantity += item.quantity;
      setCartList(cartCopy);
    } else {
      setCartList([...cartList, item]);
    }
  }

  //Function that check if the item selected is already in the Cart to only change the amount
  function cartContainsItem(item) {
    return cartList.some((product) => product.id === item.id);
  }

  //Function that removes the item selected from the Cart
  function removeItemCart(id) {
    const newCart = cartList.filter((prod) => prod.id !== id);

    setCartList(newCart);
  }

  //Function that removes all items from the Cart
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
        categoryIdParams,
        setCategoryIdParams,
        setPurchaseTicket,
        purchaseTicket,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
