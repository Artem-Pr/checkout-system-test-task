import React, {useCallback, useEffect} from 'react';
import {useSelector} from 'react-redux';

import cn from 'classnames';

import {addProductToCart} from '../../../redux/reducers/cartReducer';
import {fetchProducts} from '../../../redux/reducers/productsReducer/Thunks/fetchProducts';

import styles from './MainPage.module.scss';

import {getProductsWithPrice} from '../../../redux/selectors/productsSelectors';
import {useAppDispatch} from '../../../redux/store';

import {ProductCard} from './components';

export const MainPage = () => {
    const dispatch = useAppDispatch();
    const productsWithPrice = useSelector(getProductsWithPrice);

    useEffect(() => {
        !productsWithPrice.length && dispatch(fetchProducts());
    }, [dispatch, productsWithPrice.length]);

    const handleAddToCard = useCallback((productCode: string) => () => {
        dispatch(addProductToCart(productCode));
    }, [dispatch]);

    return (
        <div className={cn(styles.gridWrapper, 'd-grid gap-10 p-10 mw-auto')}>
            {productsWithPrice.map(({
                label,
                preview,
                code,
                price,
            }) => (
                <ProductCard
                    key={code}
                    label={label}
                    preview={preview}
                    price={price}
                    onAddToCard={handleAddToCard(code)}
                />
            ))}
        </div>
    );
};
