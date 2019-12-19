import { gql } from "apollo-server-express";

const typeDefs = gql`
  directive @currency on FIELD_DEFINITION
  directive @date(defaultFormat: String = "dd/mm/yyyy") on FIELD_DEFINITION

  scalar Date

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
