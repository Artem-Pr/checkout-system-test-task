import {createSelector} from '@reduxjs/toolkit';

import type {RootState} from '../../store/rootReducer';
import {getPrices} from '../productsSelectors';

import {
    checkout,
    combinePriceRules,
} from './helpers';
import type {
    PriceRules,
    TotalPriceEntity,
} from './types';

export const getCart = (state: RootState) => state.cartReducer.cart;

export const getPriceRules: (state: RootState) => PriceRules = createSelector(
    getPrices,
    combinePriceRules,
);

export const getTotalPriceEntity: (state: RootState) => TotalPriceEntity = createSelector(
    getCart,
    getPriceRules,
    checkout,
);
