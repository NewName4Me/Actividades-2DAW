import React from "react";
import {Link} from 'react-router-dom'

function CardProducto({ producto }) {

   return (
      <Link to={`/detalles/${producto.id}`}>
         <article>
            <h1>{producto.title}</h1>
            <h2>{producto.description}</h2>
            <img src={producto.image} alt={producto.title} />
         </article>
      </Link>
   );
}

export default CardProducto;

