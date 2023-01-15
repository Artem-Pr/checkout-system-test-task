import React from 'react';

import {InputNumber} from 'antd';

import {updateCartWithNewProductQuantity} from '../../../../../redux/reducers/cartReducer/Thunks';
import {useAppDispatch} from '../../../../../redux/store';

interface Props {
    productCount: number
    productCode: string
}

export const ProductCountField = ({
    productCount,
    productCode,
}: Props) => {
    const dispatch = useAppDispatch();

    const handleInputChange = (newCount: number | null) => {
        dispatch(updateCartWithNewProductQuantity(
            productCode,
            newCount || 1,
        ));
    };

    return (
        <InputNumber
            min={1}
            max={1000}
            value={productCount}
            onChange={handleInputChange}
        />
    );
};
