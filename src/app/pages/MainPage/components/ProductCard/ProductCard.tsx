import React, {useMemo} from 'react';

import {
    Button,
    Card,
    Tag,
    Typography,
} from 'antd';
import cn from 'classnames';

import {
    getDiscountPercentage,
    getFormattedPrice,
    getQuantityDiscountMessage,
    isQuantityDiscount,
    isUnitDiscount,
} from '../../../../../helpers';
import type {PriceObject} from '../../../../../redux/reducers/productsReducer/types';

import styles from './ProductCard.module.scss';

import {getActualPrice} from './helpers';

const {Text} = Typography;

interface Props {
    label: string
    preview: string
    price: PriceObject
    onAddToCard: () => void
}

export const ProductCard = ({
    label,
    preview,
    price,
    onAddToCard,
}: Props) => {
    const discountPercentage = useMemo(() => (
        isUnitDiscount(price) && getDiscountPercentage(price)
    ), [price]);

    return (
        <Card
            className={cn(styles.card, 'd-grid')}
            cover={<img alt={label} src={preview} />}
        >
            <div className="d-flex align-center gap-10">
                <Text
                    className={styles.price}
                >
                    {getActualPrice(price)}
                </Text>

                {isUnitDiscount(price) && (
                    <>
                        <Text delete>
                            {getFormattedPrice(price.unitPrice)}
                        </Text>
                        <Tag color="#f50">
                            {discountPercentage}
                        </Tag>
                    </>
                )}

                {isQuantityDiscount(price) && (
                    <Tag color="#f50">
                        {getQuantityDiscountMessage(price)}
                    </Tag>
                )}
            </div>
            <Text>{label}</Text>
            <Button
                type="primary"
                onClick={onAddToCard}
                block
            >
                Add to Cart
            </Button>
        </Card>
    );
};
