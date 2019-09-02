import { gql } from "apollo-server";

const typeDefs = gql`

  type SearchResult {
    status: String
    searchKey: String
    result: [Listing]
  }
  
  extend type Query {  
    searchByAddress(lat: String!, lng: String!): SearchResult
    searchByFilters(key: String!, categories: String, duration: String, priceMin: Float, priceMax: Float, instant: String): SearchResult
  }
`;

export default typeDefs;
