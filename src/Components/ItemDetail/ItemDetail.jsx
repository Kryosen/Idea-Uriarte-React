import ItemCount from "../ItemCount/ItemCount";
import FotoPaquetes from "../ItemlIstContainer/Paquetes.jpg";
import "./ItemDetail.css";

function ItemDetail({ productos: producto, onAdd }) {
  return (
    <div className="cajaDetalle">
      <div className="detailedProduct">
        <img src={FotoPaquetes} alt="Foto Paquetes" />
        <h3 className="tituloDetalleProducto">{producto.name}</h3>
        <p className="descriptionProducto">{producto.description}</p>
        <p className="PriceDescription">{producto.originalPrice}</p>
        <p className="PriceDescription">{producto.discountedPrice}</p>
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
