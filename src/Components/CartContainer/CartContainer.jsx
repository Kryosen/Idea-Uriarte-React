import { useCartContext } from "../../Context/CartContext";
import { useState } from "react";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Cart from "../Cart/Cart.jsx";

function CartContainer() {
  const { cartList, emptyCart, removeItemCart, setComprobanteCompra } =
    useCartContext();

  const [openModal, setOpenModal] = useState(false);

  const [clienInfo, setClienInfo] = useState(false);

  let navigate = useNavigate();

  function realizarOrden() {
    let order = {};

    function goToCompleted() {
      navigate("/PurchaseCompleted");
    }

    order.items = cartList.map((prod) => {
      return { id: prod.id, name: prod.name, price: prod.price };
    });

    order.total = cartList.reduce(
      (previousValue, currentValue) =>
        previousValue + currentValue.price * currentValue.cantidad,
      0
    );

    order.buyer = clienInfo;

    setOpenModal(false);

    const db = getFirestore();
    const queryCollection = collection(db, "orders");
    addDoc(queryCollection, order)
      .then((resp) => setComprobanteCompra(resp.id))
      .then(emptyCart)
      .catch((err) => console.log(err))
      .finally(goToCompleted);
  }

  return (
    <div className="ContenedorBodyCarrito">
      <Cart
        setClienInfo={setClienInfo}
        setOpenModal={setOpenModal}
        openModal={openModal}
        cartList={cartList}
        emptyCart={emptyCart}
        removeItemCart={removeItemCart}
        realizarOrden={realizarOrden}
      />
    </div>
  );
}

export default CartContainer;
