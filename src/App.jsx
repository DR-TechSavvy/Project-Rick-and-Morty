import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import React, { useEffect, useState } from 'react';
import axios from "axios";

const URL = "https://rym2.up.railway.app/api/character/";
const API_KEY = "henrystaff";

function App() {
   const [characters, setCharacters] = useState([]);
   const [randomCharacter, setRandomCharacter] = useState(null);

   const addCharacter = (newCharacter) => {
      const idExist = characters.some(personaje => personaje.id === newCharacter.id);
      if (!idExist) {
         setCharacters([...characters, newCharacter]);
      } else {
         alert("Personaje con ID duplicado. No se puede agregar!");
      }
   };

   const onSearch = (id) => {
      axios(`${URL}${id}?key=${API_KEY}`).then(
         ({ data }) => {
            if (id >= 1 && id <= 826) {
               addCharacter(data);
            } else {
               alert('¡No hay personajes con este ID!');
            }
         }
      );
   };

   const onClose = (id) => {
      setCharacters(characters.filter((element) => element.id !== Number(id)));
   };

   const obtenerPersonajeAleatorio = () => {
      const randomId = Math.floor(Math.random() * 826) + 1;
      axios(`${URL}${randomId}?key=${API_KEY}`).then(
         ({ data }) => {
            addCharacter(data);
         }
      );
   };
   
   return (
      <div className='App'>
         <Nav onSearch={onSearch} obtenerPersonajeAleatorio = {obtenerPersonajeAleatorio}/>
         {randomCharacter && <Cards characters={[randomCharacter]} onClose={onClose} />}
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}

export default App;
