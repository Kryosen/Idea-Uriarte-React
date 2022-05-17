import { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import FotoPaquetes from "../ItemlIstContainer/Paquetes.jpg";
import "./ItemDetail.css";

function ItemDetail({ productos }) {
  //   const [producto, setProducto] = useState(
  //     productos.find((producto) => producto.id === "1")
  //   );

  return (
    <div className="cajaDetalle">
      <div className="detailedProduct">
        <img src={FotoPaquetes} alt="Foto Paquetes" />
        <h3>{productos.name}</h3>
        <p className="descriptionProducto">{productos.description}</p>
        <p
          className="precioProducto"
          id={`precio${productos.id}`}
        >{`$${productos.price}`}</p>
        <ItemCount
          btnId={productos.id}
          price={productos.price}
          stck={productos.stock}
          inicial={1}
          onAdd={(cantidad) => {
            console.log(
              `Se agregaron ${cantidad} packs de "${productos.name}" al carrito`
            );
          }}
        />
      </div>
    </div>
  );
}

export default ItemDetail;
