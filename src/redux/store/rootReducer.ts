import {combineReducers} from '@reduxjs/toolkit';

import {
    productsReducer,
    cartReducer,
} from '../reducers';

const rootReducer = combineReducers({
    productsReducer,
    cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
