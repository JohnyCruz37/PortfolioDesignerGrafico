import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import "./index.css";

import Inicio from "./paginas/inicio";
import Portfolio from "./paginas/portfolio";
import Teste from "./paginas/teste";
import Pesquisa from "./paginas/Pesquisa";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Inicio />} />
          <Route path="/" element={<Inicio />} />
          <Route path="usuario/:usuarioId" element={<Portfolio />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="pesquisa" element={<Pesquisa />} />
          <Route path="teste" element={<Teste />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
