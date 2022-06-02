import React from "react";
import Modal from "../Modal.jsx/Modal";
import FotoPaquetes from "../ItemlIstContainer/Paquetes.jpg";
import Bin from "../../Assets/bin.png";
import { Link } from "react-router-dom";

function Cart({
  setClienInfo,
  setOpenModal,
  openModal,
  cartList,
  emptyCart,
  removeItemCart,
  realizarOrden,
}) {
  return (
    <div>
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
                    <img src={Bin} alt="Eliminar" className="FotoBin" />
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
