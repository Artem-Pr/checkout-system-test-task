import {setSpecialPrice} from '../productsSlice';
import {setSpecialPriceCount} from './setSpecialPriceCount';

jest.mock('../productsSlice', () => ({
    setSpecialPrice: jest.fn()
}))

describe('setSpecialPriceCount', () => {
    it('should call setSpecialPrice function', function () {
        const mockedDispatch = (func: () => {}) => func
        const mockedGetState = () => ({
            productsReducer: {prices: {A: {specialPrice: {data: {count: 10}}}}}
        })
        const thunkFunc = setSpecialPriceCount('A', 5) as any
        thunkFunc(mockedDispatch, mockedGetState)
        expect(setSpecialPrice).toHaveBeenCalled()
    });
    it('should call setSpecialPrice function with parameter {code, specialPrice}', function () {
        const mockedDispatch = (func: () => {}) => func
        const mockedGetState = () => ({
            productsReducer: {prices: {A: {specialPrice: {data: {count: 10}}}}}
        })
        const thunkFunc = setSpecialPriceCount('A', 5) as any
        thunkFunc(mockedDispatch, mockedGetState)
        expect(setSpecialPrice).toHaveBeenCalledWith({code: 'A', specialPrice: {data: {count: 5}}})
    });
    it('should return undefined if specialPrice.data.count === undefined', function () {
        const mockedDispatch = (func: () => {}) => func
        const mockedGetState = () => ({
            productsReducer: {prices: {A: {specialPrice: {data: {}}}}}
        })
        const thunkFunc = setSpecialPriceCount('A', 5) as any
        expect(thunkFunc(mockedDispatch, mockedGetState)).toBeUndefined()
    });
})
