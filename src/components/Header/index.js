import React from "react";
import './index.css';

export default function Header() {
    return (
        <div className="mainbar">
            <img className="logopokemon" onClick={()=>window.location.href = 'http://localhost:3000/'} src="./pokemon-logo.png" alt="Logo pokémon" />
        </div>
    )
}