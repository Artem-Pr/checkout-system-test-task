import type {PriceObject} from '../redux/reducers/productsReducer/types';

export const getQuantityDiscountMessage = (priceEntity: PriceObject) => (
    `${priceEntity.specialPrice?.data.count} for ${priceEntity.specialPrice?.data.price}`
);
