import * as dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT ? parseInt(process.env.PORT) : 4000;

export const GATEWAY_HOST = process.env.GATEWAY_HOST || 'http://localhost:5000';
