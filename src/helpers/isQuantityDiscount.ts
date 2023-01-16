import {DiscountType} from 'src/globalTypes';
import type {PriceObject} from 'src/redux/reducers/productsReducer/types';

export const isQuantityDiscount = (priceEntity: PriceObject) => (
    priceEntity.specialPrice?.type === DiscountType.QUANTITY_DISCOUNT
);
