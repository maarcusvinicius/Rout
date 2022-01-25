import React, { useEffect, useState } from "react";

import { Link, useMatch } from "react-router-dom"

import data from "../Data";

export default function Aulas(props) {
    const match = useMatch()

    const [url, setUrl] = useState("")

    useEffect(() => {
        const newUrl = match.url.slice(-1) === "/" ? match.url : match.url + "/"
        setUrl(newUrl)
    })



    return (
        <div className="page">
            <h1>Aulas</h1>
            <ul className="aulas">
                {data.map(aula =>
                    <li key={aula.id}><Link to={`${url}${aula.id}`} className="link">{aula.title}</Link></li>
                )}
            </ul>
        </div>
    )
}