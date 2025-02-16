import { useState } from "react";

function FormularioControlado() {

   const [datosUsuario, setDatosUsuario] = useState({
      nombre: '',
      password: '',
      email: ''
   });

   const handleFormSubmit = (e) => {
      e.preventDefault();
      console.log(datosUsuario);
   }

   const handleChange = (e) => {
      setDatosUsuario({ ...datosUsuario, [e.target.name]: e.target.value });
   }

   return (
      <div>
         <form onSubmit={handleFormSubmit}> 
            <input
               type="text"
               name="nombre"
               id="nombre"
               placeholder="name"
               value={datosUsuario.nombre}
               onChange={handleChange}
            />

            <input
               type="password"
               name="password"
               id="password"
               placeholder="password"
               value={datosUsuario.password}
               onChange={handleChange}
            />
            
            <input
               type="email"
               name="email"
               id="email"
               placeholder="email"
               value={datosUsuario.email}
               onChange={handleChange}
            />

            <input type="submit" value="Enviar" />
         </form>

         <div><p>{JSON.stringify(datosUsuario)}</p></div>
      </div>
   );
}

export default FormularioControlado;

