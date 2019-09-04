import { gql } from "apollo-server";

const typeDefs = gql`

  type OutputEmail {
    status: String
  }

  extend type Mutation {
    sendEmail(
      template: String
      data: String
    ): OutputEmail
  }
`;

export default typeDefs;
