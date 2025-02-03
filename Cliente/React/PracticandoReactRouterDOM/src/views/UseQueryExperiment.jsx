import React, { useEffect, useState } from "react";
import { ProductRepository } from "@repository/ProductosRepository";
import CardProducto from "@components/CardProducto";
import { useQuery } from "react-query";

function UseQueryExperiment() {
   const [listaProductos, setListaProductos] = useState([]);

   const { data, isLoading, isError, status } = useQuery('pdata', async () => await new ProductRepository().getProductList());

   useEffect(() => {
      const fetchProductsData = async () => setListaProductos(await new ProductRepository().getProductList());
      fetchProductsData();
   }, []);

   if (isError) {
      return (
         <dir>
            Error en la peticion
         </dir>
      )
   }
   if (isLoading) {
      return (
         <dir>
            Loading ...
         </dir>
      )
   }

   if (data) {
      return (
         <div>
            <p>{status}</p>
            <p>{JSON.stringify(data)}</p>
         </div>
      )
   }


   /*  return (
       <section className="grid-productos">
          {listaProductos.length > 0
             ? listaProductos.map((product) => (
                <div key={product.id}>
                   <CardProducto producto={product} />
                </div>
             ))
             : "Loading ..."}
       </section>
    ); */
}

export default UseQueryExperiment;
