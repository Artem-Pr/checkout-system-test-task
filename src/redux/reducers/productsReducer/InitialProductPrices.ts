import {DiscountType} from 'src/globalTypes';

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
            type: DiscountType.QUANTITY_DISCOUNT,
            data: {
                count: 2,
                price: 45,
            },
        },
    },
    C: {
        unitPrice: 20,
    },
    D: {
        unitPrice: 15,
    },
    E: {
        unitPrice: 45,
    },
    F: {
        unitPrice: 80,
        specialPrice: {
            type: DiscountType.UNIT_DISCOUNT,
            data: {
                price: 70,
            },
        },
    },
    G: {
        unitPrice: 65,
    },
};
