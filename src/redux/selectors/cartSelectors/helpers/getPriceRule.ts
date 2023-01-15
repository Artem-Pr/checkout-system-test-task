import {DiscountType} from '../../../../globalTypes/DiscountType';
import type {PriceObject} from '../../../reducers/productsReducer/types';

import {priceRulesCalculation} from './priceRulesCalculation';

export const getPriceRule = (priceObject: PriceObject): (count: number) => number => {
    const discountType = priceObject.specialPrice?.type;

    switch (discountType) {
        case DiscountType.QUANTITY_DISCOUNT: return (count: number) => (
            priceRulesCalculation[DiscountType.QUANTITY_DISCOUNT](count || 0, priceObject)
        );
        case DiscountType.UNIT_DISCOUNT: return (count: number) => (
            priceRulesCalculation[DiscountType.UNIT_DISCOUNT](count, priceObject)
        );
        default: return (count: number) => (
            priceRulesCalculation[DiscountType.WITHOUT_DISCOUNT](count, priceObject)
        );
    }
};
