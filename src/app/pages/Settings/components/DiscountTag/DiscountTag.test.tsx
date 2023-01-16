import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import {setSpecialPriceType} from 'src/redux/reducers/productsReducer/Thunks';
import {DiscountTag} from './DiscountTag';
import {DiscountType} from 'src/globalTypes';

jest.mock('src/redux/reducers/productsReducer/Thunks', () => ({
    setSpecialPriceType: jest.fn()
}))
jest.mock('src/redux/store', () => ({
    useAppDispatch: () => () => {},
}))

describe('DiscountTag', () => {
    it('should render', function () {
        const {getByRole} = render(
            <DiscountTag
                productCode='A'
                discountType={DiscountType.UNIT_DISCOUNT}
            />
        )
        expect(getByRole('combobox')).toBeInTheDocument()
    });
    it('should call setSpecialPriceType function', async function () {
        const user = userEvent.setup()
        const {getByRole, getByText} = render(
            <DiscountTag
                productCode='A'
                discountType={DiscountType.UNIT_DISCOUNT}
            />
        )
        const selectElem = getByRole('combobox')
        await user.click(selectElem)
        
        const selectMenuButton = getByText('Quantity discount')
        await user.click(selectMenuButton)
        
        expect(setSpecialPriceType).toHaveBeenCalled()
    });
    it('should call setSpecialPriceType function with parameters ("A", "quantity")', async function () {
        const user = userEvent.setup()
        const {getByRole, getByText} = render(
            <DiscountTag
                productCode='A'
                discountType={DiscountType.UNIT_DISCOUNT}
            />
        )
        const selectElem = getByRole('combobox')
        await user.click(selectElem)
    
        const selectMenuButton = getByText('Quantity discount')
        await user.click(selectMenuButton)
    
        expect(setSpecialPriceType).toHaveBeenCalledWith("A", DiscountType.QUANTITY_DISCOUNT)
    });
})
