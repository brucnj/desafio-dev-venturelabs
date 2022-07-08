import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAddress1, setAddress2, setCep } from "../rootSlice";
import InputMask from 'react-input-mask'
import axios from 'axios';

export const Step2 = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  // Inputs do Passo 2
  const cep = useSelector(state => state.cep);
  const address1 = useSelector(state => state.address1);
  const address2 = useSelector(state => state.address2);
  
  const { register, handleSubmit } = useForm({defaultValues: { cep, address1, address2 }});

  const onSubmit = data => {
    data.cep = document.getElementById("cep").value;

    dispatch(setCep(data.cep));
    dispatch(setAddress1(data.address1 + " No. " + data.num));
    dispatch(setAddress2(data.address2));

    history.push("./step3");
  };

  const goBack = () => {
    history.push("./step1");
  }

  const getAddressByCep = (e) => {
    e.preventDefault();
    const cep = document.getElementById("cep").value;
    axios.get("https://viacep.com.br/ws/" + cep + "/json/")
      .then(function (response) {
        const inputAddress = document.getElementById("address1");
        const address = response.data.logradouro + " - " + response.data.bairro + ", " + response.data.localidade;
        inputAddress.value = address;
      });
  }

  return (
    <div className='flex justify-around	my-10'>
      <div className='bg-neutral-800 py-8 px-7 md:px-16 md:py-14 rounded-md container md:max-w-2xl shadow-lg mx-10 md:mx-0'>
        <form onSubmit={handleSubmit(onSubmit)} className="grid">
          {/* CEP */}
          <div className='mb-4'>
            <label htmlFor='cep' className='text-white text-lg'>CEP</label>
            <br />
            <div className="grid grid-cols-6">
              <div className="col-span-5">
                <InputMask mask="99999-999" type="text" id="cep" name="cep" ref={register} placeholder="Digite seu CEP" className='bg-black h-10 px-3 w-full text-neutral-400 rounded-md focus:text-emerald-400 focus:border-2 focus:border-emerald-400 focus:outline-none placeholder:text-neutral-700'/>
              </div>
              <div className="pl-3">
                {/* Botão para procurar endereco com base no CEP */}
                <button onClick={getAddressByCep} className="border-2 border-neutral-400 h-10 w-full rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-neutral-400 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Endereço 1 (Puxado Pelo CEP) */}
          <div className="mb-4 grid grid-cols-4">
            <div className="col-span-3">
              <label htmlFor='address1' className='text-white text-lg'>Endereço</label>
              <br />
              <input id="address1" placeholder="Digite seu Endereço" className='bg-black h-10 px-3 w-full text-neutral-400 rounded-md focus:text-emerald-400 focus:border-2 focus:border-emerald-400 focus:outline-none placeholder:text-neutral-700' type="text" name="address1"  ref={register} />
            </div>

            {/* Numero */}
            <div className="pl-3">
              <label htmlFor='num' className='text-white text-lg'>Número</label>
              <br />
              <input placeholder="No." className='bg-black h-10 px-3 w-full text-neutral-400 rounded-md focus:text-emerald-400 focus:border-2 focus:border-emerald-400 focus:outline-none placeholder:text-neutral-700' type="text" name="num"  ref={register} />
            </div>
          </div>

          {/* Endereço 2 */}
          <div className="mb-4">
            <label htmlFor='address2' className='text-white text-lg'>Endereço 2 (Opcional)</label>
            <br />
            <input type="text" name="address2" ref={register} className='bg-black h-10 px-3 w-full text-neutral-400 rounded-md focus:text-emerald-400 focus:border-2 focus:border-emerald-400   focus:outline-none placeholder:text-neutral-700' placeholder="Digite seu Endereço 2"/>
          </div>

          <div className='flex justify-between mt-5'>
            <button className='border-2 border-emerald-400 rounded-md px-5' onClick={goBack}>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
              </svg>
            </button>

            <button type='submit' className='bg-emerald-400 uppercase font-semibold py-4 px-4 rounded-md'>Continuar</button>
          </div>
        </form>
      </div>
    </div>
  );
};