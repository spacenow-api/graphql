import { gql } from "apollo-server-express";

const typeDefs = gql`
  type OutputEmail {
    status: String
  }

  extend type Mutation {
    sendEmail(template: String, destination: String, data: String): OutputEmail
  }
`;

export default typeDefs;
