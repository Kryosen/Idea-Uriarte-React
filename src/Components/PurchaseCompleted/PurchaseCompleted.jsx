import React from "react";

import { useCartContext } from "../../Context/CartContext";

import "./PurchaseCompleted.css";

export default function PurchaseCompleted() {
  //Receiving the information from the Purchase Created
  const { purchaseTicket } = useCartContext();
  //Checking that the purchase was succesful
  console.log(purchaseTicket);

  return (
    <div className="cajaCompraFinalizada">
      <div className="cajaDatosCompra">
        <h1 className="comprobanteTitulo">¡Compra Completada!</h1>
        <h2 className="comprobanteInfo">Tu comprobante de compra es:</h2>
        <h2 className="idCompra">{purchaseTicket}</h2>
        <p>
          Ante cualquier consulta podes contactarte con soporte en la pestaña de
          soporte con el numero de comprobante
        </p>
      </div>
    </div>
  );
}
