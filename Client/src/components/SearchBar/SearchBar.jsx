import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchBar(props) {

   const [id, setId] = useState("");

   const handleChange = (event) => {
      const {value} = event.target
      setId(value)
   }
   
   // const obtenerPersonajeAleatorio = () => {
   //    const randomId = Math.floor(Math.random() * 826) + 1;
   //    axios(`${URL}${randomId}?key=${API_KEY}`).then(
   //       ({ data }) => {
   //          addCharacter(data);
   //       }
   //    );
   // };

   const characterRandom = () => {
      const randomId = Math.floor(Math.random() * 826) + 1;
      props.onSearch(randomId)
   }

   return (
      <div>
         <Link to="/about">
         <button>About</button>
         </Link>
         <Link to="/home">
         <button>Home</button>
         </Link>
         <input type='search' onChange={handleChange}/>
         <button onClick= { () => props.onSearch (id) } >Agregar</button>
         <button onClick={() => characterRandom()}>Random</button>

      </div>
   );
}