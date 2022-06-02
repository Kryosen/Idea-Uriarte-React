import { useCartContext } from "../../Context/CartContext";
import FotoPaquetes from "../ItemlIstContainer/Paquetes.jpg";
import { useState } from "react";
import "./Cart.css";
import Bin from "../../Assets/bin.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Modal from "../Modal.jsx/Modal";

function Cart() {
  const { cartList, emptyCart, removeItemCart, setComprobanteCompra } =
    useCartContext();

  const [openModal, setOpenModal] = useState(false);

  const [clienInfo, setClienInfo] = useState(false);

  let navigate = useNavigate();

  function realizarOrden() {
    let order = {};

    function goToCompleted() {
      navigate("/PurchaseCompleted");
    }

    order.items = cartList.map((prod) => {
      return { id: prod.id, name: prod.name, price: prod.price };
    });

    order.total = cartList.reduce(
      (previousValue, currentValue) =>
        previousValue + currentValue.price * currentValue.cantidad,
      0
    );

    order.buyer = clienInfo;

    setOpenModal(false);

    const db = getFirestore();
    const queryCollection = collection(db, "orders");
    addDoc(queryCollection, order)
      .then((resp) => setComprobanteCompra(resp.id))
      .then(emptyCart)
      .catch((err) => console.log(err))
      .finally(goToCompleted);
  }

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
            <button
              className="custom-btnFinishPurchase btnFinishPurchase"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Continuar
            </button>
            <button
              onClick={emptyCart}
              className="custom-btnEmptyCart btnEmptyCart"
            >
              Vaciar Carrito
            </button>

            {openModal && (
              <Modal
                closeModal={setOpenModal}
                setClienInfo={setClienInfo}
                realizarOrden={realizarOrden}
              />
            )}
          </>
        ) : (
          <>
            <h2 className="tituloProducto">No hay items en el Carrito</h2>
            <Link to="/">
              <button className="custom-btnEmpty btnEmpty">
                Voler al Menu de compras
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
