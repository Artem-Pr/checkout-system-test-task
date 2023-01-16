import React from 'react';

import {DeleteOutlined} from '@ant-design/icons';
import {Button} from 'antd';

import {updateCartWithNewProductQuantity} from 'src/redux/reducers/cartReducer/Thunks';
import {useAppDispatch} from 'src/redux/store';

interface Props {
    productCode: string
}

export const RemoveProductButton = ({
    productCode,
}: Props) => {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(updateCartWithNewProductQuantity(
            productCode,
            0,
        ));
    };

    return (
        <Button
            type="primary"
            icon={<DeleteOutlined />}
            onClick={handleClick}
            danger
        />
    );
};
