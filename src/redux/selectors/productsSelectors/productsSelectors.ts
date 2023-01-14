import type {RootState} from '../../store/rootReducer';

export const getProducts = (state: RootState) => state.productsReducer.products;
export const getPrices = (state: RootState) => state.productsReducer.prices;
