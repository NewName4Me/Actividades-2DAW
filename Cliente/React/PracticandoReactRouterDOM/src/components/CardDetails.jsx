import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { ProductRepository } from "@repository/ProductosRepository";
function CardDetails() {

   let params = useParams();
   let navigate = useNavigate();

   const [productData, setProductData] = useState({});

   useEffect(() => {
      const getProductData = async () => setProductData(await new ProductRepository().getSingleProducto(params.id));
      getProductData();
   }, []);

   return <div>
      <button onClick={() => navigate(-1)}>Volver</button>
      <p>{JSON.stringify(productData)}</p>
   </div>;
}

export default CardDetails