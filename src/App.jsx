import { useState, useEffect } from "react";
import "./App.css";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/ItemlIstContainer/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CartContainer from "./Components/CartContainer/CartContainer";
import CartContextProvider from "./Context/CartContext";
import PurchaseCompleted from "./Components/PurchaseCompleted/PurchaseCompleted";
import FooterPagina from "./Components/Footer/FooterPagina";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/categoria/:categoriaId"
              element={<ItemListContainer />}
            />
            <Route
              path="/detalle/:detalleId"
              element={<ItemDetailContainer />}
            />
            <Route path="/Cart" element={<CartContainer />} />
            <Route path="/PurchaseCompleted" element={<PurchaseCompleted />} />
            <Route path="/*" element={<Navigate to="/" replace />} />
          </Routes>
          <FooterPagina />
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
