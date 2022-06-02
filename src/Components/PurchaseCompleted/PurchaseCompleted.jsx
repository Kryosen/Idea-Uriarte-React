import React from "react";
import { useCartContext } from "../../Context/CartContext";
import "./PurchaseCompleted.css";

export default function PurchaseCompleted() {
  const { comprobanteCompra } = useCartContext();
  console.log(comprobanteCompra);

  return (
    <div className="cajaCompraFinalizada">
      <div className="cajaDatosCompra">
        <h1 className="comprobanteTitulo">¡Compra Completada!</h1>
        <h2 className="comprobanteInfo">Tu comprobante de compra es:</h2>
        <h2 className="idCompra">{comprobanteCompra}</h2>
        <p>
          Ante cualquier consulta podes contactarte con soporte en la pestaña de
          soporte con el numero de comprobante
        </p>
      </div>
    </div>
  );
}
