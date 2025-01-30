import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MostrarProductos1a1 from "@views/MostrarProductos1a1/MostrarProductos1a1";
import Nav from "@components/Navigation/Nav";

function App() {
   return (
      <BrowserRouter>
         <Nav />

         <Routes>
            <Route path="/mostrarproductos1a1" element={<MostrarProductos1a1 />} />
            <Route path="/" element={<h1>Bienvenido a la página principal selecciona que práctica quieres ver</h1>} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
