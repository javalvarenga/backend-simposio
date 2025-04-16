import knex from 'knex';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const host = process.env.HOST;
const user = process.env.DB_USER;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;

export const db = knex({
  client: 'mysql2',
  connection: {
    host: host,
    user: user,
    password: password,
    database: database,
  },
})
