import { gql } from "apollo-server-express";

const typeDefs = gql`
  
  type PriceEstimation {
    priceEstimationId: String
    state: String
    suburb: String
    postcode: String
    estimate: Float
    term: String
    type: String
  }

  extend type Query {
    getPricesEstimation(type: String!): [PriceEstimation]
  }
`;

export default typeDefs;
