import React from "react"
import SearchBar from "../SearchBar/SearchBar";

const Nav = (props) => {
    return (
        <div>
        <SearchBar onSearch = {props.onSearch} handleRandom= {props.handleRandom}/>
        </div>
)};

export default Nav