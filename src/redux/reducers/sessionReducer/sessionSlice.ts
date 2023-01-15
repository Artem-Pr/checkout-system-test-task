/* eslint-disable no-param-reassign */
import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import {initialState} from './sessionState';

const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
    },
});

export const sessionReducer = sessionSlice.reducer;

export const {
    setLoading,
} = sessionSlice.actions;
