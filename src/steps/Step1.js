import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { setEmail, setName, setPhone, setSurname } from '../rootSlice'
import InputMask from "react-input-mask"

export const Step1 = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  // Inputs do Passo 1
  const name = useSelector(state => state.name);
  const surname = useSelector(state => state.surname);
  const email = useSelector(state => state.email);
  const phone = useSelector(state => state.phone);

  const { register, handleSubmit } = useForm({ defaultValues: { name, surname, email, phone } });

  const onSubmit = data => {
    data.phone = document.getElementById("phone").value;

    if(data.phone.includes("_")){
      document.getElementById("errorPhone").classList.remove("hidden");
    } else {
      document.getElementById("errorPhone").classList.add("hidden");

      dispatch(setName(data.name));
      dispatch(setSurname(data.surname));
      dispatch(setEmail(data.email));
      dispatch(setPhone(data.phone));
    
      history.push("./step2")
    }
  } 

  const goBack = () => {
    history.push("/");
  }

  return (
    <div className='flex justify-around	my-10'>
      <div className='bg-neutral-800 py-8 px-7 md:px-16 md:py-14 rounded-md container md:max-w-2xl shadow-lg mx-10 md:mx-0'>
        <form onSubmit={handleSubmit(onSubmit)} className="grid">
          {/* Nome */}
          <div className='mb-4'>
            <label htmlFor='name' className='text-white text-lg'>Nome</label>
            <br />
            <input className='bg-black h-10 px-3 w-full text-neutral-400 rounded-md focus:text-emerald-400 focus:border-2 focus:border-emerald-400 focus:outline-none placeholder:text-neutral-700' name='name' ref={register} placeholder="Digite seu Nome" required />
          </div>

          {/* Sobrenome */}
          <div className="mb-4">
            <label htmlFor='surname' className='text-white text-lg'>Sobrenome</label>
            <br />
            <input name='surname' ref={register} className='bg-black h-10 px-3 w-full text-neutral-400 rounded-md focus:text-emerald-400 focus:border-2 focus:border-emerald-400   focus:outline-none placeholder:text-neutral-700' placeholder='Digite seu Sobrenome' required />
          </div>

          {/* E-mail */}
          <div className="mb-4">
            <label htmlFor='email' className='text-white text-lg'>E-mail</label>
            <input className='bg-black h-10 px-3 w-full text-neutral-400 rounded-md focus:text-emerald-400 focus:border-2 focus:border-emerald-400   focus:outline-none placeholder:text-neutral-700' type="email" name='email' ref={register} placeholder="Digite seu E-mail" required />
          </div>

          {/* Telefone */}
          <div className="mb-4">
            <label htmlFor='phone' className='text-white text-lg'>Telefone (Celular):</label>
            <br />
            <InputMask id="phone" mask="(99) 99999-9999" minlength="11" name='phone' ref={register} placeholder="Digite seu Telefone" className='bg-black h-10 px-3 w-full text-neutral-400 rounded-md focus:text-emerald-400 focus:border-2 focus:border-emerald-400   focus:outline-none placeholder:text-neutral-700' required />
            <p id="errorPhone" className='hidden text-red-500 text-md'>O telefone deve conter 11 números</p>
          </div>
          
          <div className='flex justify-between mt-5'> 
            <button className='border-2 border-emerald-400 rounded-md px-5' onClick={goBack}>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <button type='submit' id="submitButton" className='bg-emerald-400 uppercase font-semibold py-4 px-4 rounded-md'>Continuar</button>
          </div>
        </form>
      </div>
    </div>
  )
}