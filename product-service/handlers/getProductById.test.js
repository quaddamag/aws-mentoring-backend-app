'use strict';

import { getProductById } from './getProductById';
import { headers, productMockItem, responseErrorMessage, statusCode } from '../utils/constants';

describe('getProductById', () => {
    test('returns product', async () => {
        const data = await getProductById({ pathParameters: { id: '4c12ae4c-c1f4-4e0b-baed-0aae53f3ef97' } });

        expect(data).toEqual({
            body: JSON.stringify(productMockItem),
            headers,
            statusCode: statusCode.OK,
        });
    });

    test('returns not found error', async () => {
        const data = await getProductById({ pathParameters: { id: 'eaf0859b-e218-4d69-9f54-252754c5ebd0' } });

        expect(data).toEqual({
            body: JSON.stringify(responseErrorMessage.notFound),
            headers,
            statusCode: statusCode.notFound,
        });
    });
});
