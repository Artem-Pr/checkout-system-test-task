import {createSelector} from '@reduxjs/toolkit';

import type {SettingsTableData} from '../../../app/pages/Settings/helpers';
import type {RootState} from '../../store/rootReducer';

import {addPriceToProductEntities, prepareSettingsTableData} from './helpers';
import type {ProductWithPrice} from './types';

export const getProducts = (state: RootState) => state.productsReducer.products;
export const getPrices = (state: RootState) => state.productsReducer.prices;

export const getProductsWithPrice: (state: RootState) => ProductWithPrice[] = createSelector(
    getPrices,
    getProducts,
    addPriceToProductEntities,
);

export const getSettingsTableData: (state: RootState) => SettingsTableData[] = createSelector(
    getProductsWithPrice,
    prepareSettingsTableData,
);
