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

  extend type Query {
    getAllUsers: [User]
    getAllUsersLegacy: [User]
    getUser(id: String!): User
  }

  extend type Mutation {
    updateUserLegacy(input: UserInput): Success
    deleteUserByEmail(email: String): Success
    login(email: String, password: String): Token
    loginAdmin(email: String, password: String): Token
    tokenValidate(token: String!): TokenValidation
    tokenAdminValidate(token: String!): AdminTokenValidation
  }
`;

export default typeDefs;
