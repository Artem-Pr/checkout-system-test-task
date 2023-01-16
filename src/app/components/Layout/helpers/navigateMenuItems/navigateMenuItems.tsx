import React from 'react';
import {NavLink} from 'react-router-dom';

import type {MenuProps} from 'antd';

import {RoutePaths} from 'src/globalTypes';

import {CartButton} from '../../components';

export const navigateMenuItems: MenuProps['items'] = [
    {
        key: RoutePaths.MARKET,
        label: <NavLink to={RoutePaths.MARKET}>Market</NavLink>,
    },
    {
        key: RoutePaths.SETTINGS,
        label: <NavLink to={RoutePaths.SETTINGS}>Settings</NavLink>,
    },
    {
        key: RoutePaths.CART,
        label: (
            <NavLink to={RoutePaths.CART}>
                <CartButton />
            </NavLink>
        ),
    },
];
