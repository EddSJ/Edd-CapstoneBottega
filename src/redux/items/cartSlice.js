import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: []   
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, { payload }) => {
            state.cart.push(payload)
        },
        removeItem: (state, { payload }) => {
            state.cart = state.cart.filter(item => item.id !== payload)
        }
    }
})


export const { addItem, removeItem } = cartSlice.actions;
export const itemsOnCart = (state) => state.cart.cart; /*esta funcion lo que hace es tomar el estado.nombre del slice. propiedad del estado */ 
export default cartSlice.reducer;