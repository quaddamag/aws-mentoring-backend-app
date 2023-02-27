'use strict';

import { mockRequestToDatabase, prepareResponse } from '../utils/helpers';
import { responseErrorMessage, statusCode } from '../utils/constants';

export const getProductById = async (event) => {
    try {
        const products = await mockRequestToDatabase().then(products => products);
        const product = products.find(({ id }) => id === event.pathParameters.id);

        return product
            ? prepareResponse(statusCode.OK, product)
            : prepareResponse(statusCode.notFound, responseErrorMessage.notFound);
    } catch (error) {
        return prepareResponse(statusCode.internalServerError, error.message);
    }
};
