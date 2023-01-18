import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

import {
    Typography,
    Table,
} from 'antd';

import {fetchProducts} from 'src/redux/reducers/productsReducer/Thunks';
import {
    getProductsWithPrice,
    getSettingsTableData,
} from 'src/redux/selectors/productsSelectors';
import {useAppDispatch} from 'src/redux/store';

import {AddNewProductForm} from './components';
import {settingsTableColumns} from './helpers';

const {Title} = Typography;

export const Settings = () => {
    const dispatch = useAppDispatch();
    const productsWithPrice = useSelector(getProductsWithPrice);
    const settingsTableData = useSelector(getSettingsTableData);

    useEffect(() => {
        !productsWithPrice.length && dispatch(fetchProducts());
    }, [dispatch, productsWithPrice.length]);

    return (
        <div className="m-10 d-flex flex-column align-center">
            <Title level={3}>Products settings</Title>
            <Table
                columns={settingsTableColumns}
                dataSource={settingsTableData}
                pagination={false}
                scroll={{x: 700}}
            />
            <AddNewProductForm />
        </div>
    );
};
