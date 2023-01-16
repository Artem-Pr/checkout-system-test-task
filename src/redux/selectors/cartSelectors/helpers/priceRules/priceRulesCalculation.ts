import {DiscountType} from 'src/globalTypes';
import type {PriceObject} from 'src/redux/reducers/productsReducer/types';

export const priceRulesCalculation = {
    [DiscountType.WITHOUT_DISCOUNT]: (count: number, {unitPrice}: PriceObject) => (
        count * unitPrice
    ),
    [DiscountType.QUANTITY_DISCOUNT]: (count: number, {unitPrice, specialPrice}: PriceObject) => {
        const discountPrice = specialPrice?.data.price;
        const discountCount = specialPrice?.data.count;
        const isDiscountApplied = (discountCount && discountPrice && count >= discountCount);

        if (!isDiscountApplied) return unitPrice * count;

        const numberOfDiscounts = Math.floor(count / discountCount);
        const numberOfProductsWithDiscount = discountCount * numberOfDiscounts;
        const numberOfProductsWithoutDiscount = count - numberOfProductsWithDiscount;

        return (numberOfDiscounts * discountPrice) + (numberOfProductsWithoutDiscount * unitPrice);
    },
    [DiscountType.UNIT_DISCOUNT]: (count: number, {unitPrice, specialPrice}: PriceObject) => {
        const resultPrice = specialPrice?.data.price || unitPrice;

        return resultPrice * count;
    },
};
