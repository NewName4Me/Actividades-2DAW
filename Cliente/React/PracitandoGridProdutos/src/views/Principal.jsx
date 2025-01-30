import React from "react";
import Buscador from "@components/Buscador";
import GridProductos from "@components/GridProductos";
import "../styles/principal.css";

function Principal() {
   return (
      <div className="principal">
         <Buscador />
         <GridProductos />
      </div>
   );
}

export default Principal;
