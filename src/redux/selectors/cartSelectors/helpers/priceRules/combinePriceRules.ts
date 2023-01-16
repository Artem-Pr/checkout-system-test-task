import type {PriceObject} from 'src/redux/reducers/productsReducer/types';

import {getPriceRule} from './getPriceRule';
import type {PriceRules} from './types';

export const combinePriceRules = (prices: Record<string, PriceObject>): PriceRules => (
    Object
        .keys(prices)
        .reduce((accum, productCode) => ({
            ...accum,
            [productCode]: getPriceRule(prices[productCode]),
        }), {} as PriceRules)
);
