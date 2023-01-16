import React from 'react';
import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';

import {RoutePaths} from 'src/globalTypes';

import {Layout} from './components';
import {
    Cart,
    MainPage,
    Settings,
} from './pages';

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route
                path="/"
                element={(
                    <Layout />
                )}
            >
                <Route
                    index
                    element={<MainPage />}
                />
                <Route
                    path={RoutePaths.CART}
                    element={<Cart />}
                />
                <Route
                    path={RoutePaths.SETTINGS}
                    element={<Settings />}
                />
            </Route>
        </Routes>
    </BrowserRouter>
);

export default App;
