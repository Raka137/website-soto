import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// 1. IMPORT CSS BOOTSTRAP DI SINI
import "bootstrap/dist/css/bootstrap.min.css";

// 2. IMPORT CSS KUSTOM ANDA (jika ada, seperti App.css)
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
