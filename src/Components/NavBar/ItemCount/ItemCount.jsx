import { useState } from "react";
import "./ItemCount.css";

function ItemCount() {
  const [count, setCount] = useState(1);
  const [stock, setStock] = useState(5);

  function changeCount(cambiar) {
    if (cambiar === "sumar" && count < stock) {
      setCount(count + 1);
    } else if (cambiar === "restar" && count > 1) {
      setCount(count - 1);
    }
  }

  function agregarAlCarrito() {
    setStock(stock - count);
    setCount(1);
    console.log(stock);
    if (stock >= 1) {
      console.log(`Se agregaron ${count} packs al carrito`);
    }

    if (stock === 0) {
      document.getElementById("botonAgregar").disabled = true;
      document.getElementById("botonAgregar").innerText = "Sin Stock";
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
        id="botonAgregar"
        onClick={agregarAlCarrito}
      >
        Agregar al Carrito
      </button>
    </>
  );
}

export default ItemCount;
