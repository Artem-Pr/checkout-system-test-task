import {ProductResponse} from '../../../api/getProducts/types';

import {initialProductPrices} from './InitialProductPrices';
import type {PriceObject} from './types';

interface State {
    products: ProductResponse[]
    prices: Record<string, PriceObject>
}

export const initialState: State = {
    products: [],
    prices: initialProductPrices,
};
