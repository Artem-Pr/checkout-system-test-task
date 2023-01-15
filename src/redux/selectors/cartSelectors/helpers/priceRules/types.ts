export interface PriceRules {
    [productCode: string]: (count: number) => number
}
