import React from 'react'
// import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
// import { storeClient } from '../store'

export const Result = () => {
  // const state = useSelector(state => state);
  const history = useHistory()

  const listar = () => {
    history.push('./listClients');
    history.block();
  }

  return (
    <div className='flex justify-around	my-10 animate__animated animate__fadeIn animate__faster'>
      <div className='bg-neutral-800 py-8 px-7 text-center md:px-16 md:py-14 rounded-md container md:max-w-2xl shadow-lg mx-10 md:mx-0'>

        <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-emerald-600 mx-auto animate__animated animate__tada" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
        </svg>

        <h1 className='text-3xl text-white font-semibold mt-5'>Formulário finalizado!</h1>
        <p className='mt-2 text-neutral-400 mb-10'>Seu formulário foi concluído com sucesso! Para conferir suas informações clique em Listar Cliente.</p>
{/* 
        <Link to="/">Start over</Link>
        <br />
        <button onClick={listar}>Listar Clientes</button> */}

        <div className='flex justify-between mt-5'> 
            <a href="/" className='border-2 border-emerald-400 rounded-md px-5 flex pt-3 text-emerald-400 pr-7'>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              Home
            </a>
            <button onClick={listar} className='bg-emerald-400 uppercase font-semibold py-4 px-4 rounded-md'>
              Listar Cliente
            </button>
        </div>
      </div>
    </div>
  )
}