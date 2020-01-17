import { gql } from "apollo-server-express";

const typeDefs = gql`
  input UserInput {
    id: ID
    email: String
    password: String
    emailConfirmed: Boolean
    role: String
    userBanStatus: Int
    voucherCode: String
    provider: String
  }

  type Auth {
    email: String
    password: String
  }

  type Token {
    token: String
    expiresIn: Int
  }

  type User {
    id: String
    email: String
    password: String
    emailConfirmed: Boolean
    type: String
    role: String
    userBanStatus: Int
    provider: String
    voucherCode: String
    userType: String
    profile: UserProfile
    userVerifiedInfo: UserVerificationInfo
  }

  type Document {
    id: String
    userId: String
    fileName: String
    fileType: String
    documentStatus: String
  }

  type DocumentResponse {
    count: Int
    rows: [Document]
  }

  input UserNotificationInput {
    isSMS: Boolean
    isEmail: Boolean
    isPushNotification: Boolean
  }

  type UserNotification {
    userId: String
    notificationId: String
    isSMS: Boolean
    isEmail: Boolean
    isPushNotification: Boolean
  }

  input UserProfileInput {
    status: String
    email: String
    userId: String
    profileId: Int
    firstName: String
    lastName: String
    displayName: String
    dateOfBirth: String
    picture: String
    gender: String
    phoneNumber: String
    preferredLanguage: String
    preferredCurrency: String
    info: String
    location: String
    createdAt: String
    updatedAt: String
    stripeCusId: String
    country: Int
    verificationCode: Int
    countryCode: String
    customerId: String
    accountId: String
    userLocationId: Int
    profileType: String
    companyName: String
    companyId: String
    contactJobRole: String
  }

  type UserProfile {
    status: String
    userId: String
    profileId: Int
    firstName: String
    lastName: String
    displayName: String
    dateOfBirth: String
    picture: String
    gender: String
    phoneNumber: String
    preferredLanguage: String
    preferredCurrency: String
    info: String
    location: String
    createdAt: String
    updatedAt: String
    stripeCusId: String
    country: Int
    verificationCode: Int
    countryCode: String
    customerId: String
    accountId: String
    userLocationId: Int
    profileType: String
    companyName: String
    companyId: String
    contactJobRole: String
  }

  type UserVerificationInfo {
    id: Int
    userId: String
    isEmailConfirmed: Boolean
    isFacebookConnected: Boolean
    isGoogleConnected: Boolean
    isIdVerification: Boolean
    isPhoneVerified: Boolean
  }

  type CustomUserVerification {
    id: String
    email: String
    password: String
    emailConfirmed: Boolean
    userType: String
    profile: UserProfile
    verification: UserVerificationInfo
    role: String
  }

  type TokenWithUser {
    token: String
    expiresIn: Int
    status: String
    user: CustomUserVerification
  }

  type CustomAdminUserVerification {
    id: String
    email: String
    password: String
    role: String
  }

  type TokenValidation {
    status: String
    user: CustomUserVerification
  }

  type AdminTokenValidation {
    status: String
    admin: CustomAdminUserVerification
  }

  type UsersCountResponse {
    count: Int
    guests: Int
    hosts: Int
  }

  type UsersResponse {
    rows: [User]
    count: Int
  }

  type UserProfilePicture {
    userId: String
    picture: String
  }

  extend type Query {
    getAllUsers: [User]
    getTotalUsersLegacy: UsersCountResponse
    getAllUsersLegacy(days: Int): UsersResponse
    getTotalUsersLegacyByDate(days: Int): UsersCountResponse
    getUser(id: String!): User
    getUserDocuments(userId: String!): DocumentResponse
    getUserNotifications(userId: String!): [UserNotification]
    getUserLegacyById(id: String!, token: String): User
    getUsersByProvider(provider: String): [User]
  }

  extend type Mutation {
    updateUserLegacy(input: UserInput): Success
    updateUserProfileLegacy(userId: String, input: UserProfileInput): Success
    updateUserNotification(
      userId: ID
      notificationId: ID
      input: UserNotificationInput
    ): UserNotification
    updateProfilePicture(file: Upload, userId: String!): UserProfilePicture
    deleteUserByEmail(email: String): Success
    deleteDocument(id: String, userId: String): Success
    uploadDocument(userId: String, file: Upload): Document
    login(email: String, password: String): TokenWithUser
    loginAdmin(email: String, password: String): Token
    tokenValidate(token: String!): TokenValidation
    tokenGoogleValidate(token: String!, userType: String): TokenWithUser
    tokenFacebookValidate(token: String!, userType: String): TokenWithUser
    tokenAdminValidate(token: String!): AdminTokenValidation
    signup(
      email: String!
      password: String!
      firstName: String!
      lastName: String!
      userType: String
    ): TokenWithUser
    resetPassword(email: String!): Success
    resetPasswordUpdate(token: String!, password: String!): Success
    resendEmail(email: String!): Success
  }
`;

export default typeDefs;
