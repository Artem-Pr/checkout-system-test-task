import {combineReducers} from '@reduxjs/toolkit';

import {
    productsReducer,
} from '../reducers';

const rootReducer = combineReducers({
    productsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
