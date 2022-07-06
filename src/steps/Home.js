import React from "react";
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div className="bg-neutral-400">
            <h1 className="text-red-400">Yaay Home</h1>
            <Link to="/step1">Ir para o formulário</Link>
        </div>
    )
}