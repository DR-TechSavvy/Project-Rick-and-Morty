import React from "react";
import { Link } from "react-router-dom";

export default function NotFound () {
    return (
        <div>
            <h1>Por aca no es {">:D"}</h1>
            <h3>Error 404</h3>
            <Link to= "/home">
            <button>Home</button>
            </Link>
        </div>
    )
}

