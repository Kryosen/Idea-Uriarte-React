import { useState, useEffect } from "react";
import "./ItemCount.css";

function ItemCount({ stck, inicial, onAdd, btnId }) {
  const [count, setCount] = useState(inicial);
  const [stock, setStock] = useState(stck);

  useEffect(() => {
    disableButton();
  }, [stock]);

  function changeCount(cambiar) {
    if (cambiar === "sumar" && count < stock) {
      setCount(count + 1);
    } else if (cambiar === "restar" && count > 1) {
      setCount(count - 1);
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
  }

  function disableButton() {
    if (
      document.getElementById(`botonAgregar${btnId}`).innerText === "Sin Stock"
    ) {
      document.getElementById(`botonAgregar${btnId}`).disabled = true;
    }
  }

  return (
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
        className="botonAgregar"
        id={`botonAgregar${btnId}`}
        onClick={agregarAlCarrito}
      >
        <>{stock === 0 ? "Sin Stock" : "Agregar al Carrito"}</>
      </button>
    </>
  );
}

export default ItemCount;
