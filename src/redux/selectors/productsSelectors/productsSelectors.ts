import {createSelector} from '@reduxjs/toolkit';

import type {RootState} from '../../store/rootReducer';

import {addPriceToProductEntities} from './helpers';
import type {ProductWithPrice} from './types';

export const getProducts = (state: RootState) => state.productsReducer.products;
export const getPrices = (state: RootState) => state.productsReducer.prices;

export const getProductsWithPrice: (state: RootState) => ProductWithPrice[] = createSelector(
    getPrices,
    getProducts,
    addPriceToProductEntities,
);
