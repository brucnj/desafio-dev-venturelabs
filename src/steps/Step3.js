import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { seDtNascimento, setCpf, setRenda } from "../rootSlice";
import InputMask from "react-input-mask"

export const Step3 = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  // Evita que ao precionar o Enter a página volte a anterior
  useEffect(() => {
    window.addEventListener("keypress", function(e) {
      if(e.key === "Enter"){
        e.preventDefault();
      }
    })
  });

  // Inputs do Passo 3
  const dtNascimento = useSelector(state => state.dtNascimento);
  const cpf = useSelector(state => state.cpf);
  const renda = useSelector(state => state.renda);

  const { register, handleSubmit } = useForm({defaultValues: { cpf, dtNascimento, renda }});

  const onSubmit = (data) => {
    data.dtNascimento = document.getElementById("dtNascimento").value;
    data.cpf = document.getElementById("cpf").value;

    if(data.dtNascimento.includes("_") || data.cpf.includes("_")){
      document.getElementById("errorDtNascimento").classList.remove("hidden");
      document.getElementById("errorCpf").classList.remove("hidden");
    } else {
      document.getElementById("errorDtNascimento").classList.add("hidden");
      document.getElementById("errorCpf").classList.add("hidden");

      dispatch(seDtNascimento(data.dtNascimento));
      dispatch(setCpf(data.cpf));
      dispatch(setRenda(data.renda));
      
      history.push("./result");
    }
  };

  const goBack = () => {
    history.push("./step2");
  }


  return (
    <div className='flex justify-around	my-10 animate__animated animate__fadeIn animate__faster'>
      {/* Progress bar */}
      <div className='hidden md:block md:max-w-2xl w-full rounded-t-md absolute'>
        <div className='hidden md:block md:max-w-2xl w-3/4 bg-emerald-600 z-20 h-2 absolute rounded-tl-md '></div>
        <div className='hidden md:block bg-emerald-600 opacity-40 z-10 h-2 rounded-t-md'></div>
      </div>

      <div className='bg-neutral-800 py-8 px-7 md:px-16 md:py-14 rounded-md container md:max-w-2xl shadow-lg mx-10 md:mx-0'>
        <form onSubmit={handleSubmit(onSubmit)} className="grid">
          {/* Data de Nascimento */}
          <div className='mb-4'>
            <label htmlFor='dtNascimento' className='text-white text-lg'>Data de Nascimento</label>
            <InputMask mask="99/99/9999" type="text" id="dtNascimento" name="dtNascimento" ref={register} placeholder="Digite sua Data de Nascimento" required className='bg-black h-10 px-3 w-full text-neutral-400 rounded-md focus:text-emerald-400 focus:border-2 focus:border-emerald-400 focus:outline-none placeholder:text-neutral-700'/>
            <p id="errorDtNascimento" className='hidden text-red-500 text-md'>A data de nascimento deve ser válida</p>
          </div>

          {/* CPF */}
          <div className='mb-4'>
            <label htmlFor='cpf' className='text-white text-lg'>CPF</label>
            <InputMask mask="999.999.999-99" type="text" id="cpf" name="cpf" ref={register} placeholder="Digite seu CPF" required className='bg-black h-10 px-3 w-full text-neutral-400 rounded-md focus:text-emerald-400 focus:border-2 focus:border-emerald-400 focus:outline-none placeholder:text-neutral-700'/>
            <p id="errorCpf" className='hidden text-red-500 text-md'>O CPF deve ser válido</p>
          </div>

          {/* Renda Mensal */}
          <div className='mb-4'>
            <label htmlFor='renda' className='text-white text-lg'>Renda Mensal</label>
            <input type="text" name="renda" ref={register} placeholder="Digite sua Renda Mensal" required className='bg-black h-10 px-3 w-full text-neutral-400 rounded-md focus:text-emerald-400 focus:border-2 focus:border-emerald-400 focus:outline-none placeholder:text-neutral-700'/>
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