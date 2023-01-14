import type {ProductResponse} from '../../../api/getProducts/types';
import type {PriceObject} from '../../reducers/productsReducer/types';

export interface ProductWithPrice extends ProductResponse {
    price: PriceObject
}
