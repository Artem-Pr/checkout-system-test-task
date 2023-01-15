import {getTotalPrice} from './getTotalPrice';

describe('getTotalPrice', () => {
    it('should return total price', () => {
        expect(getTotalPrice({A: 50, B: 3, C: 1})).toBe(54)
    })
    it('should return 0 if totalPricePerProduct === {}', () => {
        expect(getTotalPrice({})).toBe(0)
    })
})
