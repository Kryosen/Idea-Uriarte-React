import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import logoPagina from "../navbar/logoPAgina.jpg";

function ItemDetailContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   receiveInfo
  //     .then((answer) => setProductos(answer))
  //     .catch((problem) => console.log(problem))
  //     .finally(() => setLoading(false));
  // }, []);

  const { detalleId } = useParams();

  useEffect(() => {
    setTimeout(() => {
      fetch("../../src/assets/Productos.json")
        .then((respuesta) => respuesta.json())
        .then((res) =>
          setProductos(res.find((producto) => producto.id === detalleId))
        )
        .finally(() => setLoading(false));
    }, 2000);
  }, []);

  return (
    <div className="ContenedorBody">
      {loading ? (
        <div class="loader">
          <img src={logoPagina} className="logoCargando" alt="logo" />
        </div>
      ) : (
        <ItemDetail productos={productos} />
      )}
    </div>
  );
}

export default ItemDetailContainer;
