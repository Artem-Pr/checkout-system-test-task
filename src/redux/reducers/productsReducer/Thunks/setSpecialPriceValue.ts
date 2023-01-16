import type {AppThunk} from 'src/redux/store';

import {setSpecialPrice} from '../productsSlice';
import type {SpecialPrice} from '../types';

export const setSpecialPriceValue = (
    code: string,
    specialPriceValue: number,
): AppThunk => (dispatch, getState) => {
    const {specialPrice} = getState().productsReducer.prices[code];
    if (specialPrice) {
        const updatedSpecialPrice: SpecialPrice = {
            ...specialPrice,
            data: {
                ...specialPrice.data,
                price: specialPriceValue,
            },
        };
        dispatch(setSpecialPrice({code, specialPrice: updatedSpecialPrice}));
    }
};
