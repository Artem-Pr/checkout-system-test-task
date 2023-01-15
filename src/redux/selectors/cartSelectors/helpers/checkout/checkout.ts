import type {PriceRules} from '../priceRules/types';

import {getProductCounts} from './getProductCounts';
import {getTotalPrice} from './getTotalPrice';
import {getTotalPricePerProduct} from './getTotalPricePerProduct';
import type {TotalPriceEntity} from './types';

export const checkout = (productCodes: string, priceRules: PriceRules): TotalPriceEntity => {
    const productCounts = getProductCounts(productCodes);
    const totalPricePerProduct = getTotalPricePerProduct(productCounts, priceRules);
    const totalPrice = getTotalPrice(totalPricePerProduct);

    return {
        totalPrice,
        totalPricePerProduct,
    };
};
