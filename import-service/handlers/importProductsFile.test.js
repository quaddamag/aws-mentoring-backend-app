'use strict';

import * as AWS from 'aws-sdk-mock';
import { importProductsFile } from './importProductsFile';
import { statusCode } from "../utils/constants";

AWS.mock('S3', 'getSignedUrl', (action, params, callback) => { callback(null, params.Key) })

describe('importProductsFile', () => {
  test('returns url', async () => {
    const data = await importProductsFile({ queryStringParameters: { name: 'test' } });

    expect(data.statusCode).toEqual(statusCode.OK);
  });

  test('returns error', async () => {
    const data = await importProductsFile();

    expect(data.statusCode).toEqual(statusCode.internalServerError);
  });
});
