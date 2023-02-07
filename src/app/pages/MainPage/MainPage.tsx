import React, {useCallback, useEffect} from 'react';
import {useSelector} from 'react-redux';

import cn from 'classnames';

import {addProductToCart} from 'src/redux/reducers/cartReducer';
import {fetchProducts} from 'src/redux/reducers/productsReducer/Thunks';
import {getProductsWithPrice} from 'src/redux/selectors/productsSelectors';
import {useAppDispatch} from 'src/redux/store';

import {ProductCard} from './components';

import styles from './MainPage.module.scss';

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
