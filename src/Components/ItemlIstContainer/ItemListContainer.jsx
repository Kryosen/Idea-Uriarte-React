import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import logoPagina from "../navbar/logoPAgina.jpg";
// import getFirestore from "../../firebase/config";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useCartContext } from "../../Context/CartContext";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoriaId } = useParams();
  const { categoryIdParams, setCategoryIdParams } = useCartContext();

  useEffect(() => {
    setCategoryIdParams(categoriaId);
  }, [categoriaId]);

  useEffect(() => {
    setLoading(true);
  }, [categoriaId]);

  useEffect(() => {
    if (categoriaId) {
      setTimeout(() => {
        const db = getFirestore();
        const queryCollection = collection(db, "productos");
        const queryCollectionFilter = query(
          queryCollection,
          where("category", "==", categoriaId)
        );
        getDocs(queryCollectionFilter)
          .then((resp) =>
            setProductos(
              resp.docs.map((item) => ({ id: item.id, ...item.data() }))
            )
          )
          .catch((err) => console.log(err))
          .finally(() => setLoading(false));
      }, 2000);
    } else {
      setTimeout(() => {
        const db = getFirestore();
        const queryCollection = collection(db, "productos");
        getDocs(queryCollection)
          .then((resp) =>
            setProductos(
              resp.docs.map((item) => ({ id: item.id, ...item.data() }))
            )
          )
          .catch((err) => console.log(err))
          .finally(() => setLoading(false));
      }, 2000);
    }
  }, [categoriaId]);

  // useEffect(() => {
  //   setLoading(true);
  // }, [categoriaId]);

  // if (categoriaId) {
  //   useEffect(() => {
  //     setTimeout(() => {
  //       fetch("../../src/assets/Productos.json")
  //         .then((respuesta) => respuesta.json())
  //         .then((res) =>
  //           setProductos(res.filter((prod) => prod.category === categoriaId))
  //         )
  //         .finally(() => setLoading(false));
  //     }, 2000);
  //   }, [categoriaId]);
  // } else {
  //   useEffect(() => {
  //     setTimeout(() => {
  //       fetch("../../src/assets/Productos.json")
  //         .then((respuesta) => respuesta.json())
  //         .then((res) => setProductos(res))
  //         .finally(() => setLoading(false));
  //     }, 3000);
  //   }, [categoriaId]);
  // }

  return (
    <div className="ContenedorBody">
      {/* {loading ? <h2>Loading...</h2> : <ItemList productos={productos} />} */}
      {loading ? (
        <div className="loader">
          <img src={logoPagina} className="logoCargando" alt="logo" />
        </div>
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
}

export default ItemListContainer;
