import React, {useMemo} from 'react';
import type {SyntheticEvent} from 'react';

import {
    Button,
    Card,
    Tag,
    Typography,
} from 'antd';
import cn from 'classnames';

import imgPlaceholder from 'src/assets/images/image-placeholder.svg';
import {
    getDiscountPercentage,
    getFormattedPrice,
    getQuantityDiscountMessage,
    isQuantityDiscount,
    isUnitDiscount,
} from 'src/helpers';
import type {PriceObject} from 'src/redux/reducers/productsReducer/types';

import styles from './ProductCard.module.scss';

import {getActualPrice} from './helpers';

const {Text} = Typography;

const handleImageOnLoad = (event: SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.classList.remove('d-none');
};

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
            cover={(
                <>
                    <img
                        className={cn(styles.img, 'd-none')}
                        alt={label}
                        src={preview}
                        onLoad={handleImageOnLoad}
                    />
                    <img
                        className={styles.imgPlaceholder}
                        src={imgPlaceholder}
                        alt={label}
                    />
                </>
            )}
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
