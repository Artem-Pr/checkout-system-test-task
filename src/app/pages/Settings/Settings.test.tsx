import React from 'react';
import '@testing-library/jest-dom'
import {useSelector} from 'react-redux';
import {render} from '@testing-library/react';
import {Settings} from './Settings';
import {fetchProducts} from '../../../redux/reducers/productsReducer/Thunks';

jest.mock('react-redux', () => ({
    useSelector: jest.fn()
}))

jest.mock('antd', () => ({
    Typography: {
        Title: ({children}: any) => <div>{children}</div>
    },
    Table: () => <div>Table</div>
}))

jest.mock('../../../redux/reducers/productsReducer/Thunks', () => ({
    fetchProducts: jest.fn()
}))

jest.mock('../../../redux/selectors/productsSelectors', () => ({
    getProductsWithPrice: 'mockedSelector',
    getSettingsTableData: 'mockedSelector',
}))

jest.mock('../../../redux/store', () => ({
    useAppDispatch: () => () => {},
}))

jest.mock('./helpers', () => ({
    settingsTableColumns: 'mockedTableColumns',
}))

describe('Settings', () => {
    it('should render Table', function () {
        (useSelector as jest.Mock).mockImplementation(() => [])
        const {queryByText} = render(<Settings />)
        expect(queryByText('Table')).toBeTruthy()
    });
    it('should call fetchProducts function if productsWithPrice.length === 0', function() {
        (useSelector as jest.Mock).mockImplementation(() => [])
        render(<Settings />)
        expect(fetchProducts).toHaveBeenCalled()
    });
    it('should not call fetchProducts function if productsWithPrice.length > 0', function() {
        (useSelector as jest.Mock).mockImplementation(() => ['mocked value'])
        render(<Settings />)
        expect(fetchProducts).not.toHaveBeenCalled()
    });
})
