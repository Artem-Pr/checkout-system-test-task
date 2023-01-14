import {delay} from './helpers';
import {mockedProducts} from './mockedProducts';

export const getProducts = async () => {
    await delay(500);
    return mockedProducts;
};
