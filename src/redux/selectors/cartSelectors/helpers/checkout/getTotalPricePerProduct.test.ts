import {getTotalPricePerProduct} from './getTotalPricePerProduct';

describe('getTotalPricePerProduct', () => {
    it('should return total price per product', () => {
        const mockedProductCounts = {
            A: 2,
            B: 5,
            C: 1,
        }
        const mockedPriceRules = {
            A: (count: number) => count * 10,
            B: (count: number) => count * 5,
            C: (count: number) => count * 20,
        }
        expect(getTotalPricePerProduct(mockedProductCounts, mockedPriceRules)).toEqual({
            A: 20,
            B: 25,
            C: 20,
        })
    })
    it('should return {} if productsCount === {}', () => {
        const mockedProductCounts = {}
        const mockedPriceRules = {
            A: (count: number) => count * 10,
            B: (count: number) => count * 5,
            C: (count: number) => count * 20,
        }
        expect(getTotalPricePerProduct(mockedProductCounts, mockedPriceRules)).toEqual({})
    })
    it('should return an 0 for every product if priceRules === {}', () => {
        const mockedProductCounts = {
            A: 2,
            B: 5,
            C: 1,
        }
        const mockedPriceRules = {}
        expect(getTotalPricePerProduct(mockedProductCounts, mockedPriceRules)).toEqual({
            A: 0,
            B: 0,
            C: 0,
        })
    })
})
