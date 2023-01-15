import type {PriceObject} from '../../../reducers/productsReducer/types';
import type {PriceRules} from '../types';

import {getPriceRule} from './getPriceRule';

export const combinePriceRules = (prices: Record<string, PriceObject>): PriceRules => (
    Object
        .keys(prices)
        .reduce((accum, productCode) => ({
            ...accum,
            [productCode]: getPriceRule(prices[productCode]),
        }), {} as PriceRules)
);
