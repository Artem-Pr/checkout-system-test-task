import {checkout} from './checkout';

describe('checkout', () => {
    it('should return total price entity', () => {
        const mockedPriceRules = {
            A: (count: number) => count * 10,
            B: (count: number) => count * 5,
            D: (count: number) => count * 20,
        }
        expect(checkout('DABABA', mockedPriceRules)).toEqual({
            totalPrice: 60,
            totalPricePerProduct: {
                A: 30,
                B: 10,
                D: 20,
            },
        })
    })
    it('should return 0 for every total price if priceRules === {}', () => {
        const mockedPriceRules = {}
        expect(checkout('DABABA', mockedPriceRules)).toEqual({
            totalPrice: 0,
            totalPricePerProduct: {
                A: 0,
                B: 0,
                D: 0,
            },
        })
    })
    it('should return 0 if productCodes === ""', () => {
        const mockedPriceRules = {
            A: (count: number) => count * 10,
            B: (count: number) => count * 5,
            D: (count: number) => count * 20,
        }
        expect(checkout('', mockedPriceRules)).toEqual({
            totalPrice: 0,
            totalPricePerProduct: {},
        })
    })
})
