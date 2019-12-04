import * as dotenv from "dotenv";
dotenv.config();

export const PORT: number = 4000;

export const jwtSecret: string = process.env.JWT_SECRET || "Spacenow";

export const PLAYGROUND = process.env.PLAYGROUND
  ? Boolean(process.env.PLAYGROUND)
  : false;

export const TEMP_FILE_UPLOAD = "./temp";

export const ASSETS_API_HOST: string =
  process.env.ASSETS_API_HOST || "http://localhost:6007";

export const CATEGORIES_API_HOST: string =
  process.env.CATEGORIES_API_HOST || "http://localhost:6003";

export const LOCATIONS_API_HOST: string =
  process.env.LOCATIONS_API_HOST || "http://localhost:6005";

export const SPACES_API_HOST: string =
  process.env.SPACES_API_HOST || "http://localhost:6002";

export const USERS_API_HOST: string =
  process.env.USERS_API_HOST || "http://localhost:6001";

export const API_AVAILABILITIES: string =
  process.env.API_AVAILABILITIES || "http://localhost:6011/availabilities";

export const API_BOOKING: string =
  process.env.API_BOOKING || "http://localhost:6012/bookings";

export const HOLIDAYS_HOST: string =
  "https://data.gov.au/data/api/3/action/datastore_search?resource_id=bda4d4f2-7fde-4bfc-8a23-a6eefc8cef80";

export const GOOGLE_PLACE_API_URL =
  "https://maps.googleapis.com/maps/api/place/details/json?place_id=";

export const GOOGLE_MAP_API = process.env.GOOGLE_MAP_API || "";

export const WEWORK_API: string =
  "https://refer.wework.com/api/v1/partners/referrals";
export const WEWORK_API_KEY: string = "API_KEY";

export const HUBSPOT_FORMS_API: string = "https://forms.hubspot.com";

export const HUBSPOT_PORTAL_ID: string = "5126785";
export const HUBSPOT_FORM_GUID: string = "81780c35-04df-4b49-a2d7-781537210b11";

export const API_CAMPAIGNS: string =
  process.env.API_CAMPAIGNS ||
  "https://api-price-estimation.sandpit.cloud.spacenow.com/price-estimation";

export const SEARCH_API_HOST: string =
  process.env.SEARCH_API_HOST || "http://localhost:6008";

export const PAYMENTS_API_HOST: string =
  process.env.PAYMENTS_API_HOST || "http://localhost:6009";

export const EMAILS_API: string =
  process.env.EMAILS_API || "http://localhost:6010";

export const MESSAGES_API: string =
  process.env.MESSAGES_API || "http://localhost:6014";

export const NOTIFICATION_API: string =
  process.env.NOTIFICATION_API || "http://localhost:6015";

export const TWILIO_ACCOUNT_SID: string = process.env.TWILIO_ACCOUNT_SID || "";

export const TWILIO_AUTH_TOKEN: string = process.env.TWILIO_AUTH_TOKEN || "";

export const TWILIO_PHONE_FROM: string = process.env.TWILIO_PHONE_FROM || "";
