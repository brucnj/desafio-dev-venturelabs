import React from "react"
import { useSelector } from 'react-redux'

export const ListClients = () => {
    const state = useSelector(state => state);
    // const jsonData = JSON.stringify(state, null, 2);
    // const name = state.name;

    return (
        <div className='flex justify-around	my-10'>
            <div className='bg-neutral-800 py-8 px-7 md:px-16 md:py-14 rounded-md container md:max-w-2xl shadow-lg mx-10 md:mx-0'>
                <h1 className="text-white text-2xl font-semibold">Lista de Cliente</h1>
                
                <div className="rounded-md">
                    <table className="table-auto mb-10 border border-emerald-600 w-full rounded-md my-2" >
                        <tbody>
                            {/* Nome e Sobrenome */}
                            <tr>
                                <td className="bg-emerald-600 p-3 text-lg font-semibold border-b border-emerald-600">Nome completo</td>
                                <td className="text-neutral-300 font-light text-md p-3 border-b border-emerald-600">{state.name + " " + state.surname}</td>
                            </tr>
                            {/* Email */}
                            <tr>
                                <td className="bg-emerald-600 p-3 text-lg font-semibold border-b border-emerald-600">E-mail</td>
                                <td className="text-neutral-300 font-light text-md p-3 border-b border-emerald-600">{state.email}</td>
                            </tr>
                            {/* Telefone */}
                            <tr>
                                <td className="bg-emerald-600 p-3 text-lg font-semibold border-b border-emerald-600">Telefone</td>
                                <td className="text-neutral-300 font-light text-md p-3 border-b border-emerald-600">{state.phone}</td>
                            </tr>
                            {/* CEP */}
                            <tr>
                                <td className="bg-emerald-600 p-3 text-lg font-semibold border-b border-emerald-600">CEP</td>
                                <td className="text-neutral-300 font-light text-md p-3 border-b border-emerald-600">{state.cep}</td>
                            </tr>
                            {/* Endereço 1 */}
                            <tr>
                                <td className="bg-emerald-600 p-3 text-lg font-semibold border-b border-emerald-600">Endereço Principal</td>
                                <td className="text-neutral-300 font-light text-md p-3 border-b border-emerald-600">{state.address1}</td>
                            </tr>
                            {/* Endereço 2 */}
                            {state.address2 !== "" &&
                                <tr>
                                    <td className="bg-emerald-600 p-3 text-lg font-semibold border-b border-emerald-600">Endereço</td>
                                    <td className="text-neutral-300 font-light text-md p-3 border-b border-emerald-600">{state.address2}</td>
                                </tr>
                            }
                            {/* Dt de Nascimento */}
                            <tr>
                                <td className="bg-emerald-600 p-3 text-lg font-semibold border-b border-emerald-600">Dt. de Nascimento</td>
                                <td className="text-neutral-300 font-light text-md p-3 border-b border-emerald-600">{state.dtNascimento}</td>
                            </tr>
                            {/* CPF */}
                            <tr>
                                <td className="bg-emerald-600 p-3 text-lg font-semibold border-b border-emerald-600">CPF</td>
                                <td className="text-neutral-300 font-light text-md p-3 border-b border-emerald-600">{state.cpf}</td>
                            </tr>
                            {/* Renda Mensal */}
                            <tr>
                                <td className="bg-emerald-600 p-3 text-lg font-semibold border-b border-emerald-600">Renda Mensal</td>
                                <td className="text-neutral-300 font-light text-md p-3 border-b border-emerald-600">{state.renda}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <a href="/" className="border-2 border-emerald-400 mt-4 text-emerald-400 rounded-md py-2 px-10">
                    Voltar à Home
                </a>
            </div>
        </div>
    )
}