import React from 'react';

import {InputNumber} from 'antd';

import {setUnitPrice} from 'src/redux/reducers/productsReducer';
import {useAppDispatch} from 'src/redux/store';

interface Props {
    productCode: string
    price: number
}

export const PriceField = ({
    productCode,
    price,
}: Props) => {
    const dispatch = useAppDispatch();

    const handleInputChange = (newUnitPrice: number | null) => {
        dispatch(setUnitPrice({
            code: productCode,
            unitPrice: newUnitPrice || 0,
        }));
    };

    return (
        <InputNumber
            min={1}
            max={1000}
            value={price}
            onChange={handleInputChange}
        />
    );
};
