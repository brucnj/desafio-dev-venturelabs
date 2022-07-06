import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { seDtNascimento, setCpf, setRenda } from "../rootSlice";

export const Step3 = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  // Inputs do Passo 3
  const dtNascimento = useSelector(state => state.dtNascimento);
  const cpf = useSelector(state => state.cpf);
  const renda = useSelector(state => state.renda);

  const { register, handleSubmit } = useForm({defaultValues: { cpf, dtNascimento, renda }});

  const onSubmit = (data) => {
    dispatch(seDtNascimento(data.dtNascimento));
    dispatch(setCpf(data.cpf));
    dispatch(setRenda(data.renda));
    
    history.push("./result");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Data de Nascimento */}
      <div>
        <label htmlFor='dtNascimento'>Digite sua Data de Nascimento:</label>
        <input type="text" name="dtNascimento" ref={register} />
      </div>

      {/* CPF */}
      <div>
        <label htmlFor='cpf'>Digite seu CPF:</label>
        <input type="text" name="cpf" ref={register} />
      </div>

      {/* Renda Mensal */}
      <div>
        <label htmlFor='renda'>Digite sua Renda Mensal:</label>
        <input type="text" name="renda" ref={register} />
      </div>
      <button>Next</button>
    </form>
  );
};