import type {TotalPriceEntity, PriceRules} from '../types';

import {getProductCounts} from './getProductCounts';
import {getTotalPrice} from './getTotalPrice';
import {getTotalPricePerProduct} from './getTotalPricePerProduct';

export const checkout = (productCodes: string, priceRules: PriceRules): TotalPriceEntity => {
    const productCounts = getProductCounts(productCodes);
    const totalPricePerProduct = getTotalPricePerProduct(productCounts, priceRules);
    const totalPrice = getTotalPrice(totalPricePerProduct);

    return {
        totalPrice,
        totalPricePerProduct,
    };
};
