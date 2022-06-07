import React from "react";

import facebookIcon from "../../Assets/facebookIcon.png";
import whatsappIcon from "../../Assets/whatsappIcon.png";
import telephoneIcon from "../../Assets/telephoneIcon.png";
import locationIcon from "../../Assets/locationIcon.png";

import "./FooterPagina.css";

//Simple footer with option to use the Icons on the button for future Links to company social media
export default function Footer() {
  return (
    <footer>
      <div className="footerContainer">
        <div className="footerBoxes1">
          <div className="TYCContainer">
            <h4 className="TYC">Terminos y Condiciones</h4>
            <h4 className="TYC">Politicas de Privacidad</h4>
          </div>
          <h4 className="adress">
            <div className="iconLocation">
              <img src={locationIcon} alt="Location" />
            </div>
            <a href="https://goo.gl/maps/nZbr7XyX9Pb7c59j9">
              Juan de Garay 2760, Olivos, Buenos Aires
            </a>
          </h4>
          <h4 className="copyright">© 2022 Mensajeria la Reja</h4>
        </div>
        <div className="footerBoxes2">
          <ul className="picturesList">
            <li className="iconsItems">
              <img src={whatsappIcon} className="iconsFooter" alt="whatsapp" />
            </li>
            <li className="iconsItems">
              <img src={facebookIcon} className="iconsFooter" alt="Facebook" />
            </li>
            <li className="iconsItems">
              <img src={telephoneIcon} className="iconsFooter" alt="Phone" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
