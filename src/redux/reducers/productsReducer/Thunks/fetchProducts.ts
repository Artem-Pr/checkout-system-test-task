import {API} from '../../../../api/index';
import type {AppThunk} from '../../../store';
import {setProducts} from '../productsSlice';

export const fetchProducts = (): AppThunk => (
    async dispatch => {
        const products = await API.getProducts();
        dispatch(setProducts(products));
    }
);
