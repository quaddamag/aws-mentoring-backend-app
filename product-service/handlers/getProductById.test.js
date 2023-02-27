'use strict';

import { getProductById } from './getProductById';
import { headers, responseErrorMessage, statusCode } from '../utils/constants';

describe('getProductById', () => {
    test('returns product', async () => {
        const data = await getProductById({ pathParameters: { id: '10' } });

        expect(data).toEqual({
            body: JSON.stringify({
                count: 9,
                description: 'Nordman SX3 205/55R16 91H',
                id: '10',
                price: 168.56,
                title: 'Nokian Tyres',
            }),
            headers,
            statusCode: statusCode.OK,
        });
    });

    test('returns not found error', async () => {
        const data = await getProductById({ pathParameters: { id: '20' } });

        expect(data).toEqual({
            body: JSON.stringify(responseErrorMessage.notFound),
            statusCode: statusCode.notFound,
            headers,
        });
    });
});
