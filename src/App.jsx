import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import ItemCount from "./Components/navbar/ItemCount/ItemCount";
import ItemListContainer from "./Components/navbar/ItemlIstContainer/ItemListContainer";

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
