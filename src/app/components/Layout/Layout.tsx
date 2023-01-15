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

import styles from './Layout.module.scss';

import {getLoading} from '../../../redux/selectors/sessionSelectors';

import {navigateMenuItems} from './helpers';

export const Layout = () => {
    const {pathname} = useLocation();
    const loading = useSelector(getLoading);

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
            <Spin
                spinning={loading}
                size="large"
            >
                <Outlet />
            </Spin>
        </AntdLayout>
    );
};
