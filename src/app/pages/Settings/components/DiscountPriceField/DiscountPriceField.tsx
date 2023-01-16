import React from 'react';

import {InputNumber} from 'antd';

import {DiscountType} from 'src/globalTypes';
import {setSpecialPriceValue} from 'src/redux/reducers/productsReducer/Thunks';
import {useAppDispatch} from 'src/redux/store';

interface Props {
    productCode: string
    discountType: DiscountType
    discountPrice: number
}

export const DiscountPriceField = ({
    productCode,
    discountType,
    discountPrice,
}: Props) => {
    const dispatch = useAppDispatch();

    const handleInputChange = (newUnitPrice: number | null) => {
        dispatch(setSpecialPriceValue(productCode, newUnitPrice || 0));
    };

    const disabled = discountType === DiscountType.WITHOUT_DISCOUNT;

    return (
        <InputNumber
            min={1}
            max={1000}
            value={discountPrice}
            onChange={handleInputChange}
            disabled={disabled}
        />
    );
};
