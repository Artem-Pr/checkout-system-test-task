import type {AppThunk} from '../../../store';
import {setSpecialPrice} from '../productsSlice';
import type {SpecialPrice} from '../types';

export const setSpecialPriceCount = (
    code: string,
    specialPriceCount: number,
): AppThunk => (dispatch, getState) => {
    const {specialPrice} = getState().productsReducer.prices[code];
    if (specialPrice?.data.count !== undefined) {
        const updatedSpecialPrice: SpecialPrice = {
            ...specialPrice,
            data: {
                ...specialPrice.data,
                count: specialPriceCount,
            },
        };
        dispatch(setSpecialPrice({code, specialPrice: updatedSpecialPrice}));
    }
};
