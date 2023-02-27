'use strict';

import { Client } from 'pg';
import { options } from '../database/config';
import { prepareResponse } from '../utils/helpers';
import { responseErrorMessage, statusCode } from '../utils/constants';

export const getProductById = async (event) => {
    console.log('getProductById handler is working. Arguments for this request: ', event.pathParameters.id);
    const client = new Client(options);

    try {
        await client.connect();

        const { rows: products } = await client.query(`
            SELECT products.id, products.title, products.description, products.price, stocks.count
            FROM products LEFT JOIN stocks ON products.id = stocks.product_id
            WHERE products.id='${event.pathParameters.id}';
        `);

        return products.length
            ? prepareResponse(statusCode.OK, products[0])
            : prepareResponse(statusCode.notFound, responseErrorMessage.notFound);
    } catch (error) {
        return prepareResponse(statusCode.internalServerError, error.message);
    } finally {
        client.end();
    }
};
