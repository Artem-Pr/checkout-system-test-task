import React from 'react';
import {useSelector} from 'react-redux';
import {Outlet, useLocation} from 'react-router-dom';

import {
    Layout as AntdLayout,
    Menu,
    Spin,
} from 'antd';
import {Header} from 'antd/es/layout/layout';
import cn from 'classnames';

import {RoutePaths} from 'src/globalTypes';
import {getFormattedPrice} from 'src/helpers';

import styles from './Layout.module.scss';

import {getTotalPriceEntity} from 'src/redux/selectors/cartSelectors';
import {getLoading} from 'src/redux/selectors/sessionSelectors';

import {navigateMenuItems} from './helpers';

export const Layout = () => {
    const {pathname} = useLocation();
    const {totalPrice} = useSelector(getTotalPriceEntity);
    const loading = useSelector(getLoading);

    const isMainPage = pathname === RoutePaths.MARKET;

    return (
        <AntdLayout className={cn(styles.contentWrapper, 'h-100vh d-grid')}>
            <Header className="d-flex justify-between">
                <div className={styles.logo}>Logo</div>
                <Menu
                    className={styles.menu}
                    theme="dark"
                    mode="horizontal"
                    items={navigateMenuItems}
                    selectedKeys={[pathname]}
                />
            </Header>
            {isMainPage
                ? (
                    <div className="m-10 justify-self-end">
                        <span>Total price:</span>
                        <span className="ml-10">{getFormattedPrice(totalPrice)}</span>
                    </div>
                )
                : <div />}
            <Spin
                spinning={loading}
                size="large"
            >
                <Outlet />
            </Spin>
        </AntdLayout>
    );
};
