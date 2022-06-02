import React from "react";
import "./FooterPagina.css";

export default function Footer() {
  return (
    <footer>
      <div className="contenedortFooter">
        <div className="cajasFooter1">
          <div className="contenedorTYC">
            <h4 className="TYC">Terminos y Condiciones</h4>
            <h4 className="TYC">Politicas de Privacidad</h4>
          </div>
          <h4 className="direccion">
            <a href="https://goo.gl/maps/nZbr7XyX9Pb7c59j9">
              Juan de Garay 2760, Olivos, Buenos Aires
            </a>
          </h4>
          <h4 className="copyright">© 2022 Mensajeria la Reja</h4>
        </div>
        <div className="cajasFooter2">
          <ul className="listaFotos">
            <li className="iconsItems">Whatsapp</li>
            <li className="iconsItems">Facebook</li>
            <li className="iconsItems">Telefono</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
