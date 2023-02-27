'use strict';

import { getProductsList } from './getProductsList';
import { headers, productsMockData } from '../utils/constants';

describe('getProductsList', () => {
    test('returns products', async () => {
        const data = await getProductsList();

        expect(data).toEqual({ body: JSON.stringify(productsMockData), headers, statusCode: 200 });
    });
});
