import { configureStore, createReducer } from '@reduxjs/toolkit'
import React from 'react'
import Cart from '../components/Cart';
import cartReducer from './cartSlice';
const appStore = configureStore({
    reducer: {
        Cart: cartReducer
    },
});

export default appStore;