import React, {lazy, Suspense} from 'react';
import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';

import {RoutePaths} from 'src/globalTypes';
import {GlobalLoaderSwitcher} from 'src/uiKit';

import {Layout} from './components';

const CartPage = lazy(() => import('./pages/Cart'));
const MainPage = lazy(() => import('./pages/MainPage'));
const SettingsPage = lazy(() => import('./pages/Settings'));

const App = () => (
    <BrowserRouter basename="/checkout-system-test-task/">
        <Routes>
            <Route
                path="/"
                element={(
                    <Layout />
                )}
            >
                <Route
                    index
                    element={(
                        <Suspense fallback={<GlobalLoaderSwitcher />}>
                            <MainPage />
                        </Suspense>
                    )}
                />
                <Route
                    path={RoutePaths.CART}
                    element={(
                        <Suspense fallback={<GlobalLoaderSwitcher />}>
                            <CartPage />
                        </Suspense>
                    )}
                />
                <Route
                    path={RoutePaths.SETTINGS}
                    element={(
                        <Suspense fallback={<GlobalLoaderSwitcher />}>
                            <SettingsPage />
                        </Suspense>
                    )}
                />
            </Route>
        </Routes>
    </BrowserRouter>
);

export default App;
