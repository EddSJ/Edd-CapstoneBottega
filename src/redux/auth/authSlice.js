import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    credentials: false 
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, { payload }) => {
            state.credentials = payload;
        }
    }
})


export const { setCredentials } = authSlice.actions;
export const credentialsStatus = (state) => state.auth.credentials; /*esta funcion lo que hace es tomar el estado.nombre del slice. propiedad del estado */ 
export default authSlice.reducer;