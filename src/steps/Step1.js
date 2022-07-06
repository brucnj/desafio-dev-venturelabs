import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { setEmail, setName, setPhone, setSurname } from '../rootSlice'

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
    // console.log(data);
    dispatch(setName(data.name));
    dispatch(setSurname(data.surname));
    dispatch(setEmail(data.email));
    dispatch(setPhone(data.phone));

    history.push("./step2")
  } 

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Nome */}
      <div>
        <label htmlFor='name'>Digite seu Nome:</label>
        <input name='name' ref={register}  />
      </div>

      {/* Sobrenome */}
      <div>
        <label htmlFor='surname'>Digite seu Sobrenome:</label>
        <input name='surname' ref={register} />
      </div>

      {/* E-mail */}
      <div>
        <label htmlFor='email'>Digite seu E-mail:</label>
        <input type="email" name='email' ref={register} />
      </div>

      {/* Telefone */}
      <div>
        <label htmlFor='phone'>Digite seu Telefone (Celular):</label>
        <input type='tel' name='phone'  ref={register} />
      </div>
      <button>Next</button>
    </form>
  )
}