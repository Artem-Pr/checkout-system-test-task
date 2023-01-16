import React from 'react';

import type {ColumnsType} from 'antd/es/table';

import {
    DiscountCountField,
    DiscountPriceField,
    DiscountTag,
    PriceField,
} from '../components';

import type {SettingsTableData} from './types';

export const settingsTableColumns: ColumnsType<SettingsTableData> = [
    {
        title: 'Product name',
        dataIndex: 'productName',
        key: 'productName',
    },
    {
        title: 'Price, \u20AC',
        dataIndex: 'price',
        key: 'price',
        shouldCellUpdate: (record, prevRecord) => (
            record.code !== prevRecord.code
            || record.price !== prevRecord.price
        ),
        render: (_, {code, price}) => (
            <PriceField
                productCode={code}
                price={price}
            />
        ),
    },
    {
        title: 'Discount price, \u20AC',
        dataIndex: 'discountPrice',
        key: 'discountPrice',
        shouldCellUpdate: (record, prevRecord) => (
            record.code !== prevRecord.code
            || record.discountType !== prevRecord.discountType
            || record.discountPrice !== prevRecord.discountPrice
        ),
        render: (_, {code, discountType, discountPrice}) => (
            <DiscountPriceField
                productCode={code}
                discountType={discountType}
                discountPrice={discountPrice}
            />
        ),
    },
    {
        title: 'Discount count',
        dataIndex: 'discountCount',
        key: 'discountCount',
        shouldCellUpdate: (record, prevRecord) => (
            record.code !== prevRecord.code
            || record.discountType !== prevRecord.discountType
            || record.discountCount !== prevRecord.discountCount
        ),
        render: (_, {code, discountType, discountCount}) => (
            <DiscountCountField
                productCode={code}
                discountType={discountType}
                discountCount={discountCount}
            />
        ),
    },
    {
        title: 'Discount type',
        dataIndex: 'discountType',
        key: 'discountType',
        shouldCellUpdate: (record, prevRecord) => (
            record.code !== prevRecord.code
            || record.discountType !== prevRecord.discountType
        ),
        render: (_, {code, discountType}) => (
            <DiscountTag
                productCode={code}
                discountType={discountType}
            />
        ),
    },
];
