import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import logoPagina from "../navbar/logoPAgina.jpg";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useCartContext } from "../../Context/CartContext";

function ItemDetailContainer() {
  const [productos, setProductos] = useState({});
  const [loading, setLoading] = useState(true);

  const { cartList, addToCart } = useCartContext();

  const { detalleId } = useParams();

  useEffect(() => {
    setTimeout(() => {
      const db = getFirestore();
      const dbQuery = doc(db, "productos", detalleId);
      getDoc(dbQuery)
        .then((resp) => {
          const gonza = { id: resp.id, ...resp.data() };

          if (cartList.some((producto) => producto.id === gonza.id)) {
            const cartQuantity =
              cartList[cartList.findIndex((prod) => prod.id === gonza.id)]
                .cantidad;
            const stockProd = gonza.stock;
            console.log(cartQuantity);
            setProductos({ ...gonza, stock: stockProd - cartQuantity });
          } else {
            setProductos(gonza);
          }
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }, 2000);
  }, []);

  function onAdd(cantidad) {
    addToCart({ ...productos, cantidad });
  }

  return (
    <div className="ContenedorBody">
      {loading ? (
        <div className="loader">
          <img src={logoPagina} className="logoCargando" alt="logo" />
        </div>
      ) : (
        <ItemDetail productos={productos} onAdd={onAdd} />
      )}
    </div>
  );
}

export default ItemDetailContainer;
