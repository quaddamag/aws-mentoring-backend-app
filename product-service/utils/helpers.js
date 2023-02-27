'use strict';

import { headers, productsMockData, responseErrorMessage} from './constants';

export const prepareResponse = (statusCode, response) => ({ statusCode, headers, body: JSON.stringify(response) });

export const mockRequestToDatabase = () => new Promise(
    (resolve, reject) => setTimeout(
        () => Math.round(Math.random() * 1000) > 40
            ? resolve(productsMockData)
            : reject(new Error(responseErrorMessage.internalServerError)),
        Math.round(Math.random() * 1000),
    )
);
