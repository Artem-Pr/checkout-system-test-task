import {API} from 'src/api';
import type {AppThunk} from 'src/redux/store';

import {setLoading} from '../../sessionReducer';
import {setProducts} from '../productsSlice';

export const fetchProducts = (): AppThunk => (
    async dispatch => {
        dispatch(setLoading(true));
        const products = await API.getProducts();
        dispatch(setProducts(products));
        dispatch(setLoading(false));
    }
);
