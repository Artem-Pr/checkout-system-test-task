/* eslint-disable no-param-reassign */
import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import type {ProductResponse} from 'src/api/getProducts/types';

import {initialState} from './productsState';
import type {PriceObject, SpecialPrice} from './types';

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
        setUnitPrice(state, action: PayloadAction<{code: string, unitPrice: number}>) {
            state.prices[action.payload.code].unitPrice = action.payload.unitPrice;
        },
        setSpecialPrice(state, action: PayloadAction<{code: string, specialPrice: SpecialPrice}>) {
            state.prices[action.payload.code].specialPrice = action.payload.specialPrice;
        },
        removeSpecialPrice(state, action: PayloadAction<string>) {
            delete state.prices[action.payload].specialPrice;
        },
    },
});

export const productsReducer = productsSlice.reducer;

export const {
    setProducts,
    setPrices,
    setUnitPrice,
    setSpecialPrice,
    removeSpecialPrice,
} = productsSlice.actions;
