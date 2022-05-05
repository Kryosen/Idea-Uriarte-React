import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/NavBar/ItemLIstContainer/ItemListContainer";

function App() {
  const [count, setCount] = useState(0);
  const greeting = "Bienvenido a la pagina, Estoy en un Contenedor";

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={greeting} />
    </div>
  );
}

export default App;
