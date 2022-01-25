import React from "react";

import {Link} from "react-router-dom"

export default function Nav(props){
    return (
        <nav className="nav">
            <h1>MarguBr</h1>
            <ul className="nav-links">
                <li><Link to="/aulas">Aulas</Link></li>
                <li><Link to="sobre">Sobre</Link></li>
            </ul>
        </nav>
    )
}