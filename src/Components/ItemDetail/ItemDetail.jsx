import ItemCount from "../ItemCount/ItemCount";

import "./ItemDetail.css";

//Rendering of ItemDetail
function ItemDetail({ products, onAdd, setCount, count }) {
  return (
    <div className="detailBox">
      <div className="detailedProduct">
        <img src={products.image} alt="Foto Paquetes" />
        <h3 className="productDetailName">{products.name}</h3>
        <p className="productDescription">{products.description}</p>
        <p className="priceDescription">{products.originalPrice}</p>
        <p className="priceDescription">{products.discountedPrice}</p>
        <p className="productPrice" id={`price${products.id}`}>{`$${
          products.price * count
        }`}</p>
        <ItemCount
          btnId={products.id}
          stck={products.stock}
          onAdd={onAdd}
          setCount={setCount}
          count={count}
        />
      </div>
    </div>
  );
}

export default ItemDetail;
