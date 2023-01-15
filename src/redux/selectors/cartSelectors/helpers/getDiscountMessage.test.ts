import {getDiscountMessage} from './getDiscountMessage';
import {PriceObject} from '../../../reducers/productsReducer/types';
import {DiscountType} from '../../../../globalTypes/DiscountType';

describe('getDiscountMessage', () => {
    it('should return "3 for 130"', () => {
        const mockedPriceEntity: PriceObject = {
            unitPrice: 50,
            specialPrice: {
                type: DiscountType.QUANTITY_DISCOUNT,
                data: {count: 3, price: 130}
            }
        }
        expect(getDiscountMessage(mockedPriceEntity)).toBe('3 for 130')
    })
    it('should return "-40%"', () => {
        const mockedPriceEntity: PriceObject = {
            unitPrice: 30,
            specialPrice: {
                type: DiscountType.UNIT_DISCOUNT,
                data: {price: 12}
            }
        }
        expect(getDiscountMessage(mockedPriceEntity)).toBe('-40%')
    })
    it('should return ""', () => {
        const mockedPriceEntity: PriceObject = {
            unitPrice: 30,
        }
        expect(getDiscountMessage(mockedPriceEntity)).toBe('')
    })
})
