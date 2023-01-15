import React from 'react';
import {Outlet, useLocation} from 'react-router-dom';

import {
    Layout as AntdLayout,
    Menu,
} from 'antd';
import {Header} from 'antd/es/layout/layout';
import cn from 'classnames';

import styles from './Layout.module.scss';

import {navigateMenuItems} from './helpers';

export const Layout = () => {
    const {pathname} = useLocation();

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
            <Outlet />
        </AntdLayout>
    );
};
