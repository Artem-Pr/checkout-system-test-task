/* eslint-disable no-param-reassign */
import {createSlice, current} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import {initialState} from './cartState';

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart(state, action: PayloadAction<string>) {
            state.cart += action.payload;
            console.info('current cart:', current(state).cart);
        },
        updateCart(state, action: PayloadAction<string>) {
            state.cart = action.payload;
            console.info('current cart:', current(state).cart);
        },
    },
});

export const cartReducer = cartSlice.reducer;

export const {
    addProductToCart,
    updateCart,
} = cartSlice.actions;
