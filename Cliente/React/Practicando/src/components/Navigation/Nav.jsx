import React from "react";
import { Link } from "react-router-dom";

function Nav() {
   return (
      <nav>
         <ul>
            <li><Link to="/">Volver</Link></li>
            <li><Link to="/mostrarproductos1a1">Mostrar productos</Link></li>
         </ul>
      </nav>
   );
}

export default Nav;
