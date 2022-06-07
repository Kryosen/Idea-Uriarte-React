import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

import ItemDetail from "../ItemDetail/ItemDetail";
import { useCartContext } from "../../Context/CartContext";
import pageLogo from "../navbar/logoPAgina.jpg";

function ItemDetailContainer() {
  const [products, setproducts] = useState({});
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  const { cartList, addToCart } = useCartContext();

  const { detailId } = useParams();

  //Fetch to Firestore of the product selected in item. Also the Stock of the product changes depending of the amount of items in the Cart
  useEffect(() => {
    const db = getFirestore();
    const dbQuery = doc(db, "productos", detailId);
    getDoc(dbQuery)
      .then((resp) => {
        const productsReceived = { id: resp.id, ...resp.data() };

        if (cartList.some((prod) => prod.id === productsReceived.id)) {
          const cartQuantity =
            cartList[
              cartList.findIndex((prod) => prod.id === productsReceived.id)
            ].quantity;
          const stockProd = productsReceived.stock;
          setproducts({
            ...productsReceived,
            stock: stockProd - cartQuantity,
          });
        } else {
          setproducts(productsReceived);
        }
      })
      .catch((err) => console.log(err))
      .finally(() =>
        setTimeout(() => {
          setLoading(false);
        }, 2000)
      );
  }, []);

  //Function  from the CartContext to add products to the Cart
  function onAdd(quantity) {
    addToCart({ ...products, quantity });
  }

  //Conditional loader while the Fetch is made
  if (loading) {
    return (
      <div className="bodyContainer">
        <div className="loader">
          <img src={pageLogo} className="loadingLogo" alt="logo" />
        </div>
      </div>
    );
  }

  //Calling on ItemDetail with the parameters received from the Fetch
  return (
    <div className="bodyContainer">
      <ItemDetail
        products={products}
        onAdd={onAdd}
        setCount={setCount}
        count={count}
      />
    </div>
  );
}

export default ItemDetailContainer;
