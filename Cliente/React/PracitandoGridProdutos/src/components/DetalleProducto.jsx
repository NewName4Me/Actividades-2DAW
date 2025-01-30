import React, { useEffect, useState } from "react";
import CardProducto from "@components/CardProducto";
import { ProductRepository } from "@utils/ProductRepository";

function DetalleProducto() {
   const [productData, setProductData] = useState({});

   const getProductoIdFromURL = () => {
      const currentUrl = window.location.href;
      return currentUrl.split("/")[currentUrl.split("/").length - 1];
   };

   const productoId = getProductoIdFromURL();

   useEffect(() => {
      const getProductData = async () => {
         setProductData(await new ProductRepository().getSingleProducto(productoId));
      };
      getProductData();
   }, []);

   return (
      <div>
         <CardProducto producto={productData} />
      </div>
   );
}

export default DetalleProducto;
