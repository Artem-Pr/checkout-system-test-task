/* eslint-disable max-len */
import imageD from '../../assets/images/42107.webp';
import imageG from '../../assets/images/42111.webp';
import imageB from '../../assets/images/42123.webp';
import imageA from '../../assets/images/42138.webp';
import imageC from '../../assets/images/42140.webp';
import imageF from '../../assets/images/42141.webp';
import imageE from '../../assets/images/42154.webp';

import {ProductResponse} from './types';

export const mockedProducts: ProductResponse[] = [
    {
        label: 'Ford Mustang Shelby GT500',
        preview: imageA,
        code: 'A',
    },
    {
        label: 'McLaren Senna GTR',
        preview: imageB,
        code: 'B',
    },
    {
        label: 'App-Controlled Transformation Vehicle',
        preview: imageC,
        code: 'C',
    },
    {
        label: 'Ducati Panigale V4 R',
        preview: imageD,
        code: 'D',
    },
    {
        label: '2022 Ford GT',
        preview: imageE,
        code: 'E',
    },
    {
        label: 'McLaren Formula 1 Race Car',
        preview: imageF,
        code: 'F',
    },
    {
        label: 'Dom\'s Dodge Charger',
        preview: imageG,
        code: 'G',
    },
];
