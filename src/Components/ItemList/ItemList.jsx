import { useState, useEffect } from "react";
import Item from "../Item/Item";
import FotoPaquetes from "../ItemlIstContainer/Paquetes.jpg";
import "./ItemList.css";

function ItemList({ productos }) {
  return (
    <div className="cajaProductos">
      {productos.map((producto) => (
        <Item producto={producto} key={producto.id} />
      ))}
    </div>
  );
}

export default ItemList;
