import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { ProductRepository } from "@repository/ProductosRepository";
import CardProducto from "@components/CardProducto";
import { useDebounce } from "@utils/useDebounce";

function ArticulosSearch() {

   /* ESTADOS */
   const [listaProductos, setListaProductos] = useState([]);
   const [title, setTitle] = useState("");

   const tituloDebounced = useDebounce(title, 2000);

   const navigate = useNavigate();
   const { search } = useLocation();

   /* HANDLE CHANGES */
   const handleTitleChange = (e) => {
      setTitle(e.target.value);
   };

   const handleCategoryChange = (category) => {
      navigate(`/articulos?categoria=${category}`);
   };

   /* EFFECT */
   useEffect(() => {
      const fetchProductsData = async () => {
         //tomar los datos de nuestra url
         const query = new URLSearchParams(search);
         const searchParam = query.get('search') || "";
         const categoryParam = query.get('categoria') || "";
         let products;

         //filrtar nuestras categorias
         if (categoryParam) {
            products = await new ProductRepository().getProductsFilteredByCategory(categoryParam);
         } else {
            products = await new ProductRepository().getProductsFilteredByTitle(searchParam);
         }

         setListaProductos(products);
      };

      fetchProductsData();
   }, [search]);

   /* BUSQUEDA CON DELAY */
   useEffect(() => {
      navigate(`/articulos?search=${tituloDebounced}`);

   }, [tituloDebounced]);

   return (
      <section className="grid-productos">
         <form>
            <input
               type="search"
               value={title}
               placeholder="buscar"
               onChange={handleTitleChange}
            />
         </form>

         <ul>
            <li onClick={() => handleCategoryChange("men's clothing")}>men's clothing</li>
            <li onClick={() => handleCategoryChange("women's clothing")}>women's clothing</li>
            <li onClick={() => handleCategoryChange("electronics")}>electronics</li>
         </ul>

         {listaProductos.length > 0 ? (
            listaProductos.map((product) => (
               <div key={product.id}>
                  <CardProducto producto={product} />
               </div>
            ))
         ) : (
            <p>No products found</p>
         )}
      </section>
   );
}

export default ArticulosSearch;

