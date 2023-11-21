import React, { useState } from "react";

export default function SearchBar(props) {

   const [id, setId] = useState("");

   const handleChange = (event) => {
      const {value} = event.target
      setId(value)
   }

   return (
      <div>
         <input type='search' onChange={handleChange}/>
         <button onClick= { () => props.onSearch (id) } >Agregar</button>
         <button onClick={() => props.obtenerPersonajeAleatorio()}>Random</button>
      </div>
   );
}