import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Principal from "@views/Principal";
import Ofertas from "@views/Ofertas";
import Detalles from "@views/Detalles";
import Navegación from "@components/Navegacion";

function App() {
   return (
      <BrowserRouter>
         <Navegación />

         <Routes>
            <Route path="/" element={<Principal />} />
            <Route path="/detalles/:id" element={<Detalles />} />
            <Route path="/ofertas" element={<Ofertas />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
