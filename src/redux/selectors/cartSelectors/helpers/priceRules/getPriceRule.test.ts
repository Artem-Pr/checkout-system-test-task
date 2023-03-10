import type {PriceObject} from 'src/redux/reducers/productsReducer/types';
import {DiscountType} from 'src/globalTypes';
import {getPriceRule} from './getPriceRule';

jest.mock('./priceRulesCalculation', () => ({
    priceRulesCalculation: {
        'without-discount': () => 'no discount function mock',
        'quantity': () => 'quantity discount function mock',
    }
}))

describe('getPriceRule', () => {
    it('should return quantity discount rule function if priceObject has quantity discount type', () => {
        const priceEntity: PriceObject = {
            unitPrice: 50,
            specialPrice: {
                type: DiscountType.QUANTITY_DISCOUNT,
                data: {count: 3, price: 130}
            }
        }
        expect(getPriceRule(priceEntity)(0)).toBe('quantity discount function mock')
    })
    it('should return without discount rule function if priceObject has quantity discount type', () => {
        const priceEntity: PriceObject = {
            unitPrice: 50,
        }
        expect(getPriceRule(priceEntity)(0)).toBe('no discount function mock')
    })
})
