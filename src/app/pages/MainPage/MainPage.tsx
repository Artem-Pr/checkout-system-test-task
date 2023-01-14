import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

import cn from 'classnames';

import {fetchProducts} from '../../../redux/reducers/productsReducer/Thunks/fetchProducts';
import {getProductsWithPrice} from '../../../redux/selectors/productsSelectors';

import styles from './MainPage.module.scss';

import {useAppDispatch} from '../../../redux/store';

import {MemoizedProductCard} from './components/ProductCard';

export const MainPage = () => {
    const dispatch = useAppDispatch();
    const productsWithPrice = useSelector(getProductsWithPrice);

    useEffect(() => {
        !productsWithPrice.length && dispatch(fetchProducts());
    }, [dispatch, productsWithPrice.length]);

    return (
        <div className={cn(styles.gridWrapper, 'd-grid gap-10 p-10 mw-auto')}>
            {productsWithPrice.map(({
                label,
                preview,
                code,
                price,
            }) => (
                <MemoizedProductCard
                    key={code}
                    label={label}
                    preview={preview}
                    price={price}
                />
            ))}
        </div>
    );
};
