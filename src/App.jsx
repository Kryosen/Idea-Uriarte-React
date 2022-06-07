import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/ItemlIstContainer/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";
import CartContainer from "./Components/CartContainer/CartContainer";
import CartContextProvider from "./Context/CartContext";
import PurchaseCompleted from "./Components/PurchaseCompleted/PurchaseCompleted";
import FooterPage from "./Components/Footer/FooterPagina";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/categoria/:categoryId"
              element={<ItemListContainer />}
            />
            <Route
              path="/detalle/:detailId"
              element={<ItemDetailContainer />}
            />
            <Route path="/Cart" element={<CartContainer />} />
            <Route path="/PurchaseCompleted" element={<PurchaseCompleted />} />
            <Route path="/*" element={<Navigate to="/" replace />} />
          </Routes>
          <FooterPage />
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
