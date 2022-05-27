import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import logoPagina from "../navbar/logoPAgina.jpg";
import { getFirestore, doc, getDoc } from "firebase/firestore";

function ItemDetailContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { detalleId } = useParams();

  useEffect(() => {
    setTimeout(() => {
      const db = getFirestore();
      const dbQuery = doc(db, "productos", detalleId);
      getDoc(dbQuery)
        .then((resp) => setProductos({ id: resp.id, ...resp.data() }))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }, 2000);
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     fetch("../../src/assets/Productos.json")
  //       .then((respuesta) => respuesta.json())
  //       .then((res) =>
  //         setProductos(res.find((producto) => producto.id === detalleId))
  //       )
  //       .finally(() => setLoading(false));
  //   }, 2000);
  // }, []);

  return (
    <div className="ContenedorBody">
      {loading ? (
        <div className="loader">
          <img src={logoPagina} className="logoCargando" alt="logo" />
        </div>
      ) : (
        <ItemDetail productos={productos} />
      )}
    </div>
  );
}

export default ItemDetailContainer;
