import { useState } from "react";
import "./App.css";
import ItemListContainer from "./Components/ItemlIstContainer/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  const [count, setCount] = useState(0);
  const greeting = "Bienvenido a la pagina, Estoy en un Contenedor";

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
