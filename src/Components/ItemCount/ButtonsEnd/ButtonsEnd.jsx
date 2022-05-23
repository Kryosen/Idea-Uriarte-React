import React from "react";
import { Link } from "react-router-dom";

export default function ButtonsEnd() {
  return (
    <>
      <Link to="/Cart">
        <button className="botonAgregar">Finalizar Compra</button>
      </Link>
      <Link to="/">
        <button className="botonAgregar">Seguir Comprando</button>
      </Link>
    </>
  );
}
