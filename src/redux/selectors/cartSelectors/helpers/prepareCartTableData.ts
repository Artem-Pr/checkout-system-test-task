import {getFormattedPrice} from '../../../../helpers';
import type {ProductWithPrice} from '../../productsSelectors/types';

import {
    TotalPriceEntity,
    getProductCounts,
} from './checkout';
import {getDiscountMessage} from './getDiscountMessage';

export const prepareCartTableData = (
    cart: string,
    {totalPricePerProduct}: TotalPriceEntity,
    productsWithPrice: ProductWithPrice[],
) => {
    const counts = getProductCounts(cart);
    const productCodesArr = cart.split('');

    return productsWithPrice
        .filter(({code}) => productCodesArr.includes(code))
        .map(({label, code, price}) => ({
            code,
            key: code,
            productName: label,
            productCount: counts[code],
            discountTag: getDiscountMessage(price),
            totalPrice: getFormattedPrice(totalPricePerProduct[code]),
        }));
};
