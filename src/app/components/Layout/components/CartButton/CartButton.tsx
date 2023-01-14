import React from 'react';

import {ShoppingCartOutlined} from '@ant-design/icons';
import {Badge} from 'antd';
import cn from 'classnames';

import styles from './CartButton.module.scss';

export const CartButton = () => (
    <Badge className={cn(styles.badge, 'd-flex')} count={0}>
        <ShoppingCartOutlined className={styles.cartIcon} />
    </Badge>
);
