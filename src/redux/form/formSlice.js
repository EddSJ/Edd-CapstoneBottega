import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    nombre: '',
    categoria: '',
    precio: 0,
    descripcion: '',
    imagen: ''
}

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        fillForm: (state, { payload }) => {
            state.nombre = payload.nombre;
            state.categoria = payload.categoria;
            state.precio = payload.precio;
            state.descripcion = payload.descripcion;
            state.imagen = payload.imagen;
        }
    }
})


export const { fillForm } = formSlice.actions;
export const name = (state) => state.form.nombre;/*esta funcion lo que hace es tomar el estado.nombre del slice. propiedad del estado */ 
export const category = (state) => state.form.categoria;
export const price = (state) => state.form.precio;
export const description = (state) => state.form.descripcion;
export const image = (state) => state.form.imagen;
export default formSlice.reducer;