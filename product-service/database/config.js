'use strict';

import dotenv from 'dotenv';

dotenv.config();

const { DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD } = process.env;

export const options = {
    host: DB_HOST,
    port: Number(DB_PORT),
    database: DB_DATABASE,
    user: DB_USERNAME,
    password: DB_PASSWORD,
    ssl: { rejectUnauthorized: false },
    connectionTimeoutMillis: 5000
}
