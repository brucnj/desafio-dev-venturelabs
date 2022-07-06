import React from "react"
import { useSelector } from 'react-redux'
// import { useHistory } from "react-router-dom"

export const ListClients = () => {
    const state = useSelector(state => state);

    const storage = [];
    storage.push(JSON.stringify(state, null, 2));

    return (
        <>
            <div>
                <h1>Lista de Cliente yayy</h1>
                <p>{storage}</p>
                <a href="/">Voltar do Inicio</a>
            </div>
        </>
    )
}