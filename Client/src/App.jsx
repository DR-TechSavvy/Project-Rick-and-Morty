import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import About from './views/About/About.jsx';
import Detail from "./views/Detail/Detail.jsx"
import NotFound from './components/NotFound.jsx';
import Form from './components/Form/Form.jsx';


const URL = "http://localhost:3001/api/character"
export const API_KEY = "henrystaff"; 


function App() {
   const location = useLocation()
   const {pathname} = location
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false)
   const navigate = useNavigate()
   const EMAIL = "example@gmail.com"
   const PASSWORD = "Aaaa$1"


   const addCharacter = (newCharacter) => {
      const idExist = characters.some(personaje => personaje.id === newCharacter.id);
      if (!idExist) {
         setCharacters([...characters, newCharacter]);
      } else {
         alert("Personaje con ID duplicado. No se puede agregar!");
      }
   };

   const onSearch = (id) => {
      axios(`${URL}/${id}`).then(
         ({ data }) => {
            if (id >= 1 && id <= 826) {
               addCharacter(data);
            } else {
               alert('¡No hay personajes con este ID!');
            }
         }
      );
   };

   const handleRandom = () => {
      const randomId = Math.floor(Math.random() * 826) + 1;
      axios(`${URL}/${randomId}`).then(
         ({ data }) => {
            addCharacter(data);
         }
      );
   };

   const onClose = (id) => {
      setCharacters(characters.filter((element) => element.id !== Number(id)));
   };

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
          setAccess(true)
          navigate("/home")
      }else {
         alert ("Credenciales incorrectas")
      }
   };

   //* REDIRECTION TO LOGIN OR HOME
   useEffect(() => {
      !access && navigate("/")
      /* !access && navigate("/home") */

      if (pathname !== "/" && pathname !== "/home" && pathname !== "about") {
            navigate("/notFound");
  }}, [access])  

  //*LOGOUT
  function logout() {
      setAccess(false)
  }

   return (
      <div className='App'>
         {pathname === "/home" || pathname === "/about" || pathname === "/detail/:id" ? (
         <Nav onSearch={onSearch} handleRandom={handleRandom}/>
         ):null}
       
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element= {<Detail/>}/>
            <Route path="*" element= {<NotFound/>}/>
            <Route path='/' element = {<Form login={login}/>}/>
         </Routes>
      </div>
   );
}

export default App;