import React from "react"
import SearchBar from "./SearchBar";

const Nav = (props) => {
    return (
        <div>
        <SearchBar onSearch = {props.onSearch} obtenerPersonajeAleatorio = {props.obtenerPersonajeAleatorio}/>
        </div>
)};

export default Nav