import type {ProductResponse} from 'src/api/getProducts/types';
import type {PriceObject} from 'src/redux/reducers/productsReducer/types';

export interface ProductWithPrice extends ProductResponse {
    price: PriceObject
}
