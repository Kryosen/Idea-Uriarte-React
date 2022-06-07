import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";

import { useCartContext } from "../../Context/CartContext";
import Cart from "../Cart/Cart.jsx";

import "./Cart.css";

function CartContainer() {
  const {
    cartList,
    emptyCart,
    removeItemCart,
    setPurchaseTicket,
    setCategoryIdParams,
  } = useCartContext();

  const [openModal, setOpenModal] = useState(false);

  const [clienInfo, setClienInfo] = useState(false);

  //Setting the Category used to conditional Rendering
  setCategoryIdParams(useParams());

  let navigate = useNavigate();

  //Obtaining the data from different parts of the code to create the Purchase Order
  function makeAPurchase() {
    let order = {};

    //Navigating to the PurchaseCompleted page with the information for the Client
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

    //Closing modal
    setOpenModal(false);

    //Adding the purchase information to the Firestore Database
    const db = getFirestore();
    const queryCollection = collection(db, "orders");
    addDoc(queryCollection, order)
      .then((resp) => setPurchaseTicket(resp.id))
      .then(emptyCart)
      .catch((err) => console.log(err))
      .finally(goToCompleted);
  }

  return (
    <div className="cartBodyContainer">
      <Cart
        setClienInfo={setClienInfo}
        setOpenModal={setOpenModal}
        openModal={openModal}
        cartList={cartList}
        emptyCart={emptyCart}
        removeItemCart={removeItemCart}
        makeAPurchase={makeAPurchase}
      />
    </div>
  );
}

export default CartContainer;
