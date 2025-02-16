import React, { useEffect, useState } from "react";
import { ProductRepository } from "@repository/ProductosRepository";
import CardProducto from "@components/CardProducto";
import { LiaSpinnerSolid } from "react-icons/lia";

function GridItems() {
   const [listaProductos, setListaProductos] = useState([]);
   const [category, setCategory] = useState("");
   const [loading, setLoading] = useState(true);

   const handleCategoryChange = async (e) => {
      e.preventDefault();
      setLoading(true);
      const filteredProducts = await new ProductRepository().getProductsFilteredByTitle(category);
      setListaProductos(filteredProducts);
      setLoading(false);
   };

   useEffect(() => {
      const fetchProductsData = async () => {
         const products = await new ProductRepository().getProductList();
         setListaProductos(products);
         setLoading(false);
      };
      fetchProductsData();
   }, []);

   return (
      <section className="grid-productos">
         <form onSubmit={handleCategoryChange}>
            <input
               type="search"
               value={category}
               placeholder="buscar"
               onChange={(e) => setCategory(e.target.value)}
            />
            <input type="submit" value="Enviar" />
         </form>

         {loading ? (
            <LiaSpinnerSolid className="spinner" />
         ) : (
            listaProductos.length > 0 ? (
               listaProductos.map((product) => (
                  <div key={product.id}>
                     <CardProducto producto={product} listaProductos={listaProductos} setListaProductos={setListaProductos} />
                  </div>
               ))
            ) : (
               <p>No products found</p>
            )
         )}
      </section>
   );
}

export default GridItems;