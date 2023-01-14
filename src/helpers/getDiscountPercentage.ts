import type {PriceObject} from '../redux/reducers/productsReducer/types';

export const getDiscountPercentage = (priceEntity: PriceObject) => {
    const specialPriceValue = priceEntity.specialPrice?.data.price;
    return specialPriceValue
        ? `${-(100 - Math.round((specialPriceValue / priceEntity.unitPrice) * 100))}%`
        : '';
};
