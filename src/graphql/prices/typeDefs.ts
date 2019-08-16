import { gql } from "apollo-server";

const typeDefs = gql`
  
  type PriceEstimation {
    priceEstimationId: String
    state: String
    suburb: String
    postcode: String
    estimate: Int
    term: String
  }

  extend type Query {
    getPricesEstimation: [PriceEstimation]
  }
`;

export default typeDefs;
