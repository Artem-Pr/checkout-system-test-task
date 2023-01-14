import {
    getFormattedPrice,
    isUnitDiscount,
} from '../../../../../../helpers';
import type {PriceObject} from '../../../../../../redux/reducers/productsReducer/types';

export const getActualPrice = (priceEntity: PriceObject) => {
    const actualPrice = isUnitDiscount(priceEntity)
        ? priceEntity.specialPrice?.data.price
        : priceEntity.unitPrice;

    return getFormattedPrice(actualPrice);
};
