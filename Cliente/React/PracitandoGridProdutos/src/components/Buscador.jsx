import React from "react";

function Buscador() {
   return (
      <form>
         <input type="search" name="buscador" id="buscador" placeholder="..." />
         <input type="submit" value="Buscar" />
      </form>
   );
}

export default Buscador;
