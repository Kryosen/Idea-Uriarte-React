import { useCartContext } from "../../Context/CartContext";
import FotoPaquetes from "../ItemlIstContainer/Paquetes.jpg";
import { useEffect } from "react";
import "./Cart.css";
import Bin from "../../Assets/bin.png";
import { Link } from "react-router-dom";

function Cart() {
  const { cartList, emptyCart, removeItemCart } = useCartContext();

  return (
    <div className="ContenedorBodyCarrito">
      <div className="ContenedorCarrito">
        {cartList.length > 0 ? (
          <>
            {cartList.map((producto) => (
              <>
                <div className="contenedorItemsCarrito">
                  <img
                    src={FotoPaquetes}
                    alt="Foto Producto"
                    className="fotoItem"
                  />
                  <div className="containerItemDetail">
                    <div className="containerItemDetailInfo">
                      <h2 className="tituloProducto">{producto.name}</h2>
                      <p className="descripcionProducto">
                        {producto.description}
                      </p>
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
                  <div
                    className="ContenedorBotonEliminar"
                    onClick={() => removeItemCart(producto.id)}
                  >
                    {/* <button
                      
                      className="botonEliminarProducto"
                    > */}
                    <img src={Bin} alt="Eliminar" className="FotoBin" />
                    {/* </button> */}
                  </div>
                </div>
              </>
            ))}
            <h2>
              {"Total - $" +
                cartList.reduce(
                  (previousValue, currentValue) =>
                    previousValue + currentValue.price * currentValue.cantidad,
                  0
                )}
            </h2>
            <button onClick={emptyCart} className="botonAgregar">
              Vaciar Carrito
            </button>
          </>
        ) : (
          <>
            <h2 className="tituloProducto">No hay items en el Carrito</h2>
            <Link to="/">
              <button className="botonAgregar">Voler al Menu de compras</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
