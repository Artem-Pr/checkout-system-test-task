import type {PriceRules} from '../priceRules';

export const getTotalPricePerProduct = (
    productCounts: Record<string, number>,
    priceRules: PriceRules,
) => Object
    .keys(productCounts)
    .reduce((accum, code) => {
        const currentRule = priceRules[code];
        const currentTotalPrice = currentRule
            ? currentRule(productCounts[code])
            : 0;

        return {...accum, [code]: currentTotalPrice};
    }, {} as Record<string, number>);
