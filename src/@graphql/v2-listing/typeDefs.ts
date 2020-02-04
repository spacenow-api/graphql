import { gql } from "apollo-server-express";

const typeDefs = gql`
  type V2Listing {
    id: Int
    userId: String
    locationId: Int
    listSettingsParentId: Int
    bookingPeriod: String
    title: String
    bookingType: String
    isPublished: Boolean
    isReady: Boolean
    status: String
    createdAt: Date @date
    updatedAt: Date @date
  }

  type V2Step {
    id: Int
    listingId: Int
    step1: String
    step2: String
    step3: String
    step4: String
    step5: String
    step6: String
    step7: String
    step8: String
    completed: Float
    createdAt: Date @date
    updatedAt: Date @date
  }

  extend type Query {
    getV2Listing(id: Int!): V2Listing
    getV2Steps(id: Int!): V2Step
  }

  extend type Mutation {
    postV2Listing: V2Listing
  }
`;

export default typeDefs;
