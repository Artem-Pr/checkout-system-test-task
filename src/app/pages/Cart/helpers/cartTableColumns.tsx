import React from 'react';

import {Tag} from 'antd';
import type {ColumnsType} from 'antd/es/table';

import {ProductCountField, RemoveProductButton} from '../components';

import type {CartTableData} from './types';

export const cartTableColumns: ColumnsType<CartTableData> = [
    {
        title: 'Product name',
        dataIndex: 'productName',
        key: 'productName',
    },
    {
        title: 'Count',
        dataIndex: 'count',
        key: 'count',
        shouldCellUpdate: (record, prevRecord) => (
            record.productCount !== prevRecord.productCount
            || record.code !== prevRecord.code
        ),
        render: (_, {productCount, code}) => (
            <ProductCountField
                productCount={productCount}
                productCode={code}
            />
        ),
    },
    {
        title: 'Discount tag',
        dataIndex: 'discountTag',
        key: 'discountTag',
        shouldCellUpdate: (record, prevRecord) => record.discountTag !== prevRecord.discountTag,
        render: (_, {discountTag}) => (
            <Tag
                color={discountTag ? '#f50' : undefined}
                key="discountTag"
            >
                {discountTag || 'No discount'}
            </Tag>
        ),
    },
    {
        title: 'Total price',
        dataIndex: 'totalPrice',
        key: 'totalPrice',
    },
    {
        title: 'Action',
        key: 'action',
        shouldCellUpdate: (record, prevRecord) => record.code !== prevRecord.code,
        render: (_, {code}) => (
            <RemoveProductButton productCode={code} />
        ),
    },
];
