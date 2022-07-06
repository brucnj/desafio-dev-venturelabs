import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAddress1, setAddress2, setCep } from "../rootSlice";

export const Step2 = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  // Inputs do Passo 2
  const cep = useSelector(state => state.cep);
  const address1 = useSelector(state => state.address1);
  const address2 = useSelector(state => state.address2);
  
  const { register, handleSubmit } = useForm({defaultValues: { cep, address1, address2 }});

  const onSubmit = data => {
    dispatch(setCep(data.cep));
    dispatch(setAddress1(data.address1));
    dispatch(setAddress2(data.address2));

    history.push("./step3");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* CEP */}
      <div>
        <label htmlFor='cep'>Digite seu CEP:</label>
        <input type="text" name="cep" ref={register} />
      </div>

      {/* Endereço 1 (Puxado Pelo CEP) */}
      <div>
        <label htmlFor='address1'>Digite seu Endereço 1:</label>
        <input type="text" name="address1" ref={register} />
      </div>

      {/* Endereço 2 */}
      <div>
        <label htmlFor='address2'>Digite seu Endereço 2:</label>
        <input type="text" name="address2" ref={register} />
      </div>

      <button>Next</button>
    </form>
  );
};