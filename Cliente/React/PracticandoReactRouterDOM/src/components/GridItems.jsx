import React, { useEffect, useState } from "react";
import { ProductRepository } from "@repository/ProductosRepository";
import CardProducto from "@components/CardProducto";
import { LiaSpinnerSolid } from "react-icons/lia";


function GridItems() {
   const [listaProductos, setListaProductos] = useState([]);


   useEffect(() => {
      const fetchProductsData = async () => setListaProductos(await new ProductRepository().getProductList());
      fetchProductsData();
   }, []);

   return (
      <section className="grid-productos">
         {listaProductos.length > 0
            ? listaProductos.map((product) => (
               <div key={product.id}>
                  <CardProducto producto={product} />
               </div>
            ))
            : <LiaSpinnerSolid className="spinner"/>
         }
      </section>
   );
}

export default GridItems;
