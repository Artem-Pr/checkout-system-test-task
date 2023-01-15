import {removeSpecialPrice, setSpecialPrice} from '../productsSlice';
import {setSpecialPriceType} from './setSpecialPriceType';
import {DiscountType} from '../../../../globalTypes';

jest.mock('../productsSlice', () => ({
    setSpecialPrice: jest.fn(),
    removeSpecialPrice: jest.fn()
}))

describe('setSpecialPriceType', () => {
    it('should call setSpecialPrice function', function () {
        const mockedDispatch = (func: () => {}) => func
        const thunkFunc = setSpecialPriceType('A', DiscountType.QUANTITY_DISCOUNT) as any
        thunkFunc(mockedDispatch)
        expect(setSpecialPrice).toHaveBeenCalled()
    });
    it('should call removeSpecialPrice function with parameter "A" if DiscountType is not provide the discount', function () {
        const mockedDispatch = (func: () => {}) => func
        const thunkFunc = setSpecialPriceType('A', DiscountType.WITHOUT_DISCOUNT) as any
        thunkFunc(mockedDispatch)
        expect(removeSpecialPrice).toHaveBeenCalledWith('A')
    });
    it('should call setSpecialPrice function with parameter {code, specialPrice}', function () {
        const mockedDispatch = (func: () => {}) => func
        const thunkFunc = setSpecialPriceType('A', DiscountType.UNIT_DISCOUNT) as any
        thunkFunc(mockedDispatch)
        expect(setSpecialPrice).toHaveBeenCalledWith({
                code: 'A',
                specialPrice: {
                    type: DiscountType.UNIT_DISCOUNT,
                    data: {price: 1},
                },
            }
        )
    });
})
