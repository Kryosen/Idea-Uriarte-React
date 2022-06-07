import React from "react";
import { Link } from "react-router-dom";

import Modal from "../Modal/Modal.jsx";
import Bin from "../../Assets/bin.png";

import "./Cart.css";

//Rendering the cart depending on the amount of items inside
function Cart({
  setClienInfo,
  setOpenModal,
  openModal,
  cartList,
  emptyCart,
  removeItemCart,
  makeAPurchase,
}) {
  return (
    <div>
      <div className="cartContainer">
        {cartList.length > 0 ? (
          <>
            {cartList.map((product) => (
              <>
                <div className="cartItemsContainer">
                  <img
                    src={product.image}
                    alt="Foto Producto"
                    className="itemPicture"
                  />
                  <div className="containerItemDetail">
                    <div className="containerItemDetailInfo">
                      <h2 className="productName">{product.name}</h2>
                      <p className="productDescriptionCart">
                        {product.description}
                      </p>
                      <p className="productDescriptionPrice">
                        {product.originalPrice}
                      </p>
                      <p className="productDescriptionPrice">
                        {product.discountedPrice}
                      </p>
                    </div>
                    <div className="containerPriceDetail">
                      <h3 className="prices">
                        {"X " + product.quantity} -
                        {" $" + product.price * product.quantity}
                      </h3>
                    </div>
                  </div>
                  <div
                    className="deleteButtonContainer"
                    onClick={() => removeItemCart(product.id)}
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
                    previousValue + currentValue.price * currentValue.quantity,
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
                makeAPurchase={makeAPurchase}
              />
            )}
          </>
        ) : (
          <>
            <h2 className="productName">No hay items en el Carrito</h2>
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
