import React from "react";
import { useEffect, useState } from "react";
import "./App.css";

function MostrarProductos1a1() {
   /* ESTADOS */
   const [item, setItem] = useState(null);
   const [position, setPosition] = useState(0);

   /* VARIABLES */
   const API_URI = "https://fakestoreapi.com/products";

   /* EFECTO */
   useEffect(() => {
      const fetchItems = async () => {
         const response = await fetch(API_URI);
         const data = await response.json();
         setItem(data[position]);
      };
      fetchItems();
   }, [position]);

   return (
      <div>
         {/*  <div>{item ? JSON.stringify(item) : "Loading..."}</div> */}

         <div>
            {item && (
               <>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <img src={item.image} alt="" />
                  <p>Precio: {item.price} $</p>
                  <span>Nota: {item.rating.rate}</span>
                  <saan> Cantidad: {item.rating.count}</saan>
               </>
            )}
         </div>

         <button onClick={() => setPosition((prev) => Math.max(prev - 1, 0))}>
            Prev
         </button>
         <button onClick={() => setPosition((prev) => prev + 1)}>Next</button>
      </div>
   );
}

export default MostrarProductos1a1;
