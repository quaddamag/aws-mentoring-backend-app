'use strict';

import { mockRequestToDatabase, prepareResponse } from '../utils/helpers';
import { statusCode } from '../utils/constants';

export const getProductsList = async () => {
    try {
        const products = await mockRequestToDatabase().then(products => products);

        return prepareResponse(statusCode.OK, products);
    } catch (error) {
        return prepareResponse(statusCode.internalServerError, error.message);
    }
};
