import type {PriceObject} from 'src/redux/reducers/productsReducer/types';

export const getQuantityDiscountMessage = (priceEntity: PriceObject) => (
    `${priceEntity.specialPrice?.data.count} for ${priceEntity.specialPrice?.data.price} \u20AC`
);
