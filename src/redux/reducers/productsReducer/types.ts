import {DiscountType} from '../../../globalTypes/DiscountType';

export interface PriceObject {
    unitPrice: number
    specialPrice?: {
        type: DiscountType
        data: {
            price: number
            count?: number
        }
    }
}
