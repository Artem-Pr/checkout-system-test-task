import {
    getFormattedPrice,
    isUnitDiscount,
} from 'src/helpers';
import type {PriceObject} from 'src/redux/reducers/productsReducer/types';

export const getActualPrice = (priceEntity: PriceObject) => {
    const actualPrice = isUnitDiscount(priceEntity)
        ? priceEntity.specialPrice?.data.price
        : priceEntity.unitPrice;

    return getFormattedPrice(actualPrice);
};
