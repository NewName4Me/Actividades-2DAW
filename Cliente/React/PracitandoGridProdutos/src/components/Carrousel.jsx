import React from "react";
import { useEffect, useState } from "react";
import { ProductRepository } from "@utils/ProductRepository";

function Carrousel() {
   /* ESTADOS */
   const [item, setItem] = useState(null);
   const [position, setPosition] = useState(1);

   /* EFECTO */
   useEffect(() => {
      const fetchItems = async () => {
         setItem(await new ProductRepository().getSingleProducto(position));
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
                  <span> Cantidad: {item.rating.count}</span>
               </>
            )}
         </div>

         <button onClick={() => setPosition((prev) => Math.max(prev - 1, 1))}>
            Prev
         </button>
         <button onClick={() => setPosition((prev) => prev + 1)}>Next</button>
      </div>
   );
}

export default Carrousel;
