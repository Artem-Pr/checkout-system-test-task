import {DiscountType} from 'src/globalTypes';
import type {PriceObject} from 'src/redux/reducers/productsReducer/types';

export const isUnitDiscount = (priceEntity: PriceObject) => (
    priceEntity.specialPrice?.type === DiscountType.UNIT_DISCOUNT
);
