export interface TotalPriceEntity {
    totalPrice: number
    totalPricePerProduct: Record<string, number>
}

export interface PriceRules {
    [productCode: string]: (count: number) => number
}
