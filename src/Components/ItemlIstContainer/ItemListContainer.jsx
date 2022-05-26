import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import logoPagina from "../navbar/logoPAgina.jpg";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoriaId } = useParams();

  useEffect(() => {
    setLoading(true);
  }, [categoriaId]);

  if (categoriaId) {
    useEffect(() => {
      setTimeout(() => {
        fetch("../../src/assets/Productos.json")
          .then((respuesta) => respuesta.json())
          .then((res) =>
            setProductos(res.filter((prod) => prod.category === categoriaId))
          )
          .finally(() => setLoading(false));
      }, 2000);
    }, [categoriaId]);
  } else {
    useEffect(() => {
      setTimeout(() => {
        fetch("../../src/assets/Productos.json")
          .then((respuesta) => respuesta.json())
          .then((res) => setProductos(res))
          .finally(() => setLoading(false));
      }, 3000);
    }, [categoriaId]);
  }

  return (
    <div className="ContenedorBody">
      {/* {loading ? <h2>Loading...</h2> : <ItemList productos={productos} />} */}
      {loading ? (
        <div class="loader">
          <img src={logoPagina} className="logoCargando" alt="logo" />
        </div>
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
}

export default ItemListContainer;
