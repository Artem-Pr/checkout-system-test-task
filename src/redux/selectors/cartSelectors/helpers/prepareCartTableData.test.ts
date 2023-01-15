import {prepareCartTableData} from './prepareCartTableData';

import type {ProductWithPrice} from '../../productsSelectors/types';
import {DiscountType} from '../../../../globalTypes';
import type {TotalPriceEntity} from './checkout';

describe('prepareCartTableData', () => {
    it('should return table data', function () {
        const mockedTotalPriceEntity: TotalPriceEntity = {
            totalPrice: 0,
            totalPricePerProduct: {
                A: 10,
                B: 20,
            }
        }
        const mockedProductsWithPrice: ProductWithPrice[] = [
            {
                 label: 'Product A',
                 code: 'A',
                 price: {
                     unitPrice: 5,
                 },
                 description: '',
                 preview: '',
                 image: '',
            },
            {
                label: 'Product B',
                code: 'B',
                price: {
                    unitPrice: 20,
                    specialPrice: {
                        type: DiscountType.QUANTITY_DISCOUNT,
                        data: {price: 10, count: 2}
                    }
                },
                description: '',
                preview: '',
                image: '',
            }
        ]
        expect(prepareCartTableData(
            'ABAB',
            mockedTotalPriceEntity,
            mockedProductsWithPrice
        )).toEqual([
            {
                code: 'A',
                key: 'A',
                productName: 'Product A',
                productCount: 2,
                discountTag: '',
                totalPrice: '10 \u20AC',
            },
            {
                code: 'B',
                key: 'B',
                productName: 'Product B',
                productCount: 2,
                discountTag: '2 for 10',
                totalPrice: '20 \u20AC',
            }
        ])
    });
    it('should return an empty Array if there are no mocked products', function () {
        const mockedTotalPriceEntity: TotalPriceEntity = {
            totalPrice: 0,
            totalPricePerProduct: {
                A: 10,
                B: 20,
            }
        }
        const mockedProductsWithPrice: ProductWithPrice[] = []
        expect(prepareCartTableData(
            'ABAB',
            mockedTotalPriceEntity,
            mockedProductsWithPrice
        )).toEqual([])
    });
    it('should return an empty Array if cart is empty (cart === "")', function () {
        const mockedTotalPriceEntity: TotalPriceEntity = {
            totalPrice: 0,
            totalPricePerProduct: {
                A: 10,
                B: 20,
            }
        }
        const mockedProductsWithPrice: ProductWithPrice[] = [
            {
                label: 'Product A',
                code: 'A',
                price: {
                    unitPrice: 5,
                },
                description: '',
                preview: '',
                image: '',
            },
            {
                label: 'Product B',
                code: 'B',
                price: {
                    unitPrice: 20,
                    specialPrice: {
                        type: DiscountType.QUANTITY_DISCOUNT,
                        data: {price: 10, count: 2}
                    }
                },
                description: '',
                preview: '',
                image: '',
            }
        ]
        expect(prepareCartTableData(
            '',
            mockedTotalPriceEntity,
            mockedProductsWithPrice
        )).toEqual([])
    });
})
