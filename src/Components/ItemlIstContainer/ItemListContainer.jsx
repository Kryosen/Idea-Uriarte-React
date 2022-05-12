import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

const productos = [
  {
    id: "1",
    stock: 7,
    category: "packs",
    name: "Pack de 10 paquetes",
    price: 4500,
    image: "/Paquetes.jpg",
  },
  {
    id: "2",
    stock: 5,
    category: "packs",
    name: "Pack de 50 paquetes",
    price: 20000,
    image: "/Paquetes.jpg",
  },
  {
    id: "3",
    stock: 0,
    category: "packs",
    name: "Pack de 100 paquetes",
    price: 35000,
    image: "/Paquetes.jpg",
  },
  {
    id: "4",
    stock: 2,
    category: "packs",
    name: "Pack de 20 paquetes",
    price: 9000,
    image: "/Paquetes.jpg",
  },
  {
    id: "5",
    stock: 10,
    category: "packs",
    name: "Pack de 200 paquetes",
    price: 70000,
    image: "/Paquetes.jpg",
  },
  {
    id: "6",
    stock: 0,
    category: "packs",
    name: "Pack de 5 paquetes",
    price: 2250,
    image: "/Paquetes.jpg",
  },
];

const receiveInfo = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(productos);
  }, 5000);
});

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    receiveInfo
      .then((answer) => setProductos(answer))
      .catch((problem) => console.log(problem))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading ? <h2>Loading...</h2> : <ItemList productos={productos} />}
    </div>
  );
}

export default ItemListContainer;
