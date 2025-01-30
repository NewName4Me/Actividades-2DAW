import React from "react";
import { Link } from "react-router-dom";

function Navegación() {
   return (
      <nav>
         <ul>
            <li>
               <Link to="/">Principal</Link>
            </li>
            <li>
               <Link to="/ofertas">Ofertas</Link>
            </li>
         </ul>
      </nav>
   );
}

export default Navegación;

