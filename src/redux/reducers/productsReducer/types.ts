import {DiscountType} from '../../../globalTypes';

export interface SpecialPrice {
    type: DiscountType
    data: {
        price: number
        count?: number
    }
}

export interface PriceObject {
    unitPrice: number
    specialPrice?: SpecialPrice
}
