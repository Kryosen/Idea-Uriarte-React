import { useCartContext } from "../../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import FotoPaquetes from "../ItemlIstContainer/Paquetes.jpg";
import "./ItemDetail.css";

function ItemDetail({ productos: producto }) {
  const { addToCart, cartList } = useCartContext();

  function onAdd(cantidad) {
    addToCart({ ...producto, cantidad });
  }

  return (
    <div className="cajaDetalle">
      <div className="detailedProduct">
        <img src={FotoPaquetes} alt="Foto Paquetes" />
        <h3>{producto.name}</h3>
        <p className="descriptionProducto">{producto.description}</p>
        <p
          className="precioProducto"
          id={`precio${producto.id}`}
        >{`$${producto.price}`}</p>
        <ItemCount
          btnId={producto.id}
          price={producto.price}
          stck={producto.stock}
          inicial={1}
          onAdd={onAdd}
        />
      </div>
    </div>
  );
}

export default ItemDetail;
