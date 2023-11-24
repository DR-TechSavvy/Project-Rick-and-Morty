import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState , useEffect} from 'react'
import { API_KEY } from '../../App'

export default function Detail() {
    const [character, setCharacter] = useState()
    const {id} = useParams()

    useEffect(() => {
        axios(`https://rym2.up.railway.app/api/character/${id}?key=${API_KEY}`).then(
           ({ data }) => {
              if (data.name) {
                 setCharacter(data);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           }
        ).catch((error)=>{console.log(error)});
        return setCharacter({});
     }, [id]);

  return (
    <div>
        Detail
    </div>
  )
}