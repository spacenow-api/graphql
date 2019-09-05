import { gql } from "apollo-server";

const typeDefs = gql`
  input UserInput {
    id: ID
    email: String
    password: String
    emailConfirmed: Boolean
    role: String
    userBanStatus: Int
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
    role: String
    userBanStatus: Int
    provider: String
    profile: UserProfile
    userVerifiedInfo: UserVerificationInfo
  }

  input UserProfileInput {
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
    profile: UserProfile
    verification: UserVerificationInfo
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

  type UsersResponse {
    rows: [User]
    count: Int
  }

  extend type Query {
    getAllUsers: [User]
    getAllUsersLegacy: UsersResponse
    getUser(id: String!): User
    getUserLegacyById(id: String!): User
  }

  extend type Mutation {
    updateUserLegacy(input: UserInput): Success
    updateUserProfileLegacy(userId: String, input: UserProfileInput): Success
    updateProfilePicture(file: Upload, userId: String!): Success
    deleteUserByEmail(email: String): Success
    login(email: String, password: String): TokenWithUser
    loginAdmin(email: String, password: String): Token
    tokenValidate(token: String!): TokenValidation
    tokenGoogleValidate(token: String!): TokenWithUser
    tokenFacebookValidate(token: String!): TokenWithUser
    tokenAdminValidate(token: String!): AdminTokenValidation
    signup(email: String!, password: String!, firstName: String!, lastName: String!): TokenWithUser
    resetPassword(email: String!): Success
    resetPasswordUpdate(email: String!, token: String!, password: String!): Success
  }
`;

export default typeDefs;
