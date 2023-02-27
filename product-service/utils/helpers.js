'use strict';

import { headers, responseErrorMessage } from './constants';

export const prepareResponse = (statusCode, response) => ({ statusCode, headers, body: JSON.stringify(response) });

export const validateProductCreation = ({ title, price, description, count }) => {
    if (title === undefined || description === undefined || price === undefined || count === undefined) {
        throw new Error(responseErrorMessage.badRequest);
    }
}
