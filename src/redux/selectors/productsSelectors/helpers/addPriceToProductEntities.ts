import type {ProductResponse} from 'src/api/getProducts/types';
import type {PriceObject} from 'src/redux/reducers/productsReducer/types';

export const addPriceToProductEntities = (
    prices: Record<string, PriceObject>,
    products: ProductResponse[],
) => (
    products.map(productItem => ({
        ...productItem,
        price: prices[productItem.code] || {unitPrice: 0},
    }))
);
