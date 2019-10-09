import { gql } from "apollo-server";

const typeDefs = gql`
  directive @currency on FIELD_DEFINITION | FIELD

  scalar _Any

  type Response {
    count: Int
    rows: [_Any]
  }

  type Success {
    status: String
  }

  type Query {
    root: String
  }

  type Mutation {
    root: String
  }
`;

export default typeDefs;
