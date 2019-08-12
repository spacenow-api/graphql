import * as dotenv from 'dotenv';
dotenv.config();

export const PORT: number = 4000;

export const PLAYGROUND = process.env.PLAYGROUND
	? Boolean(process.env.PLAYGROUND)
	: false;

export const TEMP_FILE_UPLOAD = './temp';

export const ASSETS_API_HOST: string =
	process.env.ASSETS_API_HOST || 'http://localhost:6007';

export const CATEGORIES_API_HOST: string =
	process.env.CATEGORIES_API_HOST || 'http://localhost:6003';

export const LOCATIONS_API_HOST: string =
	process.env.LOCATIONS_API_HOST || 'http://localhost:6005';

export const SPACES_API_HOST: string =
	process.env.SPACES_API_HOST || 'http://localhost:6002';

export const USERS_AUTHENTICATION_API_HOST: string =
	process.env.USERS_API_HOST || 'http://localhost:6001';

export const API_AVAILABILITIES: string =
	process.env.API_AVAILABILITIES ||
	'https://api-availabilities.sandpit.cloud.spacenow.com';

export const BOOKINGS_API_HOST: string =
	process.env.BOOKINGS_API_HOST ||
	'https://api-bookings.sandpit.cloud.spacenow.com';

export const HOLIDAYS_HOST: string =
	'https://data.gov.au/data/api/3/action/datastore_search?resource_id=bda4d4f2-7fde-4bfc-8a23-a6eefc8cef80';
