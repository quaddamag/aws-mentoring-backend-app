'use strict';

import { getProductsList } from './getProductsList';
import { productMockItem } from "../utils/constants";

describe('getProductsList', () => {
    test('returns products', async () => {
        const data = await getProductsList();

        expect(JSON.parse(data.body)[9]).toEqual(productMockItem);
    });
});
