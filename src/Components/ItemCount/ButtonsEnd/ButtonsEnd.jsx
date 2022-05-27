import React from "react";
import { Link } from "react-router-dom";

export default function ButtonsEnd() {
  return (
    <>
      <Link to="/Cart">
        <button className="custom-btnFinalCart btnFinalCart">
          Finalizar Compra
        </button>
      </Link>
      <Link to="/">
        <button className="custom-btnFinalContinue btnFinalContinue">
          Seguir Comprando
        </button>
      </Link>
    </>
  );
}
