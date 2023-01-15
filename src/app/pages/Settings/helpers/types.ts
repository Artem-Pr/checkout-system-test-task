import {DiscountType} from '../../../../globalTypes';

export interface SettingsTableData {
    key: string
    code: string
    productName: string
    price: number
    discountPrice: number
    discountCount: number
    discountType: DiscountType
}
