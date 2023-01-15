import type {AppThunk} from '../../../store';
import {updateCart} from '../cartSlice';

export const updateCartWithNewProductQuantity = (
    productCode: string,
    newCount: number,
): AppThunk => (dispatch, getState) => {
    const {cart} = getState().cartReducer;

    const cartWithoutCurrentProduct = cart
        .split('')
        .filter(code => productCode !== code)
        .join('');
    const currentProductCodes = new Array(newCount)
        .fill(productCode)
        .join('');

    dispatch(updateCart(cartWithoutCurrentProduct + currentProductCodes));
};
