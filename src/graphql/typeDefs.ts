import { gql } from "apollo-server";

const typeDefs = gql`
  type OutputLocation {
    id: Int
    userId: String
    country: String
    address1: String
    address2: String
    buildingName: String
    city: String
    state: String
    zipcode: String
    lat: String
    lng: String
    createdAt: String
    updatedAt: String
  }

  type OutputAsset {
    id: ID!
    path: String!
    filename: String!
    mimetype: String!
    encoding: String!
  }

  type Query {
    getLocationById(id: Int): OutputLocation
    getAllAssets: [OutputAsset!]!
    getAsset(id: ID): OutputAsset
  }

  type Mutation {
    createAsset(folder: String, file: Upload!): OutputAsset!
    createMultipleAssets(folder: String, files: [Upload!]!): [OutputAsset!]!
  }
`;

export default typeDefs;
