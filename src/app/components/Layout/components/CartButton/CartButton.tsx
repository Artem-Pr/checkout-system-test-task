import React from 'react';
import {useSelector} from 'react-redux';

import {ShoppingCartOutlined} from '@ant-design/icons';
import {Badge} from 'antd';
import cn from 'classnames';

import styles from './CartButton.module.scss';

import {getCart} from '../../../../../redux/selectors/cartSelectors';

export const CartButton = () => {
    const cart = useSelector(getCart);

    return (
        <Badge
            className={cn(styles.badge, 'd-flex')}
            count={cart.length}
        >
            <ShoppingCartOutlined className={styles.cartIcon} />
        </Badge>
    );
};
