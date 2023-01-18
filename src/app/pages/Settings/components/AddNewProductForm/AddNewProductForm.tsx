import React, {useMemo, useState} from 'react';
import {useSelector} from 'react-redux';

import {
    Button,
    Modal,
    Form,
    Input,
    InputNumber,
} from 'antd';

import {addNewProduct} from 'src/redux/reducers/productsReducer/Thunks';
import {getProducts} from 'src/redux/selectors/productsSelectors';
import {useAppDispatch} from 'src/redux/store';

import {codeValidator} from './heplers';
import type {NewProductData} from './types';

const AddNewProductForm = () => {
    const dispatch = useAppDispatch();
    const products = useSelector(getProducts);
    const [showNewProductModal, setShowNewProductModal] = useState(false);

    const productCodesArr = useMemo(() => (
        products.map(({code}) => code)
    ), [products]);

    const handleShowProductModal = () => (
        setShowNewProductModal(true)
    );

    const handleModalCancel = () => {
        setShowNewProductModal(false);
    };

    const handleFormSubmit = (newProduct: NewProductData) => {
        dispatch(addNewProduct(newProduct));
        setShowNewProductModal(false);
    };

    return (
        <>
            <Button
                className="m-10"
                type="primary"
                onClick={handleShowProductModal}
            >
                Add new product
            </Button>
            <Modal
                title="Add new product"
                footer={null}
                open={showNewProductModal}
                onCancel={handleModalCancel}
            >
                <Form<NewProductData>
                    name="addNewProduct"
                    onFinish={handleFormSubmit}
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{required: true, message: 'Please enter the name'}]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Code"
                        name="code"
                        rules={codeValidator(productCodesArr)}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Price"
                        name="price"
                        rules={[{required: true, message: 'Please enter the price'}]}
                    >
                        <InputNumber
                            min={2}
                            max={1000}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                        >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export const AddNewProductFormMemo = React.memo(AddNewProductForm);
