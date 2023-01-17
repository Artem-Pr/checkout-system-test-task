import React, {useLayoutEffect} from 'react';
import {useDispatch} from 'react-redux';

import {setLoading} from 'src/redux/reducers/sessionReducer';

export const GlobalLoaderSwitcher = () => {
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        dispatch(setLoading(true));
        return () => {
            dispatch(setLoading(false));
        };
    }, [dispatch]);

    return <div />;
};
