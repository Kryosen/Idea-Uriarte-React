import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import FotoPaquetes from "../ItemlIstContainer/Paquetes.jpg";
import "./Item.css";

function Item({ producto }) {
  return (
    <div className="cajasItems">
      <img src={FotoPaquetes} alt="Foto Paquetes" />
      <div className="cajasItemsText">
        <p className="nombresCajas">{producto.name}</p>
        <Link to={`/detalle/${producto.id}`}>
          <button className="botonDetalle custom-btn btnDetalle ">
            <span>Detalle</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Item;
