import {
    getDiscountPercentage,
    getQuantityDiscountMessage,
    isQuantityDiscount,
    isUnitDiscount,
} from '../../../../helpers';
import type {PriceObject} from '../../../reducers/productsReducer/types';

export const getDiscountMessage = (priceEntity: PriceObject) => {
    if (isQuantityDiscount(priceEntity)) return getQuantityDiscountMessage(priceEntity);
    if (isUnitDiscount(priceEntity)) return getDiscountPercentage(priceEntity);
    return '';
};
