export class ProductRepository {
   #PRODCUTS_URI = "https://fakestoreapi.com/products";

   constructor() {
      this.api_uri = this.#PRODCUTS_URI;
   }

   getProductList = async () => {
      const data = await fetch(this.api_uri);
      return data.json();
   };

   getSingleProducto = async (id) => {
      const data = await fetch(`${this.api_uri}/${id}`);
      return data.json();
   };

   getProductsFilteredByTitle = async (title) => {
      const productList = await this.getProductList();
      return productList.filter(item => item.title.toLowerCase().includes(title.toLowerCase()));
   };

}

