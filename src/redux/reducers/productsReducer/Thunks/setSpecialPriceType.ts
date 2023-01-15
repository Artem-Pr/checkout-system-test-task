import {DiscountType} from '../../../../globalTypes';
import type {AppThunk} from '../../../store';
import {removeSpecialPrice, setSpecialPrice} from '../productsSlice';

export const setSpecialPriceType = (
    code: string,
    specialPriceType: DiscountType,
): AppThunk => dispatch => {
    switch (specialPriceType) {
        case DiscountType.QUANTITY_DISCOUNT:
            dispatch(setSpecialPrice({
                code,
                specialPrice: {
                    type: DiscountType.QUANTITY_DISCOUNT,
                    data: {price: 1, count: 2},
                },
            }));
            break;
        case DiscountType.UNIT_DISCOUNT:
            dispatch(setSpecialPrice({
                code,
                specialPrice: {
                    type: DiscountType.UNIT_DISCOUNT,
                    data: {price: 1},
                },
            }));
            break;
        default:
            dispatch(removeSpecialPrice(code));
    }
};
