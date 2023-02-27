'use strict';

import { Client } from 'pg';
import { options } from '../database/config';
import { prepareResponse } from '../utils/helpers';
import { statusCode } from '../utils/constants';

export const getProductsList = async () => {
    console.log('getProductById handler is working. No arguments for this handler.');
    const client = new Client(options);

    try {
        await client.connect();

        const { rows: products } = await client.query(`
            SELECT products.id, products.title, products.description, products.price, stocks.count
            FROM products LEFT JOIN stocks ON products.id = stocks.product_id;
        `);

        return prepareResponse(statusCode.OK, products);
    } catch (error) {
        return prepareResponse(statusCode.internalServerError, error.message);
    } finally {
        client.end();
    }
};
