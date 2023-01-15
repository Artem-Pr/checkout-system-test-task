export const getProductCounts = (productCodes: string) => {
    const productCodesArr = productCodes.split('');

    return productCodesArr.reduce((accum, code) => (
        {...accum, [code]: (accum[code] || 0) + 1}
    ), {} as Record<string, number>);
};
