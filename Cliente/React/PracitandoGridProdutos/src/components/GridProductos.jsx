import React, { useEffect, useState } from "react";
import CardProducto from "@components/CardProducto";
import { ProductRepository } from "@utils/ProductRepository";

function GridProductos() {
   const [listaProductos, setListaProductos] = useState([]);

   useEffect(() => {
      const fetchProductsData = async () => {
         setListaProductos(await new ProductRepository().getProductList());
      };
      fetchProductsData();
   }, []);

   return (
      <section className="grid-productos">
         {listaProductos.length > 0
            ? listaProductos.map((product) => (
                 <CardProducto key={product.id} producto={product} />
              ))
            : "Loading ..."}
      </section>
   );
}

export default GridProductos;
