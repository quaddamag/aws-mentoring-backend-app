'use strict';

import { Client } from 'pg';
import { options } from '../database/config';
import { prepareResponse, validateProductCreation } from '../utils/helpers';
import { statusCode } from "../utils/constants";

export const createProduct = async (event) => {
    console.log('createProduct handler is working. Arguments for this request.: ', event.body);

    if (event.body) {
        const client = new Client(options);

        try {
            validateProductCreation(JSON.parse(event.body));
        } catch (error) {
            return prepareResponse(statusCode.badRequest, error.message);
        }

        try {
            await client.connect();

            const { title, description, price, count } = JSON.parse(event.body);

            await client.query('BEGIN');

            const productResponse = await client.query(`
                INSERT INTO products (title, description, price)
                VALUES ('${title}', '${description}', ${price})
                RETURNING *
            `);
            const product = productResponse.rows[0];

            const stockResponse = await client.query(`
                INSERT INTO stocks (product_id, count)
                VALUES ('${product.id}', '${count}')
                RETURNING *
            `);

            await client.query('COMMIT');

            product.count = stockResponse.rows[0].count;

            return prepareResponse(statusCode.OK, product);
        } catch (error) {
            await client.query('ROLLBACK');

            return prepareResponse(statusCode.internalServerError, error.message);
        } finally {
            client.end();
        }
    }
}
