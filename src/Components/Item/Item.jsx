import { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import FotoPaquetes from "../ItemlIstContainer/Paquetes.jpg";

function Item({ producto }) {
  return (
    <div>
      <img src={FotoPaquetes} alt="Foto Paquetes" />
      <p>{producto.name}</p>
      <ItemCount
        btnId={producto.id}
        stck={producto.stock}
        inicial={1}
        onAdd={(cantidad) => {
          console.log(
            `Se agregaron ${cantidad} packs de "${producto.name}" al carrito`
          );
        }}
      />
    </div>
  );
}

export default Item;
