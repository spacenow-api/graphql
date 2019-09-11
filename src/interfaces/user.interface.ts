import { IToken } from "./auth.interface";

interface IUser {
  id: string;
  email: string;
  password: string;
  emailConfirmed: number;
  type: string;
  userBanStatus: number;
  role: string;
  provider: string;
  createdAt: Date;
  updatedAt: Date;
}

interface IUserProfileLegacy {
  userId: string;
  profileId: number;
  firstName: string;
  lastName: string;
  displayName: string;
  dateOfBirth: string;
  picture: string;
  gender: string;
  phoneNumber: string;
  preferredLanguage: string;
  preferredCurrency: string;
  info: string;
  location: string;
  createdAt: Date;
  updatedAt: Date;
  stripeCusId: string;
  country: number;
  verificationCode: number;
  countryCode: string;
  customerId: string;
  accountId: string;
  userLocationId: number;
  profileType: string;
  companyName: string;
  companyId: string;
  contactJobRole: string;
}

interface ITokenValidation {
  status: string;
  id: string;
  email: string;
  password: string;
  emailConfirmed: number;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  userBanStatus: number;
  profile: IUserProfileLegacy;
}

interface IResponseUser {
  rows: [IUser];
  count: number;
}

interface IProfilePictureInput {
  file: File;
  userId: string;
}

interface IProfilePicture {
  picture: string;
  userId: string;
}

export {
  IUser,
  IProfilePicture,
  IUserProfileLegacy,
  ITokenValidation,
  IResponseUser,
  IProfilePictureInput
};
