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
    editChoress(state,action) {
      state.state='editado';
      state.choresForm=action.payload;
    },
    viewChores(state,action) {
      state.state='editado';
      state.choresForm=action.payload;
    },
    deleteChoress(state,{payload}) {
      state.state='eliminado';
      state.choresForm=payload;

    },
    completeChoress(state,{payload}) {
      state.state='finalizado';
      state.choresComplete=payload;
    },
    viewCompleteChoress(state, {payload}){
      state.choresComplete=payload;
    }

  },
});

export const { initialChores,readChores,viewChores,editChoress,deleteChoress,completeChoress,viewCompleteChoress } = choresSlice.actions;