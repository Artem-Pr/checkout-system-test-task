import type {RuleObject} from 'antd/es/form';

const alphabetRegex = /^[A-Z]+$/i;

export const codeValidator = (productCodesArr: string[]) => ([
    {required: true, message: 'Please enter the code'},
    {
        pattern: alphabetRegex,
        message: 'Code has to have only alphabetic letter',
    },
    (): RuleObject => ({
        validator(_, value) {
            if (value.length <= 1) return Promise.resolve();
            return Promise.reject(new Error('Code has to have only 1 letter'));
        },
        message: 'Code has to have only 1 letter',
    }),
    (): RuleObject => ({
        validator(_, value) {
            if (!productCodesArr.includes(value)) return Promise.resolve();
            return Promise.reject(new Error('This code already exists'));
        },
        message: 'This code already exists',
    }),
]);
