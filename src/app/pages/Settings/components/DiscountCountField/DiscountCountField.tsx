import React from 'react';

import {InputNumber} from 'antd';

import {DiscountType} from 'src/globalTypes';
import {setSpecialPriceCount} from 'src/redux/reducers/productsReducer/Thunks';
import {useAppDispatch} from 'src/redux/store';

interface Props {
    productCode: string
    discountType: DiscountType
    discountCount: number
}

export const DiscountCountField = ({
    productCode,
    discountType,
    discountCount,
}: Props) => {
    const dispatch = useAppDispatch();

    const handleInputChange = (newCount: number | null) => {
        dispatch(setSpecialPriceCount(productCode, newCount || 0));
    };

    const disabled = (
        discountType === DiscountType.WITHOUT_DISCOUNT
        || discountType === DiscountType.UNIT_DISCOUNT
    );

    return (
        <InputNumber
            min={2}
            max={1000}
            value={discountCount}
            onChange={handleInputChange}
            disabled={disabled}
        />
    );
};
