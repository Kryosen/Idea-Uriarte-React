import { useCartContext } from "../../Context/CartContext";
import FotoPaquetes from "../ItemlIstContainer/Paquetes.jpg";
import { useEffect } from "react";
import "./Cart.css";
import Bin from "../../Assets/bin.png";

function Cart() {
  const { cartList, emptyCart, removeItemCart } = useCartContext();

  return (
    <div className="ContenedorCarrito">
      {cartList.map((producto) => (
        <>
          <div className="contenedorItemsCarrito">
            <img src={FotoPaquetes} alt="Foto Producto" className="fotoItem" />
            <div className="containerItemDetail">
              <div className="containerItemDetailInfo">
                <h2 className="tituloProducto">{producto.name}</h2>
                <p className="descripcionProducto">{producto.description}</p>
                <p className="descripcionProductoPrice">
                  {producto.originalPrice}
                </p>
                <p className="descripcionProductoPrice">
                  {producto.discountedPrice}
                </p>
              </div>
              <div className="containerPriceDetail">
                <h3 className="prices">
                  {"X " + producto.cantidad} -
                  {" $" + producto.price * producto.cantidad}
                </h3>
              </div>
            </div>
            <div className="ContenedorBotonEliminar">
              <button
                onClick={() => removeItemCart(producto.id)}
                className="botonEliminarProducto"
              >
                <img src={Bin} alt="Eliminar" />
              </button>
            </div>
          </div>
        </>
      ))}
      <button onClick={emptyCart} className="botonAgregar">
        Vaciar Carrito
      </button>
    </div>
  );
}

export default Cart;
