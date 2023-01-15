import type {ProductResponse} from '../../../../api/getProducts/types';
import type {PriceObject} from '../../../reducers/productsReducer/types';

export const addPriceToProductEntities = (
    prices: Record<string, PriceObject>,
    products: ProductResponse[],
) => (
    products.map(productItem => ({
        ...productItem,
        price: prices[productItem.code] || {unitPrice: 0},
    }))
);
