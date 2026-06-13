import { createSlice } from '@reduxjs/toolkit'
import React from 'react'


//! createSlice() ==> thsi function is return A Big Object to the <== cartSlice
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],

    },
    reducers: {
        addItem: (state, action) => {
            //? Vanialla (older way) Redux => DON'T MUTATE STATE
            //? const newItems = [...state];
            //? newItems.push(action.payload);
            //? return state

            //! mutating state here 
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
        },
    }

});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
