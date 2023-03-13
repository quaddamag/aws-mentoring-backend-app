'use strict';

export const bucketName = 'tyres-shop-import-service';
export const bucketImportFolder = 'uploaded';
export const bucketParsedFolder = 'parsed';

export const statusCode = {
    OK: 200,
    internalServerError: 500,
};

export const headers = {
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
};
