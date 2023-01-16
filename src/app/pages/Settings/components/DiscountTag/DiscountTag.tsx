import React from 'react';

import {Select} from 'antd';

import {DiscountType} from '../../../../../globalTypes/DiscountType';
import {setSpecialPriceType} from '../../../../../redux/reducers/productsReducer/Thunks';
import {useAppDispatch} from '../../../../../redux/store';

const DiscountTypeOptions = [
    {
        value: DiscountType.WITHOUT_DISCOUNT,
        label: 'No discount',
    },
    {
        value: DiscountType.UNIT_DISCOUNT,
        label: 'Discount per unit',
    },
    {
        value: DiscountType.QUANTITY_DISCOUNT,
        label: 'Quantity discount',
    },
];

interface Props {
    productCode: string
    discountType: DiscountType
}

export const DiscountTag = ({
    productCode,
    discountType,
}: Props) => {
    const dispatch = useAppDispatch();

    const handleSelectChange = (newDiscountType: DiscountType) => {
        dispatch(setSpecialPriceType(productCode, newDiscountType));
    };

    return (
        <Select
            style={{width: 160}}
            defaultValue={discountType}
            options={DiscountTypeOptions}
            onChange={handleSelectChange}
        />
    );
};
