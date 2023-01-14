import {DiscountType} from '../globalTypes/DiscountType';
import type {PriceObject} from '../redux/reducers/productsReducer/types';

export const isQuantityDiscount = (priceEntity: PriceObject) => (
    priceEntity.specialPrice?.type === DiscountType.QUANTITY_DISCOUNT
);
