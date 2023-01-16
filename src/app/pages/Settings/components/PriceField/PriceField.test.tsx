import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import {PriceField} from './PriceField'
import {setUnitPrice} from '../../../../../redux/reducers/productsReducer';

jest.mock('../../../../../redux/reducers/productsReducer', () => ({
    setUnitPrice: jest.fn()
}))
jest.mock('../../../../../redux/store', () => ({
    useAppDispatch: () => () => {},
}))

describe('PriceField', () => {
    it('should render', function () {
        const {container} = render(
            <PriceField
                productCode='A'
                price={10}
            />
        )
        expect(container.querySelector('.ant-input-number-input')).toBeInTheDocument()
    });
    it('should call setUnitPrice function', async function () {
        const user = userEvent.setup()
        const {container} = render(
            <PriceField
                productCode='A'
                price={10}
            />
        )
        const inputElem = container.querySelector('.ant-input-number-input')
        inputElem && await user.type(inputElem, '0')
        expect(setUnitPrice).toHaveBeenCalled()
    });
    it('should call setUnitPrice function with parameters {code: "A", unitPrice: 100}', async function () {
        const user = userEvent.setup()
        const {container} = render(
            <PriceField
                productCode='A'
                price={10}
            />
        )
        const inputElem = container.querySelector('.ant-input-number-input')
        inputElem && await user.type(inputElem, '0')
        expect(setUnitPrice).toHaveBeenCalledWith({code: 'A', unitPrice: 100})
    });
})
