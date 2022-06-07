import { useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.all.js";
import withReactContent from "sweetalert2-react-content";

import ButtonsEnd from "./ButtonsEnd/ButtonsEnd";

import "./ItemCount.css";

function ItemCount({ stck, onAdd, btnId, setCount, count }) {
  const [stock, setStock] = useState(stck);
  const [addToCart, setaddToCart] = useState(false);

  //Function that allows the change of the amount of items selected in ItemDetail
  function changeCount(change) {
    if (change === "add" && count < stock) {
      setCount(count + 1);
    } else if (change === "remove" && count > 1) {
      setCount(count - 1);
    }
  }

  //Functon to add Items to Cart
  function addItemToCart() {
    if (stock >= 1) {
      //SweetAlert Toast while adding items
      const MySwal = withReactContent(Swal);
      const Toast = MySwal.mixin({
        toast: true,
        width: "24rem",
        position: "bottom-end",
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
      });

      Toast.fire({
        icon: "success",
        title: `${count}  ${
          count === 1
            ? "producto agregado al carrito"
            : "productos agregados al carrito"
        } `,
      });
      onAdd(count);
    }

    //Setting new temporary stock of the item
    setStock(stock - count);

    setCount(1);

    //Changing buttons after adding to cart
    setaddToCart(true);
  }

  return (
    <>
      {addToCart ? (
        <ButtonsEnd />
      ) : (
        <>
          <div className="buttonContainer">
            <button
              className="plusMinusButtons"
              onClick={() => changeCount(`remove`)}
            >
              -
            </button>
            <p className="contadorBotones">{count}</p>
            <button
              className="plusMinusButtons"
              onClick={() => changeCount(`add`)}
            >
              +
            </button>
          </div>
          <button
            disabled={!stock}
            className="custom-btnAdd btnAdd"
            id={`buttonAdd${btnId}`}
            onClick={addItemToCart}
          >
            {stock === 0 ? "Sin Stock" : "Agregar al Carrito"}
          </button>
        </>
      )}
    </>
  );
}

export default ItemCount;
