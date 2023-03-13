'use strict';

import * as AWS from 'aws-sdk';
import * as csvParser from 'csv-parser';
import { prepareResponse } from '../utils/helpers';
import { bucketImportFolder, bucketName, bucketParsedFolder, statusCode } from "../utils/constants";

export const importFileParser = async (event) => {
    const s3 = new AWS.S3();
    const params = {
        Bucket: bucketName,
        Key: event.Records[0].s3.object.key
    };

    try {
        await s3.getObject(params)
            .createReadStream()
            .pipe(csvParser())
            .on('data', (data) => console.log(data));

        await s3.copyObject({
            Bucket: bucketName,
            CopySource: `${bucketName}/${event.Records[0].s3.object.key}`,
            Key: event.Records[0].s3.object.key.replace(bucketImportFolder, bucketParsedFolder),
        }).promise();

        await s3.deleteObject({
            Bucket: bucketName,
            Key: event.Records[0].s3.object.key
        }).promise();

        return prepareResponse(statusCode.OK);
    } catch (error) {
        return prepareResponse(statusCode.internalServerError, error.message);
    }
};
