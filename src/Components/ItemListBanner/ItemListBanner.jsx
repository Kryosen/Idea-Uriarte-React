import React from "react";

import "./ItemListBanner.css";

export default function ItemListBanner({ categoryId, products }) {
  return (
    <div className="bannerItems">
      <h2 className="bannerCategory">
        {categoryId
          ? `Categoria -> ${
              categoryId === "CajasYSobres" ? "Cajas y Sobres" : categoryId
            }`
          : `Home`}
      </h2>
      <h2 className="bannerAmount">{`Productos encontrados: ${products.length}`}</h2>
    </div>
  );
}
