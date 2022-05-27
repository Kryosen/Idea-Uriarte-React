import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import getFirestore from "./firebase/config";
import "./index.css";

getFirestore();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
