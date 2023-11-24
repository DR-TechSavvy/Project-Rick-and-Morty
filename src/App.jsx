import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Route, Routes } from 'react-router-dom';
import About from './views/About/About.jsx';
import Detail from "./views/Detail/Detail.jsx"

const URL = "https://rym2.up.railway.app/api/character/";
export const API_KEY = "henrystaff";

function App() {
   const [characters, setCharacters] = useState([]);

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
   
   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element= {<Detail/>}/>
         </Routes>
      </div>
   );
}

export default App;