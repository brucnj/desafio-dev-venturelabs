import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { seDtNascimento, setCpf, setRenda } from "../rootSlice";
import InputMask from "react-input-mask"

export const Step3 = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  // Inputs do Passo 3
  const dtNascimento = useSelector(state => state.dtNascimento);
  const cpf = useSelector(state => state.cpf);
  const renda = useSelector(state => state.renda);

  const { register, handleSubmit } = useForm({defaultValues: { cpf, dtNascimento, renda }});

  const onSubmit = (data) => {
    data.dtNascimento = document.getElementById("dtNascimento").value;
    data.cpf = document.getElementById("cpf").value;

    dispatch(seDtNascimento(data.dtNascimento));
    dispatch(setCpf(data.cpf));
    dispatch(setRenda(data.renda));
    
    history.push("./result");
  };

  const goBack = () => {
    history.push("./step2");
  }


  return (
    <div className='flex justify-around	my-10'>
      <div className='bg-neutral-800 py-8 px-7 md:px-16 md:py-14 rounded-md container md:max-w-2xl shadow-lg mx-10 md:mx-0'>
        <form onSubmit={handleSubmit(onSubmit)} className="grid">
          {/* Data de Nascimento */}
          <div className='mb-4'>
            <label htmlFor='dtNascimento' className='text-white text-lg'>Data de Nascimento</label>
            <InputMask mask="99/99/9999" type="text" id="dtNascimento" name="dtNascimento" ref={register} placeholder="Digite sua Data de Nascimento" className='bg-black h-10 px-3 w-full text-neutral-400 rounded-md focus:text-emerald-400 focus:border-2 focus:border-emerald-400 focus:outline-none placeholder:text-neutral-700'/>
          </div>

          {/* CPF */}
          <div className='mb-4'>
            <label htmlFor='cpf' className='text-white text-lg'>CPF</label>
            <InputMask mask="999.999.999-99" type="text" id="cpf" name="cpf" ref={register} placeholder="Digite seu CPF" className='bg-black h-10 px-3 w-full text-neutral-400 rounded-md focus:text-emerald-400 focus:border-2 focus:border-emerald-400 focus:outline-none placeholder:text-neutral-700'/>
          </div>

          {/* Renda Mensal */}
          <div className='mb-4'>
            <label htmlFor='renda' className='text-white text-lg'>Renda Mensal</label>
            <input type="text" name="renda" ref={register} placeholder="Digite sua Renda Mensal" className='bg-black h-10 px-3 w-full text-neutral-400 rounded-md focus:text-emerald-400 focus:border-2 focus:border-emerald-400 focus:outline-none placeholder:text-neutral-700'/>
          </div>

          <div className='flex justify-between mt-5'> 
            <button className='border-2 border-emerald-400 rounded-md px-5' onClick={goBack}>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <button type='submit' className='bg-emerald-400 uppercase font-semibold py-4 px-4 rounded-md'>Continuar</button>
          </div>

        </form>
      </div>
    </div>
  );
};