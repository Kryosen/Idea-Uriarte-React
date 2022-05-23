import { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import FotoPaquetes from "../ItemlIstContainer/Paquetes.jpg";
import "./ItemDetail.css";

function ItemDetail({ productos }) {
  const [amount, setAmount] = useState(0);
  let whatava;

  useEffect(() => {
    console.log(amount);
  }, [amount]);

  function onAdd(cantidad) {
    setAmount((prevCount) => prevCount + cantidad);
  }

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
          amount={amount}
          onAdd={onAdd}
        />
      </div>
    </div>
  );
}

export default ItemDetail;
