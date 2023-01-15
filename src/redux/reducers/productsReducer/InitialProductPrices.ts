import {DiscountType} from '../../../globalTypes';

import type {PriceObject} from './types';

export const initialProductPrices: Record<string, PriceObject> = {
    A: {
        unitPrice: 50,
        specialPrice: {
            type: DiscountType.QUANTITY_DISCOUNT,
            data: {
                count: 3,
                price: 130,
            },
        },
    },
    B: {
        unitPrice: 30,
        specialPrice: {
            type: DiscountType.UNIT_DISCOUNT,
            data: {
                price: 12,
            },
        },
    },
    C: {
        unitPrice: 20,
    },
    D: {
        unitPrice: 20,
    },
};
