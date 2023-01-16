import React from 'react';
import {useSelector} from 'react-redux';

import {ShoppingCartOutlined} from '@ant-design/icons';
import {Badge} from 'antd';
import cn from 'classnames';

import {getCart} from 'src/redux/selectors/cartSelectors';

import styles from './CartButton.module.scss';

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
