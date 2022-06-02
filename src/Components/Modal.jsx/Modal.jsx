import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Modal.css";

export default function Modal({ closeModal, setClienInfo, realizarOrden }) {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setClienInfo((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    realizarOrden();
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modalCloseButton">
          <button
            className="custom-btnCancelPuchase btnCancelPuchase closeButton"
            onClick={() => {
              closeModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="modalTitle">
          <h2>Para finalizar la compra completa la siguiente informacion</h2>
        </div>
        <div className="modalBody">
          <form className="formBox" onSubmit={handleSubmit}>
            <div className="input">
              <input
                type="text"
                className="input-field"
                name="nombre"
                value={inputs.nombre}
                onChange={handleChange}
                required
              />
              <label className="input-label">Nombre Completo</label>
            </div>
            <div className="input">
              <input
                type="email"
                className="input-field"
                name="email"
                value={inputs.email}
                onChange={handleChange}
                required
              />
              <label className="input-label">Email</label>
            </div>
            <div className="input">
              <input
                type="number"
                className="input-field"
                name="tel"
                value={inputs.tel}
                onChange={handleChange}
                required
              />
              <label className="input-label">Telefono</label>
            </div>
            <div className="action">
              <button className="custom-btnFinishPurchase btnFinishPurchase">
                {/* <NavLink to="/PurchaseCompleted" className="navBarLink"> */}
                Finalizar Compra
                {/* </NavLink> */}
              </button>
            </div>
            {/* <label class="form-group">
              <input
                className="inputBoxes"
                type="text"
                name="username"
                value={inputs.username || ""}
                onChange={handleChange}
              />
              <span className="spansForm">Nombre</span>
              <span className="borderSpan"></span>
            </label>
            <label>
              Enter your age:
              <input
                className="inputBoxes"
                type="number"
                name="age"
                value={inputs.age || ""}
                onChange={handleChange}
              />
            </label> */}
          </form>
        </div>
        {/* <div className="modalFooter">
          <button className="custom-btnFinishPurchase btnFinishPurchase">
            Finalizar Compra
          </button>
          <button
            className="custom-btnCancelPuchase btnCancelPuchase"
            onClick={() => {
              closeModal(false);
            }}
          >
            Cancelar
          </button>
        </div> */}
      </div>
    </div>
  );
}
