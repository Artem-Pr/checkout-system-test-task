import {setSpecialPrice} from '../productsSlice';
import {setSpecialPriceValue} from './setSpecialPriceValue';

jest.mock('../productsSlice', () => ({
    setSpecialPrice: jest.fn()
}))

describe('setSpecialPriceValue', () => {
    it('should call setSpecialPrice function', function () {
        const mockedDispatch = (func: () => {}) => func
        const mockedGetState = () => ({
            productsReducer: {prices: {A: {specialPrice: {data: {price: 10}}}}}
        })
        const thunkFunc = setSpecialPriceValue('A', 5) as any
        thunkFunc(mockedDispatch, mockedGetState)
        expect(setSpecialPrice).toHaveBeenCalled()
    });
    it('should call setSpecialPrice function with parameter {code, specialPrice}', function () {
        const mockedDispatch = (func: () => {}) => func
        const mockedGetState = () => ({
            productsReducer: {prices: {A: {specialPrice: {data: {price: 10}}}}}
        })
        const thunkFunc = setSpecialPriceValue('A', 5) as any
        thunkFunc(mockedDispatch, mockedGetState)
        expect(setSpecialPrice).toHaveBeenCalledWith({code: 'A', specialPrice: {data: {price: 5}}})
    });
    it('should return undefined if specialPrice === undefined', function () {
        const mockedDispatch = (func: () => {}) => func
        const mockedGetState = () => ({
            productsReducer: {prices: {A: {}}}
        })
        const thunkFunc = setSpecialPriceValue('A', 5) as any
        expect(thunkFunc(mockedDispatch, mockedGetState)).toBeUndefined()
    });
})
