import {DiscountType} from '../../../../globalTypes';
import type {ProductWithPrice} from '../types';

export const prepareSettingsTableData = (products: ProductWithPrice[]) => (
    products.map(({label, code, price}) => ({
        code,
        key: code,
        productName: label,
        price: price.unitPrice,
        discountPrice: price.specialPrice?.data.price || 0,
        discountCount: price.specialPrice?.data.count || 0,
        discountType: price.specialPrice?.type || DiscountType.WITHOUT_DISCOUNT,
    }))
);
