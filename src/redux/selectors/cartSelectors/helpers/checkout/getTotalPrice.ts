export const getTotalPrice = (totalPricePerProduct: Record<string, number>) => (
    Object
        .keys(totalPricePerProduct)
        .reduce((accum, code) => (
            accum + totalPricePerProduct[code]
        ), 0)
);
