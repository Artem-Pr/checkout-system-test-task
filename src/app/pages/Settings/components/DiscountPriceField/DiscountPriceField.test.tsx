import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import {DiscountPriceField} from './DiscountPriceField'
import {DiscountType} from 'src/globalTypes';
import {setSpecialPriceValue} from 'src/redux/reducers/productsReducer/Thunks';

jest.mock('src/redux/reducers/productsReducer/Thunks', () => ({
    setSpecialPriceValue: jest.fn()
}))
jest.mock('src/redux/store', () => ({
    useAppDispatch: () => () => {},
}))

describe('DiscountPriceField', () => {
    it('should render', function () {
        const {container} = render(
            <DiscountPriceField
                productCode='A'
                discountPrice={10}
                discountType={DiscountType.UNIT_DISCOUNT}
            />
        )
        expect(container.querySelector('.ant-input-number-input')).toBeInTheDocument()
    });
    it('should call setSpecialPriceValue function', async function () {
        const user = userEvent.setup()
        const {container} = render(
            <DiscountPriceField
                productCode='A'
                discountPrice={10}
                discountType={DiscountType.UNIT_DISCOUNT}
            />
        )
        const inputElem = container.querySelector('.ant-input-number-input')
        inputElem && await user.type(inputElem, '0')
        expect(setSpecialPriceValue).toHaveBeenCalled()
    });
    it('should call setSpecialPriceValue function with parameters ("A", 100)', async function () {
        const user = userEvent.setup()
        const {container} = render(
            <DiscountPriceField
                productCode='A'
                discountPrice={10}
                discountType={DiscountType.UNIT_DISCOUNT}
            />
        )
        const inputElem = container.querySelector('.ant-input-number-input')
        inputElem && await user.type(inputElem, '0')
        expect(setSpecialPriceValue).toHaveBeenCalledWith('A', 100)
    });
    it("should disable input if discountType === 'without-discount' ", async function () {
        const {container} = render(
            <DiscountPriceField
                productCode='A'
                discountPrice={10}
                discountType={DiscountType.WITHOUT_DISCOUNT}
            />
        )
        const inputElem = container.querySelector('.ant-input-number-input')
        expect(inputElem?.getAttributeNames().includes('disabled')).toBeTruthy()
    });
})
