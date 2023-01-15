import {DiscountType} from '../globalTypes';
import type {PriceObject} from '../redux/reducers/productsReducer/types';

export const isUnitDiscount = (priceEntity: PriceObject) => (
    priceEntity.specialPrice?.type === DiscountType.UNIT_DISCOUNT
);