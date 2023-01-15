import {DiscountType} from '../../../globalTypes';

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
