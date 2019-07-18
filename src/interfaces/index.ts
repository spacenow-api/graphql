import IAssetOutput, { IAssetInput } from "./asset.interface";
import IAuth from "./auth.interface";
import { IToken } from './auth.interface';
import IUser from "./user.interface";
import IBooking from "./booking.interface";
import { ILocationRequest, ILocationResponse } from "./location.interface";
import { IHolidayResponse } from './holidays.interface';
import { IListingResponse, IUpdateRequest, IDraftRequest } from './listing.interface';
import {
  ICategory,
  ICategoryLegacy,
  ISubCategoryLegacy,
  IBookingPeriodLegacy
} from "./category.interface";

export {
  IAssetOutput,
  IAssetInput,
  IAuth,
  IBooking,
  ICategory,
  IUser,
  ICategoryLegacy,
  ISubCategoryLegacy,
  IBookingPeriodLegacy,
  ILocationRequest,
  ILocationResponse,
  IHolidayResponse,
  IListingResponse,
  IUpdateRequest,
  IDraftRequest,
  IToken
};
