import { createSlice } from '@reduxjs/toolkit';

const initialState={
    state:'',
    choresForm:[],
    choresComplete:[],
    error:null,
}


export const choresSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    initialChores(state) {
      state.state='esperando';
    },
    readChores(state,action) {
      state.state='Pendiente';
      state.choresForm.push(action.payload);
    },
    editChores(state,action) {
      state.state='editado';
    },
    viewChores(state,action) {
      state.state='editado';
      state.choresForm=action.payload;
    },
    deleteChoress(state,{payload}) {
      state.state='eliminado';
      state.choresForm=payload;

    },
    completeChores(state,{payload}) {
      state.state='finalizado';
      const completado= state.choresForm.find((d)=>d.ide === payload);
      console.log(completado);
      state.choresComplete=[...state.choresComplete,completado];

    },

  },
});

export const { initialChores,readChores,viewChores,editChores,deleteChoress,completeChores } = choresSlice.actions;