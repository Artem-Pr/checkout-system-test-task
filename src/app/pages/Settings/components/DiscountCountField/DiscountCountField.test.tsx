import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import {DiscountCountField} from './DiscountCountField'
import {DiscountType} from '../../../../../globalTypes/DiscountType';
import {setSpecialPriceCount} from '../../../../../redux/reducers/productsReducer/Thunks';

jest.mock('../../../../../redux/reducers/productsReducer/Thunks', () => ({
    setSpecialPriceCount: jest.fn()
}))
jest.mock('../../../../../redux/store', () => ({
    useAppDispatch: () => () => {},
}))

describe('DiscountPriceField', () => {
    it('should render', function () {
        const {container} = render(
            <DiscountCountField
                productCode='A'
                discountCount={10}
                discountType={DiscountType.UNIT_DISCOUNT}
            />
        )
        expect(container.querySelector('.ant-input-number-input')).toBeInTheDocument()
    });
    it('should call setSpecialPriceCount function', async function () {
        const user = userEvent.setup()
        const {container} = render(
            <DiscountCountField
                productCode='A'
                discountCount={10}
                discountType={DiscountType.QUANTITY_DISCOUNT}
            />
        )
        const inputElem = container.querySelector('.ant-input-number-input')
        inputElem && await user.type(inputElem, '0')
        expect(setSpecialPriceCount).toHaveBeenCalled()
    });
    it('should call setSpecialPriceCount function with parameters ("A", 100)', async function () {
        const user = userEvent.setup()
        const {container} = render(
            <DiscountCountField
                productCode='A'
                discountCount={10}
                discountType={DiscountType.QUANTITY_DISCOUNT}
            />
        )
        const inputElem = container.querySelector('.ant-input-number-input')
        inputElem && await user.type(inputElem, '0')
        expect(setSpecialPriceCount).toHaveBeenCalledWith('A', 100)
    });
    it("should disable input if discountType === 'unit' ", async function () {
        const {container} = render(
            <DiscountCountField
                productCode='A'
                discountCount={10}
                discountType={DiscountType.UNIT_DISCOUNT}
            />
        )
        const inputElem = container.querySelector('.ant-input-number-input')
        expect(inputElem?.getAttributeNames().includes('disabled')).toBeTruthy()
    });
})
