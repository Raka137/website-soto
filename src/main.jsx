import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom"; // <-- 1. IMPORT HashRouter

// IMPORT CSS BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";

// IMPORT CSS KUSTOM ANDA
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* 2. BUNGKUS KOMPONEN APP DENGAN HASHROUTER */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);