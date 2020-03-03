import { gql } from "apollo-server-express";

const typeDefs = gql`
  type BookingPeriod {
    id: Int
    listSettingsParentId: Int
    monthly: Int
    weekly: Int
    daily: Int
    hourly: Int
  }

  type SubCategories {
    id: Int
    listSettingsParentId: Int
    listSettingsChildId: Int
    subCategory: SubCategory
    bookingPeriod: BookingPeriod
  }

  type SubCategory {
    id: Int
    typeId: Int
    itemName: String
    otherItemName: String
    description: String
    maximum: Int
    minimum: Int
    startValue: Int
    endValue: Int
    step: String
    isEnable: String
    photo: String
    photoType: String
    isSpecification: Int
    specData: String
  }

  type Category {
    id: Int
    typeId: Int
    itemName: String
    otherItemName: String
    description: String
    maximum: Int
    minimum: Int
    startValue: Int
    endValue: Int
    step: String
    isEnable: String
    photo: String
    photoType: String
    isSpecification: Int
    specData: String
    subCategories: [SubCategories]
  }

  extend type Query {
    getCategories: [Category]
    getCategoryActivities(id: Int!): [ListSettings]
    getCategoryAmenities(id: Int!): [ListSettings]
    getCategoryFeatures(id: Int!): [ListSettings]
    getCategoryRules(id: Int!): [ListSettings]
    getCategoryStyles(id: Int!): [ListSettings]
  }
`;

export default typeDefs;
