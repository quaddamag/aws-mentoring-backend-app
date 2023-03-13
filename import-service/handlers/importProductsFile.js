'use strict';

import * as AWS from 'aws-sdk';
import { prepareResponse } from '../utils/helpers';
import { bucketImportFolder, bucketName, statusCode } from '../utils/constants';

export const importProductsFile = async (event) => {
    const s3 = new AWS.S3();

    try {
        const params = {
            Bucket: bucketName,
            ContentType: 'text/csv',
            Expires: 60,
            Key: `${bucketImportFolder}/${event.queryStringParameters.name}`,
        };
        const url = await s3.getSignedUrlPromise('putObject', params);

        return prepareResponse(statusCode.OK, url);
    } catch (error) {
        return prepareResponse(statusCode.internalServerError, error.message);
    }
};
