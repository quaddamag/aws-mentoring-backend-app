'use strict';

export const statusCode = {
    OK: 200,
    notFound: 404,
    internalServerError: 500,
};

export const responseErrorMessage = {
    notFound: 'No product found.',
    internalServerError: 'An unknown error has occurred. Please try again later.',
};

export const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
};

export const productsMockData = [
    {
        count: 14,
        description: 'ENRI U08 205/55R16 94W',
        id: '1',
        price: 133.00,
        title: 'Grenlander',
    },
    {
        count: 19,
        description: 'Winter Drive 195/65R15 91T',
        id: '2',
        price: 152.00,
        title: 'Cordiant',
    },
    {
        count: 34,
        description: 'Alnac 4G Winter 205/55R16 91T',
        id: '3',
        price: 177.00,
        title: 'Apollo',
    },
    {
        count: 2,
        description: 'Frontour Vanderful A/S 225/75R16C 121/120Q',
        id: '4',
        price: 291.60,
        title: 'Fronway',
    },
    {
        count: 8,
        description: 'IcePower 989 225/70R15C 112/110Q',
        id: '5',
        price: 242.90,
        title: 'Fronway',
    },
    {
        count: 14,
        description: 'High Performance 205/55R16 94V',
        id: '6',
        price: 172.25,
        title: 'Tigar',
    },
    {
        count: 22,
        description: 'Comfort 2 205/55R16 94V',
        id: '7',
        price: 133.34,
        title: 'Cordiant',
    },
    {
        count: 41,
        description: 'MP 47 Hectorra 3 205/55R16 91H',
        id: '8',
        price: 161.00,
        title: 'Matador',
    },
    {
        count: 4,
        description: 'Sport 3 195/65R15 91V',
        id: '9',
        price: 115.20,
        title: 'Cordiant',
    },
    {
        count: 9,
        description: 'Nordman SX3 205/55R16 91H',
        id: '10',
        price: 168.56,
        title: 'Nokian Tyres',
    },
    {
        count: 16,
        description: 'Ecowing ES31 205/55R16 91V',
        id: '11',
        price: 156.08,
        title: 'Kumho',

    },
    {
        count: 26,
        description: 'Winter Drive 2 195/65R15 95T',
        id: '12',
        price: 148.00,
        title: 'Cordiant',
    },
    {
        count: 3,
        description: 'Road Runner 205/60R16 92H',
        id: '13',
        price: 130.00,
        title: 'Cordiant',
    },
    {
        count: 10,
        description: 'Winter 205/55R16 94H',
        id: '14',
        price: 195.00,
        title: 'Tigar',
    },
    {
        count: 15,
        description: 'Cinturato P7 205/55R16 91V',
        id: '15',
        price: 209.28,
        title: 'Pirelli',
    },
    {
        count: 27,
        description: 'Tyres Hakka Green 3 205/55R16 94H',
        id: '16',
        price: 133.00,
        title: 'Nokian',
    },
];
