import React from "react";

import "./Modal.css";

export default function Modal({ closeModal, setClienInfo, makeAPurchase }) {
  let inputs = {};

  //Receiving the Values of the form and saving them in variables
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setClienInfo((values) => ({ ...values, [name]: value }));
  };

  //Using the variables set and creating a purchase order
  const handleSubmit = (event) => {
    event.preventDefault();
    makeAPurchase();
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
                type="tel"
                pattern="[1]{2}[0-9]{8}"
                maxLength="10"
                className="input-field"
                title="Ingresa tu numero comenzando con 11 y sin 15"
                name="tel"
                value={inputs.tel}
                onChange={handleChange}
                required
              />
              <label className="input-label">Telefono</label>
            </div>
            <div className="action">
              <button className="custom-btnFinishPurchase btnFinishPurchase">
                Finalizar Compra
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
