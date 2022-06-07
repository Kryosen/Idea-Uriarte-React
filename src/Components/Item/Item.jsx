import { Link } from "react-router-dom";

import "./Item.css";

//Receiving the parameters from product and rendering the cards
function Item({ product }) {
  return (
    <div className="itemsContainers">
      <img src={product.image} alt="Foto Paquetes" />
      <div className="itemsContainersText">
        <p className="namesBox">{product.name}</p>
        <Link to={`/detalle/${product.id}`}>
          <button className="detailButton custom-btn btnDetail">
            <span className="buttonDetail">Detalle</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Item;
