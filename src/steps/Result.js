import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
// import { storeClient } from '../store'

export const Result = () => {
  const state = useSelector(state => state);
  const history = useHistory()

  const listar = () => {
    history.push('./listClients');
    history.block();
  }

  return (
    <>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <Link to="/">Start over</Link>
      <br />
      <button onClick={listar}>Listar Clientes</button>
    </>
  )
}