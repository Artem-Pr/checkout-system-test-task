import type {NewProductData} from 'src/app/pages/Settings/components';
import type {AppThunk} from 'src/redux/store';

import {setNewProduct, setUnitPrice} from '../productsSlice';

export const addNewProduct = ({name, code, price}: NewProductData): AppThunk => (
    dispatch => {
        dispatch(setNewProduct({
            code,
            label: name,
            preview: '',
        }));
        dispatch(setUnitPrice({
            code,
            unitPrice: price,
        }));
    }
);
