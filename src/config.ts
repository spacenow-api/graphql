import * as dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT ? parseInt(process.env.PORT) : 4000;

export const GATEWAY_HOST = process.env.GATEWAY_HOST || 'http://localhost:5000';

export const HOLIDAYS_HOST: string = 'https://data.gov.au/data/api/3/action/datastore_search?resource_id=bda4d4f2-7fde-4bfc-8a23-a6eefc8cef80';
