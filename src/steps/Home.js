import React from "react";
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        // <div className="flex justify-center items-center my-auto content-center">[
        <div className="flex justify-around	my-10">
            <div className="bg-neutral-800 px-20 py-14 rounded-md text-center container-lg">
                <h1 className="text-white font-semibold text-3xl">Bem-vindo ao Wizard</h1>
                <button className="bg-emerald-400 uppercase font-semibold py-4 px-4 rounded-md mt-5">
                    <Link to="/step1">Ir para o formulário</Link>
                </button>
            </div>
        </div>
    )
}