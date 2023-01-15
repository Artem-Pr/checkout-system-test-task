import {getProductCounts} from './getProductCounts';

describe('getProductCounts', () => {
    it('should return products count entity', () => {
        expect(getProductCounts('DABABA')).toEqual({
            A: 3,
            B: 2,
            D: 1
        })
    })
    it('should return an empty object if there are no products', () => {
        expect(getProductCounts('')).toEqual({})
    })
})
