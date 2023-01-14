/* eslint-disable no-param-reassign */
import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import type {ProductResponse} from '../../../api/getProducts/types';

import {initialState} from './productsState';
import {PriceObject} from './types';

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts(state, action: PayloadAction<ProductResponse[]>) {
            state.products = action.payload;
        },
        setPrices(state, action: PayloadAction<Record<string, PriceObject>>) {
            state.prices = action.payload;
        },
    },
});

export const productsReducer = productsSlice.reducer;

export const {
    setProducts,
    setPrices,
} = productsSlice.actions;
