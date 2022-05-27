import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ButtonsEnd from "./ButtonsEnd/ButtonsEnd";
import "./ItemCount.css";

function ItemCount({ stck, inicial, onAdd, btnId, price }) {
  const [count, setCount] = useState(inicial);
  const [stock, setStock] = useState(stck);
  const [addToCart, setaddToCart] = useState(false);

  useEffect(() => {
    disableButton();
  }, [stock]);

  useEffect(() => {
    document.getElementById(`precio${btnId}`).innerText = `$${price * count}`;
  }, [count]);

  function buttonHandler() {
    setaddToCart(true);
  }

  function changeCount(cambiar) {
    if (cambiar === "sumar" && count < stock) {
      setCount(count + 1);
      document.getElementById(`precio${btnId}`).innerText = `$${price * count}`;
    } else if (cambiar === "restar" && count > 1) {
      setCount(count - 1);
      document.getElementById(`precio${btnId}`).innerText = `$${price * count}`;
    }
  }

  function agregarAlCarrito() {
    if (stock >= 1) {
      // console.log(`Se agregaron ${count} packs al carrito`);
      onAdd(count);
    }
    setStock(stock - count);
    setCount(1);

    if (stock === 0) {
      document.getElementById(`botonAgregar${btnId}`).disabled = true;
      document.getElementById(`botonAgregar${btnId}`).innerText = "Sin Stock";
    }
    buttonHandler();
  }

  function disableButton() {
    if (!addToCart) {
      if (
        document.getElementById(`botonAgregar${btnId}`).innerText ===
        "Sin Stock"
      ) {
        document.getElementById(`botonAgregar${btnId}`).disabled = true;
      }
    }
  }

  return (
    <>
      {addToCart ? (
        <ButtonsEnd />
      ) : (
        <>
          <div className="buttonContainer">
            <button
              className="botonesMasMenos"
              onClick={() => changeCount(`restar`)}
            >
              -
            </button>
            <p className="contadorBotones">{count}</p>
            <button
              className="botonesMasMenos"
              onClick={() => changeCount(`sumar`)}
            >
              +
            </button>
          </div>
          <button
            className="custom-btnAgregar btnAgregar"
            id={`botonAgregar${btnId}`}
            onClick={agregarAlCarrito}
          >
            <>{stock === 0 ? "Sin Stock" : "Agregar al Carrito"}</>
          </button>
        </>
      )}
    </>
  );
}

export default ItemCount;
