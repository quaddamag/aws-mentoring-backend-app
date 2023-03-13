'use strict';

export const statusCode = {
    OK: 200,
    badRequest: 400,
    notFound: 404,
    internalServerError: 500,
};

export const responseErrorMessage = {
    badRequest: 'Wrong input data.',
    notFound: 'No product found.',
};

export const headers = {
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
};

export const productMockItem = {
    id: '4c12ae4c-c1f4-4e0b-baed-0aae53f3ef97',
    title: 'Nokian Tyres',
    description: 'Nordman SX3 205/55R16 91H',
    price: 168,
    count: 9,
};
