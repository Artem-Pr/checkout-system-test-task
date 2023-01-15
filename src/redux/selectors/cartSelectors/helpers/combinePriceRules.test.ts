import type {PriceObject} from '../../../reducers/productsReducer/types';
import {DiscountType} from '../../../../globalTypes/DiscountType';
import {combinePriceRules} from './combinePriceRules';

const mockedProductPrices: Record<string, PriceObject> = {
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

jest.mock('./getPriceRule', () => ({
    getPriceRule: (price: PriceObject) => `mocked rule with price: ${price.unitPrice}`
}))

describe('combinePriceRules', () => {
    it('should return an object with mocked rules', () => {
        expect(combinePriceRules(mockedProductPrices)).toEqual({
            A: 'mocked rule with price: 50',
            B: 'mocked rule with price: 30',
            C: 'mocked rule with price: 20',
            D: 'mocked rule with price: 20',
        })
    })
    it('should return an empty object if productPrices === {}', () => {
        expect(combinePriceRules({})).toEqual({})
    })
})
