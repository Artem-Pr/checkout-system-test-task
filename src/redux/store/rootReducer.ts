import {combineReducers} from '@reduxjs/toolkit';

import {
    productsReducer,
    sessionReducer,
    cartReducer,
} from '../reducers';

const rootReducer = combineReducers({
    productsReducer,
    sessionReducer,
    cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
