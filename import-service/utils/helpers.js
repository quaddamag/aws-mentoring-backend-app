'use strict';

import { headers } from './constants';

export const prepareResponse = (statusCode, response) => ({ statusCode, headers, body: JSON.stringify(response) });
