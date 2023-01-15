import {priceRulesCalculation} from './priceRulesCalculation';
import {DiscountType} from '../../../../../globalTypes';
import type {PriceObject} from '../../../../reducers/productsReducer/types';

describe('priceRulesCalculation', () => {
    describe('without discount', () => {
        it('should return 18', () => {
            const withoutDiscountRule = priceRulesCalculation[DiscountType.WITHOUT_DISCOUNT];
            const priceEntity: PriceObject = {unitPrice: 6}
            expect(withoutDiscountRule(3, priceEntity)).toBe(18)
        })
        it('should return 0', () => {
            const withoutDiscountRule = priceRulesCalculation[DiscountType.WITHOUT_DISCOUNT];
            const priceEntity: PriceObject = {unitPrice: 6}
            expect(withoutDiscountRule(0, priceEntity)).toBe(0)
        })
    })
    
    describe('quantity discount', () => {
        it('should return 130', () => {
            const quantityDiscountRule = priceRulesCalculation[DiscountType.QUANTITY_DISCOUNT];
            const priceEntity: PriceObject = {
                unitPrice: 50,
                specialPrice: {
                    type: DiscountType.QUANTITY_DISCOUNT,
                    data: {count: 3, price: 130}
                }
            }
            expect(quantityDiscountRule(3, priceEntity)).toBe(130)
        })
        it('should return 180', () => {
            const quantityDiscountRule = priceRulesCalculation[DiscountType.QUANTITY_DISCOUNT];
            const priceEntity: PriceObject = {
                unitPrice: 50,
                specialPrice: {
                    type: DiscountType.QUANTITY_DISCOUNT,
                    data: {count: 3, price: 130}
                }
            }
            expect(quantityDiscountRule(4, priceEntity)).toBe(180)
        })
        it('should return 65', () => {
            const quantityDiscountRule = priceRulesCalculation[DiscountType.QUANTITY_DISCOUNT];
            const priceEntity: PriceObject = {
                unitPrice: 5,
                specialPrice: {
                    type: DiscountType.QUANTITY_DISCOUNT,
                    data: {count: 10, price: 20}
                }
            }
            expect(quantityDiscountRule(25, priceEntity)).toBe(65)
        })
        it('should return 125, if specialPrice.data.count === 0', () => {
            const quantityDiscountRule = priceRulesCalculation[DiscountType.QUANTITY_DISCOUNT];
            const priceEntity: PriceObject = {
                unitPrice: 5,
                specialPrice: {
                    type: DiscountType.QUANTITY_DISCOUNT,
                    data: {count: 0, price: 5}
                }
            }
            expect(quantityDiscountRule(25, priceEntity)).toBe(125)
        })
        it('should return 0, if all prices are equal 0', () => {
            const quantityDiscountRule = priceRulesCalculation[DiscountType.QUANTITY_DISCOUNT];
            const priceEntity: PriceObject = {
                unitPrice: 0,
                specialPrice: {
                    type: DiscountType.QUANTITY_DISCOUNT,
                    data: {count: 0, price: 0}
                }
            }
            expect(quantityDiscountRule(25, priceEntity)).toBe(0)
        })
        it('should return 250, if there are no specialPrice', () => {
            const quantityDiscountRule = priceRulesCalculation[DiscountType.QUANTITY_DISCOUNT];
            const priceEntity: PriceObject = {
                unitPrice: 10,
            }
            expect(quantityDiscountRule(25, priceEntity)).toBe(250)
        })
    })
    
    describe('unit discount', () => {
        it('should return 40', () => {
            const unitDiscountRule = priceRulesCalculation[DiscountType.UNIT_DISCOUNT];
            const priceEntity: PriceObject = {
                unitPrice: 50,
                specialPrice: {
                    type: DiscountType.UNIT_DISCOUNT,
                    data: {price: 40}
                }
            }
            expect(unitDiscountRule(1, priceEntity)).toBe(40)
        })
        it('should return 40, even if specialPrice.data.count === 5', () => {
            const unitDiscountRule = priceRulesCalculation[DiscountType.UNIT_DISCOUNT];
            const priceEntity: PriceObject = {
                unitPrice: 50,
                specialPrice: {
                    type: DiscountType.UNIT_DISCOUNT,
                    data: {price: 40, count: 5}
                }
            }
            expect(unitDiscountRule(1, priceEntity)).toBe(40)
        })
        it('should return 200, if there are 5 products', () => {
            const unitDiscountRule = priceRulesCalculation[DiscountType.UNIT_DISCOUNT];
            const priceEntity: PriceObject = {
                unitPrice: 50,
                specialPrice: {
                    type: DiscountType.UNIT_DISCOUNT,
                    data: {price: 40, count: 5}
                }
            }
            expect(unitDiscountRule(5, priceEntity)).toBe(200)
        })
        it('should return 50, if there are no specialPrice', () => {
            const unitDiscountRule = priceRulesCalculation[DiscountType.UNIT_DISCOUNT];
            const priceEntity: PriceObject = {
                unitPrice: 50,
            }
            expect(unitDiscountRule(1, priceEntity)).toBe(50)
        })
    })
})
