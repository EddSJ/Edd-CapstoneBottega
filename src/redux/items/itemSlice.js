import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: {}   ,
}

const itemSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        addItems: (state, { payload }) => {
            state.items = payload;
        }
    }
})


export const { addItems } = itemSlice.actions;
export const getAllItems = (state) => state.items.items; /*esta funcion lo que hace es tomar el estado.nombre del slice. propiedad del estado */ 
export default itemSlice.reducer;