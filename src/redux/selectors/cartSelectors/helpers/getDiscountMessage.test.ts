import {getDiscountMessage} from './getDiscountMessage';
import type {PriceObject} from '../../../reducers/productsReducer/types';
import {DiscountType} from '../../../../globalTypes';

describe('getDiscountMessage', () => {
    it('should return "3 for 130 \u20AC"', () => {
        const mockedPriceEntity: PriceObject = {
            unitPrice: 50,
            specialPrice: {
                type: DiscountType.QUANTITY_DISCOUNT,
                data: {count: 3, price: 130}
            }
        }
        expect(getDiscountMessage(mockedPriceEntity)).toBe('3 for 130 \u20AC')
    })
    it('should return "-60%"', () => {
        const mockedPriceEntity: PriceObject = {
            unitPrice: 30,
            specialPrice: {
                type: DiscountType.UNIT_DISCOUNT,
                data: {price: 12}
            }
        }
        expect(getDiscountMessage(mockedPriceEntity)).toBe('-60%')
    })
    it('should return ""', () => {
        const mockedPriceEntity: PriceObject = {
            unitPrice: 30,
        }
        expect(getDiscountMessage(mockedPriceEntity)).toBe('')
    })
})
