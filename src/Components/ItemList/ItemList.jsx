import Item from "../Item/Item";

import "./ItemList.css";

//Receiving the Products and mapping them into Cards to show in the container
function ItemList({ products }) {
  return (
    <div className="productsBox">
      {products.map((product) => (
        <Item product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ItemList;
