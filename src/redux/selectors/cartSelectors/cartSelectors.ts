import {createSelector} from '@reduxjs/toolkit';

import type {CartTableData} from 'src/app/pages/Cart/helpers/types';

import type {RootState} from '../../store/rootReducer';
import {getPrices, getProductsWithPrice} from '../productsSelectors';

import {
    checkout,
    combinePriceRules,
    prepareCartTableData,
} from './helpers';
import type {TotalPriceEntity} from './helpers/checkout';
import type {PriceRules} from './helpers/priceRules';

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

export const getCartTableData: (state: RootState) => CartTableData[] = createSelector(
    getCart,
    getTotalPriceEntity,
    getProductsWithPrice,
    prepareCartTableData,
);
