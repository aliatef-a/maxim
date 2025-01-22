import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import cartProgressReducer from './slices/cartProgressSlice';
import authReducer from './slices/authSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        cartProgress: cartProgressReducer,
        auth: authReducer
    },
}); 