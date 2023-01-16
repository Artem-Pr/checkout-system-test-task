import {
    getDiscountPercentage,
    getQuantityDiscountMessage,
    isQuantityDiscount,
    isUnitDiscount,
} from 'src/helpers';
import type {PriceObject} from 'src/redux/reducers/productsReducer/types';

export const getDiscountMessage = (priceEntity: PriceObject) => {
    if (isQuantityDiscount(priceEntity)) return getQuantityDiscountMessage(priceEntity);
    if (isUnitDiscount(priceEntity)) return getDiscountPercentage(priceEntity);
    return '';
};
