import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './items/itemSlice';
import cartReducer from './items/cartSlice';
import modalReducer from './modal/modalSlice';
import modalContentReducer from './modal/modalContentSlice';
import formReducer from './form/formSlice';
import authReducer from './auth/authSlice';


export const store = configureStore({   
    reducer: {
        items: itemsReducer,
        cart: cartReducer,
        modal: modalReducer,
        modalContent: modalContentReducer,
        form : formReducer,
        auth: authReducer
    }
})