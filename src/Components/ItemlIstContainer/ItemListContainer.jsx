import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import ItemList from "../ItemList/ItemList";
import pageLogo from "../navbar/logoPAgina.jpg";
import { useCartContext } from "../../Context/CartContext";

import "./ItemListContainer.css";
import HeroItemList from "../HeroItemList/HeroItemList";
import ItemListBanner from "../ItemListBanner/ItemListBanner";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();
  const { setCategoryIdParams } = useCartContext();

  // Category change and loading set every time a category change
  useEffect(() => {
    setCategoryIdParams(categoryId);
    setLoading(true);
  }, [categoryId]);

  // Products Fetch to Firestore filtering the products by category if needed
  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "productos");
    getDocs(
      categoryId
        ? query(queryCollection, where("category", "==", categoryId))
        : queryCollection
    )
      .then((resp) =>
        setProducts(resp.docs.map((item) => ({ id: item.id, ...item.data() })))
      )
      .catch((err) => console.log(err))
      .finally(() =>
        setTimeout(() => {
          setLoading(false);
        }, 2000)
      );
  }, [categoryId]);

  // Conditional loader while the Fetch is made
  if (loading) {
    return (
      <div className="bodyContainer">
        <div className="loader">
          <img src={pageLogo} className="loadingLogo" alt="logo" />
        </div>
      </div>
    );
  }

  // Item List container modules calling
  return (
    <div className="bodyContainer">
      <HeroItemList />
      <ItemListBanner categoryId={categoryId} products={products} />
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
