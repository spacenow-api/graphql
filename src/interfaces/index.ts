import IAssetOutput, {
  IAssetInput,
  IListingAssetInput,
  IListingAssetOutput,
  IPhotoInput
} from "./asset.interface";
import IAuth from "./auth.interface";
import { IToken } from "./auth.interface";
import {
  IUser,
  IUserProfileLegacy,
  ITokenValidation,
  IResponseUser,
  IProfilePicture,
  IProfilePictureInput
} from "./user.interface";
import IBooking from "./booking.interface";
import { ILocationRequest, ILocationResponse } from "./location.interface";
import { IHolidayResponse } from "./holidays.interface";
import {
  IListingResponse,
  IUpdateRequest,
  IDraftRequest,
  IListingCategory
} from "./listing.interface";
import {
  ICategory,
  ICategoryAttribute,
  ICategoryLegacy,
  ISubCategoryLegacy,
  IBookingPeriodLegacy
} from "./category.interface";
import { IEAVAttribute } from "./eav.interface";
import { IAccountRequest } from "./account-request.interface";
import {
  IAccountResponse,
  IAccountDeleteConfirmation
} from "./account-response.interface";
import PersonalizationAPI from "../interfaces/personalization.inteface";
import { IMailRequest, IMailConfirmation } from "../interfaces/mail.interface";
import { IWeWork } from "./integrations.interface";
import IEmail from "./email.interface";
import { IDocument, IDocumentInput } from "./document.interface";

export {
  IAssetOutput,
  IAssetInput,
  IListingAssetInput,
  IListingAssetOutput,
  IAuth,
  IBooking,
  ICategory,
  ICategoryAttribute,
  IListingCategory,
  IUser,
  IProfilePicture,
  IProfilePictureInput,
  IResponseUser,
  ICategoryLegacy,
  ISubCategoryLegacy,
  IBookingPeriodLegacy,
  ILocationRequest,
  ILocationResponse,
  IHolidayResponse,
  IListingResponse,
  IUpdateRequest,
  IDraftRequest,
  IToken,
  IUserProfileLegacy,
  ITokenValidation,
  IAccountRequest,
  IAccountResponse,
  PersonalizationAPI,
  IAccountDeleteConfirmation,
  IMailRequest,
  IMailConfirmation,
  IPhotoInput,
  IWeWork,
  IEmail,
  IDocument,
  IDocumentInput,
  IEAVAttribute
};
