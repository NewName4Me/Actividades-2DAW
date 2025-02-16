import React from "react";
import { Link } from 'react-router-dom'

function CardProducto({ producto, listaProductos, setListaProductos }) {


   const addToCarrito = () => {
      const newListaProductos = listaProductos.map(item => {
         if (item.id === producto.id) {
            return { ...item, cantidad: item.cantidad + 1 }
         }
         return item
      })
      setListaProductos(newListaProductos)
   }

   const eliminarFromCarrito = () => {
      const newListaProductos = listaProductos.map(item => {
         if (item.id === producto.id) {

            //si es menor o 0 a cero lo devolvemos null para luego filtrar y quedarnos sin nulos
            if (item.cantidad <= 1) {
               return null
            }

            return { ...item, cantidad: item.cantidad - 1 }
         }
         return item;
      }).filter(item => item !== null);

      setListaProductos(newListaProductos);
   }


   return (
      <>
         <Link to={`/details/${producto.id}`}>
            <article>
               <h1>{producto.title}</h1>
               <h2>{producto.description}</h2>
               <h2>{producto.category}</h2>
               <h2>Cantidad {producto.cantidad}</h2>
               <img src={producto.image} alt={producto.title} />
            </article>
         </Link>
         <button onClick={eliminarFromCarrito}>Eliminar -</button>
         <button onClick={addToCarrito}>Agregar +</button>
      </>
   );
}

export default CardProducto;

