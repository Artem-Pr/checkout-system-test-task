import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';

import {
    Typography,
    Table,
} from 'antd';
import cn from 'classnames';

import {getFormattedPrice} from 'src/helpers';
import {
    getCartTableData,
    getTotalPriceEntity,
} from 'src/redux/selectors/cartSelectors';

import {cartTableColumns} from './helpers';

import styles from './Cart.module.scss';

const {Title} = Typography;

export const Cart = () => {
    const cartTableData = useSelector(getCartTableData);
    const {totalPrice} = useSelector(getTotalPriceEntity);

    const CartTableFooter = useMemo(() => () => (
        `Total price: ${getFormattedPrice(totalPrice)}`
    ), [totalPrice]);

    return (
        <div className={cn(styles.cart, 'm-10 d-flex flex-column align-center')}>
            <Title level={3}>Cart</Title>
            <Table
                columns={cartTableColumns}
                dataSource={cartTableData}
                pagination={false}
                scroll={{x: 700}}
                footer={CartTableFooter}
            />
        </div>
    );
};
