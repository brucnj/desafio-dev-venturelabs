import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
  name: "root",
  initialState: {
    name: "",
    surname: "",
    email: "",
    phone: "",

    cep: "",
    address1: "",
    address2: "",

    dtNascimento: "",
    cpf: "",
    renda: "",
  },
  reducers: {
    // Passo 1
    setName: (state, action) => { state.name = action.payload },
    setSurname: (state, action) => { state.surname = action.payload },
    setEmail: (state, action) => { state.email = action.payload },
    setPhone: (state, action) => { state.phone = action.payload },

    // Passo 2
    setCep: (state, action) => { state.cep = action.payload },
    setAddress1: (state, action) => { state.address1 = action.payload },
    setAddress2: (state, action) => { state.address2 = action.payload },

    // Passo 3
    seDtNascimento: (state, action) => { state.dtNascimento = action.payload },
    setCpf: (state, action) => { state.cpf = action.payload },
    setRenda: (state, action) => { state.renda = action.payload }
  }
})

export const reducer = rootSlice.reducer;

export const { setName, setSurname, setEmail, setPhone, setCep, setAddress1, setAddress2, seDtNascimento, setCpf, setRenda } = rootSlice.actions

